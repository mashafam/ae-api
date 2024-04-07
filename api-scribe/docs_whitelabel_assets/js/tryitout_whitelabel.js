async function executeTryOut(endpointId, form) {
    const executeBtn = document.querySelector(`#btn-executetryout-${endpointId}`);
    executeBtn.textContent = executeBtn.dataset.loadingText;
    executeBtn.disabled = true;
    executeBtn.scrollIntoView({behavior: "smooth", block: "center"});

    let body;
    let setter;
    if (form.dataset.hasfiles === "1") {
        body = new FormData();
        setter = (name, value) => body.append(name, value);
    } else if (form.dataset.isarraybody === "1") {
        body = [];
        setter = (name, value) => _.set(body, name, value);
    } else {
        body = {};
        setter = (name, value) => _.set(body, name, value);
    }
    const bodyParameters = form.querySelectorAll('input[data-component=body]');
    // let emptyHidden = [];
    bodyParameters.forEach(el => {
        let value = el.value;

        if (el.type === 'number' && typeof value === 'string' && value !== '') {
            value = parseFloat(value);
        }

        if (el.type === 'hidden') {
            // emptyHidden.push(el.name);
            value = [];
        }

        if (el.type === 'file' && el.files[0]) {
            setter(el.name, el.files[0]);
            return;
        }

        if (el.type !== 'radio') {
            if (value === "" && el.required === false) {
                // Don't include empty optional values in the request
                return;
            }
            setter(el.name, value);
            return;
        }

        if (el.checked) {
            value = (value === 'false') ? false : true;
            setter(el.name, value);
        }
    });

    // function isNumeric(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // }
    //
    // const matchElems = function (arrFields, bodyArr)
    // {
    //     console.log(arrFields, bodyArr);
    //     for (let key of arrFields) {
    //         if (bodyArr[key]) {
    //             arrFields.shift();
    //             if (matchElems(arrFields, bodyArr[key])) {
    //                 continue;
    //             }
    //         }
    //         return false;
    //     }
    //
    //     return true;
    // }
    //
    // if (emptyHidden) {
    //     for (let field of emptyHidden) {
    //         if(! matchElems(field.split('.'), body)) {
    //             // setter(field, []);
    //         }
    //     }
    // }

    const query = {};
    const queryParameters = form.querySelectorAll('input[data-component=query]');
    queryParameters.forEach(el => {
        if (el.type !== 'radio' || (el.type === 'radio' && el.checked)) {
            if (el.value === '') {
                // Don't include empty values in the request
                return;
            }

            _.set(query, el.name, el.value);
        }
    });

    let path = form.dataset.path;
    const urlParameters = form.querySelectorAll('input[data-component=url]');
    urlParameters.forEach(el => (path = path.replace(new RegExp(`\\{${el.name}\\??}`), el.value)));

    const headers = Object.fromEntries(Array.from(form.querySelectorAll('input[data-component=header]'))
        .map(el => [el.name, el.value]));

    // When using FormData, the browser sets the correct content-type + boundary
    let method = form.dataset.method;
    if (body instanceof FormData) {
        delete headers['Content-Type'];

        // When using FormData with PUT or PATCH, use method spoofing so PHP can access the post body
        if (['PUT', 'PATCH'].includes(form.dataset.method)) {
            method = 'POST';
            setter('_method', form.dataset.method);
        }
    }

    let preflightPromise = Promise.resolve();
    if (window.useCsrf && window.csrfUrl) {
        preflightPromise = makeAPICall('GET', window.csrfUrl).then(() => {
            headers['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');
        });
    }

    return preflightPromise.then(() => makeAPICall(method, path, body, query, headers, endpointId))
        .then(([responseStatus, statusText, responseContent, responseHeaders]) => {
            handleResponse(endpointId, responseContent, responseStatus, responseHeaders)
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log("Request cancelled");
                return;
            }
            console.log("Error while making request: ", err);
            handleError(endpointId, err);
        })
        .finally(() => {
            executeBtn.disabled = false;
            executeBtn.textContent = executeBtn.dataset.initialText;
        });
}
