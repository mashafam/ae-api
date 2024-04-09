# Tax

Taxes are used to support Merchant in accordance with the country of business law.

- [Get tax](#get-tax)
- [Update tax](#update-tax)

## Get tax

### Description

This operation returns tax details.

> **GET** /api/v3/tax/get<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** /api/v3/tax/get

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|active|Boolean|Mandatory|Shows if tax active or not<br/>Possible values: *true, false*|
|priceInclude|Boolean|Mandatory|Shows if tax included price or not<br/>Possible values: *true, false*|
|tax|String|Mandatory|Tax value: *[0 .. 99.9]*<br/>Min lenght - 1, max lenght - 4|

#### Response example

> Status: 200(OK)

```json
{
    "data": {
        "active": false,
        "priceInclude": false,
        "tax": "0"
    }
}
```

## Update tax

### Description

This operation allows to update tax details.

> **POST** /api/v3/tax/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|active|Boolean|Mandatory|Shows if tax active or not<br/>Possible values: *true, false*|
|priceInclude|Boolean|Mandatory|Shows if tax included price or not<br/>Possible values: *true, false*|
|tax|String|Mandatory|Tax value: *[0 .. 99.9]*<br/>Min lenght - 1, max lenght - 4|

#### Request example

> **POST** /api/v3/tax/update

```json
{
    "data": {
        "active": true,
        "priceInclude": false,
        "tax": "7.5"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and can include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|active|Boolean|Mandatory|Specified in request|
|priceInclude|Boolean|Mandatory|Specified in request|
|tax|String|Mandatory|Specified in request|

#### Response example

> Status: 200(OK)

```json
{
    "data": {
        "active": true,
        "priceInclude": false,
        "tax": "7.5"
    }
}
```
