# Options

- [Get all options](#get-all-options),
- [Create option](#create-option),
- [Update option](#update-option),
- [Delete option](#delete-option)

## Get all Options

### Description

This operation allows to retieve all options.

> **POST** api/v3/option/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input 

There is no body for such request.

```json
{}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Array of options objects<br/>PHP system limitations|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|name|String|Mandatory|Option name provided by User<br/>Min lenght - 1; max lenght - 255|
|system|Boolean|Mandatory|Indicates weather option is system defined or custom<br/>Only *false* for custom-made|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "name": "Color",
               "system": true
           },
           {
               "id": 2,
               "name": "Size",
               "system": true
           },
           {
               "id": 3,
               "name": "Material",
               "system": true
           },
           {
               "id": 4,
               "name": "Pattern",
               "system": true
           },
           {
               "id": 5,
               "name": "Clothes1",
               "system": false
           }
       ]
   }
}
```


## Create option

### Description

This operation allows to create new custom option used to characterize product.

> **POST** api/v3/option/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body is waiting for following content:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Option name provided by User<br/>Min lenght - 1; max lenght - 255|

#### Request example

> **POST** api/v3/option/create

```json
{
   "data": {"name": "Materials"}
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|name|String|Mandatory|Option name provided by User<br/>Min lenght - 1; max lenght - 255|
|system|Boolean|Mandatory|Indicates weather option is system defined or custom<br/>Only *false* for custom-made|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 8,
       "name": "Materials",
       "system": false
   }
}
```

## Update option

### Description

This operation allows to update custom option used to characterize product.

> **POST** api/v3/option/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body is waiting for following content:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|name|String|Mandatory|Option name provided by User<br/>Min lenght - 1; max lenght - 255|

#### Request example

> **POST** api/v3/option/update

```json
{
   "data": {
       "id": "8",
       "name": "Clothes Style"
   }
}

```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|name|String|Mandatory|Option name provided by User<br/>Min lenght - 1; max lenght - 255|
|system|Boolean|Mandatory|Indicates weather option is system defined or custom<br/>Only *false* for custom-made|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 8,
       "name": "Clothes Style",
       "system": false
   }
}
```

## Delete option

### Description

This operation provides deletion of existing custom option.

> **POST** api/v3/option/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Integers|Mandatory|System identifier of option to be deleted|

#### Request Example

> **POST** api/v3/option/delete<br/>
> **Content-type**: application/json

```json
{
   "data": {
       "id": 8
   }
}
```

### Output

In case of success, the system returns **200(OK)** without response body.