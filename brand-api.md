# Brands

This page present list of operations for **Brand** entity.

- [Get brand](#get-brand)
- [Get all brands](#get-all-brands)
- [Create brand](#create-brand)
- [Update brand](#update-brand)
- [Delete brand](#delete-brand)

## Get brand

### Description

This operation returns a specific brand information.

> **GET** api/v3/brand/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json


### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integers|Mandatory|System identifier of brand to be deleted|

#### Request example

> **GET** api/v3/brand/get?id=4<br/>
> **Content-type**: application/json

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of brand to be returned (automatically generated)|
|name|String|Mandatory|Brand name|
|image|Href|Optional|Brand logo url|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 4,
       "name": "Adidas",
       "image": "img.jpg"
   }
}
```

## Get all brands

### Description

This operation returns a list of brands created by User.

> **POST** api/v3/brand/get-list <br/>
> **Authorization:** Bearer <br/>
> **Content-type**: application/json


### Input

#### Get All brands

Request can be used to return full list of brands created by particular User.

#### Get All brands (custom request)

Request can be modified by using special parameters to retirieve definite brands from whole list (+ sorting & filtering). Parameters that can be used to narrow the listing criteria:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Oprional|Brand name|
|filter|Object|Optional|searchTerm performs search by name parameter<br/>min length - 1; max length - 255|
|sort|Object|String|System sorting options such as: <br/> - id:asc, id:desc, - name:asc, name:desc|

#### Request example

> **GET** api/v3/brand/get-list<br/>
> **Content-type**: application/json

```json
{
    "data": {
        "page": 1,
        "pageSize": 3,
        "filter": {"searchTerm": "auto"},
        "sort": "name:asc"
    }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|List of brand objects|
|id|Integer<br/>(Bigint)|Mandatory|System identifier(s) of brand(s) to be returned (automatically generated)|
|name|String|Mandatory|Brand name|
|image|Href|Mandatory|Brand logo url|
|totalPages|Integer<br/>(Bigint)|Mandatory|Number of pages (groups of items), controlled with pageSize parameter|
|totalItems|Integer<br/>(Bigint)|Mandatory|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
"data": {
    "items": [
    {
        "id": 4,
        "name": "Adidas",
        "image": "img.jpg",
        "itemsCount": 0
    },
    {
        "id": 3,
        "name": "Adidas",
        "image": "img.jpg",
        "itemsCount": 0
    },
    {
        "id": 1,
        "name": "Nike",
        "image": "img.jpg",
        "itemsCount": 1
    }
       ],
    "totalPages": 1,
    "totalItems": 3 
    }
```


## Create brand

### Description

This operation creates Brand that can be used to characterize Product.

> **POST** api/v3/brand/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Brand name <br/> min length - 1; max length - 255|
|image|Href|Optional|Brand logo url <br/> min length - 1; max length - 255|

#### Request Example

> **POST** api/v3/brand/create<br/>
> **Content-type**: application/json

```json
{
    "data": {
        "name": "Nike",
        "image": "img.jpg"
    }
}
```

### Output

Success response code is 201 (Created); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (automatically generated)|
|name|String|Mandatory|Brand name provided in request|
|image|Href|Optional|Brand logo url provided in request|

#### Response example

> Status: 201 (Created) 

```json
{
   "data": {
       "id": 4,
       "name": "Adidas",
       "image": "img.jpg"
   }
}
```


## Update brand

### Description

This operation provides update of existing Brand.

> **POST** api/v3/brand/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of brand to be updated (automatically generated)|
|name|String|Mandatory|Brand name<br/> min length - 1; max length - 255|
|image|Href|Optional|Brand logo url<br/> min length - 1; max length - 255|

#### Request Example

> **POST** api/v3/brand/update<br/>
> **Content-type**: application/json

```json
{
    "data": {
        "id": 1,
        "name": "Nikeee",
        "image": "img.jpg"
    }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (automatically generated)|
|name|String|Mandatory|Brand name provided in request|
|image|Href|Mandatory|Brand logo url provided in request|

#### Response example

> Status: 200 (OK) 

```json
{
   "data": {
       "id": 1,
       "name": "Nikeee",
       "image": "img.jpg"
   }
}
```

## Delete brand

### Description

This operation provides deletion of existing Brand.

> **POST** api/v3/brand/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|System identifier(s) of brand to be deleted<br/>Number of items is limited only by PHP logic|

#### Request Example

> **POST** api/v3/brand/delete<br/>
> **Content-type**: application/json

Example request: 
{
    "data": {
        "items": [1, 2]
    }
}

### Output

In case of success, the system returns **200(OK)** without response body.