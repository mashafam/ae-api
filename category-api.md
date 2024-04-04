# Category

- [Get category](#get-category),
- [Get all categories](#get-all-categories),
- [Create category](#create-category),
- [Update category](#update-category),
- [Update categories order](#update-categories-order),
- [Delete categories](#delete-categories)

## Get Category

### Description

This operation allows to retrieve specific category.

> **GET** api/v3/category/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Query parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|slug|String|Optional|Descriptive unique text that identifies the category<br/>Min length - 1; max length - 255|

#### Request example

> **GET** {{baseUrl}}/api/v3/category/get?id=25&slug=scaled-metal-models-2


### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|name|String|Mandatory|Category name<br/>Value provided in request|
|slug|String|Optional|Descriptive unique text that identifies the category|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|
|itemsCount|Integer<br/>Positive Integer|Mandatory|Quantity of products in the category|
|image|String (url)|Optional|Category logo url<br/>Value provided in request|
|metaTitle|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 60|
|metaDescription|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 160|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 25,
        "name": "Scaled metal models test",
        "slug": "scaled-metal-models-2",
        "showOnMain": false,
        "sortIndex": 25,
        "itemsCount": 0,
        "image": "img.jpg",
        "metaTitle": null,
        "metaDescription": null
    }
}
```

## Get all Categories

### Description

This operation allows to retrieve all existing categories.

> **GET** api/v3/category/get-list?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|
|filter|Object<br/>Limited system values|Optional|searchTerm performs search by name parameter|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. name:asc, name:desc|

#### Request example

```json
{
    "data": {
        "page": 1,
        "pageSize": 3,
        "filter": {"searchTerm": "models"},
        "sort": "name:asc"
    }
}
```


### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|name|String|Mandatory|Category name<br/>Value provided in request|
|slug|String|Optional|Descriptive unique text that identifies the category|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|
|itemsCount|Integer<br/>Positive Integer|Mandatory|Quantity of products in the category|
|image|String (url)|Optional|Category logo url<br/>Value provided in request|
|metaTitle|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 60|
|metaDescription|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 160|
|totalPages|Integer<br/>(Bigint)|Mandatory|Number of pages (groups of items), controlled with pageSize
parameter|
|totalItems|Integer<br/>(Bigint)|Mandatory|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "items": [
            {
                "id": 2,
                "name": "Scaled metal models",
                "slug": "scaled-metal-models",
                "showOnMain": true,
                "sortIndex": 1,
                "itemsCount": 14,
                "image": "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg",
                "metaTitle": "Scaled metal models",
                "metaDescription": "We sell scaled metal models of cars in 1/43 scale🚗🚙🚓🚕"
            },
            {
                "id": 25,
                "name": "Scaled metal models test",
                "slug": "scaled-metal-models-2",
                "showOnMain": false,
                "sortIndex": 25,
                "itemsCount": 0,
                "image": "img.jpg",
                "metaTitle": null,
                "metaDescription": null
            }
        ],
        "totalPages": 1,
        "totalItems": 2
    }
}
```


## Create category

### Description

This operation provide creating of new category that can be used to group products. 

> **POST** api/v3/category/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Category name<br/>Min length - 1; max length - 255|
|image|String (url)|Optional|Category image url<br/>Min length - 1; max length - 255|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|

#### Request example

```json
{
    "data": {
        "name": "Scaled metal models",
        "image": "https://static.dev.alephexpress.com/api/file/get/e4586ac1-09cb-48cf-ab45-7341f04995d3/16ced3c00a1e550b79f7f7519a1f075e_1702474108.JPG",
        "showOnMain": true
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|name|String|Mandatory|Category name<br/>Value provided in request|
|slug|String|Optional|Descriptive unique text that identifies the category|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|
|itemsCount|Integer<br/>Positive Integer|Mandatory|Quantity of products in the category|
|image|String (url)|Optional|Category logo url<br/>Value provided in request|
|metaTitle|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 60|
|metaDescription|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 160|


### Update category

### Description

This operation provides updates for exsiting category.

> **POST** api/v3/category/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|name|String|Mandatory|Category name<br/>Min length - 1; max length - 255|
|image|String (url)|Optional|Category image url<br/>Min length - 1; max length - 255|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|

#### Request example

```json
{
    "data": {
        "id": "1",
        "name": "Clothes",
        "image": "img.jpg",
        "showOnMain": true
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|name|String|Mandatory|Category name<br/>Value provided in request|
|slug|String|Optional|Descriptive unique text that identifies the category|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|showOnMain|Boolean|Mandatory|Determines whether the category will be displayed on the main page of Online Shop or not.<br/>Possible values: *true*, *false*|
|itemsCount|Integer<br/>Positive Integer|Mandatory|Quantity of products in the category|
|image|String (url)|Optional|Category logo url<br/>Value provided in request|
|metaTitle|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 60|
|metaDescription|String|Optional|Available if SEO plugin is activated<br/>Min length - 1; max length - 160|

#### Response example

> Status: 200 (OK)
```json
{
    "data": {
        "id": 1,
        "name": "Clothes",
        "slug": "scaled-metal-models-2",
        "showOnMain": true,
        "sortIndex": 24,
        "itemsCount": 0,
        "image": "img.jpg",
        "metaTitle": null,
        "metaDescription": null
    }
}
```

### Update Categories Order

### Description

Using this operation, User sets the order display of categories in the list.

> **POST** api/v3/category/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of category - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Category unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

```json
{
    "data": {
        "items": [
            {
                "id": 1,
                "sortIndex" : 2
            },
            {
                "id": 2,
                "sortIndex": 1
            }
        ]
    }
}
```

### Output

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful categories order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

### Delete Categories

### Description

This operation performs category deletion. Also can be used for bulk deletion.

> **POST** api/v3/category/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of category - order number pairs.<br/>Number of items is limited only by PHP logic|

#### Request example

```json
{
    "data": {
        "items": [1, 2]
    }
}
```

### Output

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful deletion.

#### Response example

> Status: 200 (OK)
```json
{}
```
