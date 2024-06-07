# Page

Static pages are user on Online Shop Buyer's side to represent some additional information (as Delivery conditions, Payment details, etc.)

- [Get Page](#get-page)
- [Get all pages](#get-all-pages)
- [Create page](#create-page)
- [Update page](#update-page)
- [Update Pages Order](#update-pages-order)
- [Update Pages visibility](#update-page-visibility)
- [Delete Pages](#delete-pages)


## Get Page

Allows to retrieve static page in Online shop.

> **GET** api/v3/page/get?id={id}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Page unique identifier (auto increment)|

#### Request example

> **GET** api/v3/page/get?id=11

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|int|Page identifier|
|slug|string|Required|Max - 255|Auto generated URI based on page name|
|isVisible|boolean|Required|boolean|Indicates page visibility on the store|
|name|string|Required|Max 255|User provided page name, or system defined page name|
|description|string|Required|Max 16B|User provided page description, or system defined page description|
|sortIndex|integer|Required|int|Defines displaying order of the pages|
|type|string|Required|Predefined system list|Type of page<br/>Possible values: *custom, default*|
|config|json|Required|json|Used to fill in legal documents with store data automatically|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 11,
       "slug": "name-page-3",
       "isVisible": true,
       "name": "name page",
       "description": "description",
       "sortIndex": 9,
       "type": "custom",
       "config": null
   }
}
```

## Get all Pages

Allows to retrieve all pages (custom and default) in Online shop.

> **POST** api/v3/page/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body variables**

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|page|integer|Optional|int|
|pageSize|integer|Optional|int|
|filter|object|Optional|searchTerm value max - 255|
|sort|string|Optional|“name:asc”, “name:desc”,<br/>“id:asc”, “id:desc”,<br/> “sortIndex:asc”, “sortIndex:desc”, <br/> “type:asc”, “type:desc”|

#### Request example

> **POST** api/v3/page/get-list

```json
{
   "data": {
       "page": 1,
       "pageSize": 3,
       "filter": {"searchTerm": "page"},
       "sort": "name:asc"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Php system limitations|Return empty array if no match found|
|id|integer|Required|int|Page identifier|
|slug|string|Required|Max - 255|Auto generated URI based on page name|
|isVisible|boolean|Required|boolean|Indicates page visibility on the store|
|name|string|Required|Max 255|User provided page name, or system defined page name|
|description|string|Required|Max 16B|User provided page description, or system defined page description|
|sortIndex|integer|Required|int|Defines displaying order of the pages|
|type|string|Required|Predefined system list|Type of page|
|config|json|Required|json|Used to fill in legal documents with store data automatically|
|totalPages|integer|Required|bigint|Number of pages (groups of items), controlled with pageSize parameter|
|totalItems|integer|Required|bigint|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 4,
               "slug": "about",
               "isVisible": true,
               "name": "About us",
               "sortIndex": 3,
               "type": "about-us"
           },
           {
               "id": 1,
               "slug": "contacts",
               "isVisible": true,
               "name": "Contact us",
               "sortIndex": 0,
               "type": "contacts"
           },
           {
               "id": 3,
               "slug": "delivery",
               "isVisible": true,
               "name": "Delivery",
               "sortIndex": 2,
               "type": "delivery"
           }
       ],
       "totalPages": 4,
       "totalItems": 11
   }
}
```


## Create Page

Allows to create static page in Online Shop.

> **POST** api/v3/page/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|isVisible|boolean|Required|boolean|Indicates page visibility on the store|
|name|string|Required|Max 255|User provided page name, or system defined page name|
|description|string|Required|Max 16B|User provided page description, or system defined page description|

#### Request example

> **POST** api/v3/page/create

```json
{
   "data": {
       "isVisible": false,
       "name": "name page",
       "description": "description"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|int|Page identifier|
|slug|string|Required|Max - 255|Auto generated URI based on page name|
|isVisible|boolean|Required|boolean|Indicates page visibility on the store|
|name|string|Required|Max 255|User provided page name, or system defined page name|
|description|string|Required|Max 16B|User provided page description, or system defined page description|
|sortIndex|integer|Required|int|Defines displaying order of the pages|
|type|string|Required|Predefined system list|Type of page<br/>Possible values: *custom, default*|
|config|json|Required|json|Used to fill in legal documents with store data automatically|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 10,
       "slug": "name-page-3",
       "isVisible": false,
       "name": "name page",
       "description": "description",
       "sortIndex": 9,
       "type": "custom",
       "config": null
   }
}
```

## Update page

Allows to update page content.

> **POST** api/v3/page/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|int|Page identifier|
|slug|string|Required|Max - 255|Auto generated URI based on page name|
|isVisible|boolean|Required|boolean|Indicates page visibility on the store|
|name|string|Required|Max 255|User provided page name, or system defined page name|
|description|string|Required|Max 16B|User provided page description, or system defined page description|
|sortIndex|integer|Required|int|Defines displaying order of the pages|
|type|string|Required|Predefined system list|Type of page<br/>Possible values: *custom, default*|
|config|json|Required|json|Used to fill in legal documents with store data automatically|

#### Request example

> **POST** api/v3/page/create

```json
{
   "data": {
       "isVisible": false,
       "id": 18,
       "name": "About us",
       "type": "custom",
       "description": "The Best shop",
       "sortIndex": 1
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure as described in [Update page](#input-1) section.

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "isVisible": false,
       "id": 18,
       "name": "About us",
       "type": "custom",
       "description": "The Best shop",
       "sortIndex": 1
   }
}
```

## Update Pages Order

This operation allows to set custom order for pages' displaying in Online shop cart.

> **POST** api/v3/page/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of pages' ids - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Page unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/page/update-order

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

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful pages' order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Update Page visibility

Allows to hide/unhide (to opposite) static page in Online shop.

> **POST** api/v3/page/{id}/update-visibility<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Page unique identifier (auto increment)|

#### Request example

> **POST** api/v3/page/1234/update-visibility

### Output

Success response comes with HTTP code 200 (OK). Empty object returns in case of visibility parameter is changes on the opposite.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Delete Pages

Allows to delete static page(s) in Online shop.

> **POST** api/v3/page/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of delivery options' IDs.<br/>Number of items is limited only by PHP logic|

#### Request example

> **POST** api/v3/page/delete

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
