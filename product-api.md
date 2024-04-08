# Product

- [Get product](#get-product),
- [Get all products](#get-all-products),
- [Get all products ids](#get-all-products-ids),
- [Create product](#create-product),
- [Duplicate product](#duplicate-product),
- [Update product](#update-product),
- [Update products order](#update-products-order),
- [Delete products](#delete-products),


## Get product

### Description

This operation allows to retrieve specific product.

> **GET** api/v3/product/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Query parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Product unique identifier (auto increment)|
|slug|String|Optional|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|

#### Request example

> **GET** {{baseUrl}}/api/v3/product/get?id=92&slug=dodge-polara-hardtop-coupe-1960


### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Mandatory|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|


#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 92,
        "slug": "dodge-polara-hardtop-coupe-1960",
        "sortIndex": 3,
        "published": true,
        "variations": [
            {
                "id": 96,
                "availability": true,
                "price": "61250.0",
                "weight": "0.8",
                "discountPrice": "61250.00",
                "discountId": null,
                "quantity": 0,
                "images": [
                    "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/80eeb37aa2f71a0651f2ef596587d410_1706537540.JPG"
                ],
                "options": [
                    {
                        "id": 5,
                        "name": "Body type",
                        "value": "2-door hardtop"
                    }
                ],
                "blockedAt": null
            }
        ],
        "collectionId": 2,
        "brandId": 3,
        "name": "Dodge Polara Hardtop Coupe 1960",
        "description": "Legendary American classic. 1/43 scale",
        "unlimited": true,
        "blockedAt": null,
        "metaTitle": null,
        "metaDescription": null
    }
}
```

## Get all Products

### Description

This operation retrieves list of all products (including demo and blocked).

> **POST** api/v3/product/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Request parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|Product unique identifier (auto increment)|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. name:asc, name:desc<br/>3. sortIndex:asc, sortIndex:desc|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|

**Product entries filter parameters**

|**Filter Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|collectionIdList|Array of integers|Optional|Perform filtration by collections list<br/>PHP system limitations|
|brandIdList|Array of integers|Optional|Perform filtration by brands list<br/>PHP system limitations|
|searchTerm|String|Optional|Perform filtration by product name<br/>Min lenght - 1, max lenght - 255|
|inStock|Boolean|Optional|Perform filtration by availability of products<br/>Possible values: *true*, *false*|

#### Request example

> **POST** api/v3/product/get-list

```json
{
    "data": {
        "filter": {"brandIdList": [1, 2, 3]},
        "sort": "sortIndex:desc",
        "page": 1,
        "pageSize": 10
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of products matched filter criteria is returned<br/>Php system limitations|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Mandatory|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|totalPages|Integer<br/>(Positive integer)|Mandatory|Number of pages in response|
|totalItems|Integer<br/>(Positive integer)|Mandatory|Quantity of products in the list|

#### Response example

> Status: 200 (OK)

<details>
  <summary>Expand to see response body</summary>

```json
{
    "data": {
        "items": [
            {
                "id": 118,
                "slug": "test-product-name",
                "sortIndex": 25,
                "collectionId": 25,
                "brandId": 3,
                "name": "test_product_name",
                "description": "description",
                "unlimited": true,
                "published": true,
                "variations": [
                    {
                        "id": 124,
                        "availability": true,
                        "price": "31000.5",
                        "weight": null,
                        "discountPrice": "31000.50",
                        "discountId": null,
                        "quantity": 1,
                        "blockedAt": null,
                        "images": [
                        "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"
                        ],
                        "options": [
                            {
                                "id": 5,
                                "name": "Body type",
                                "value": "sedan"
                            }
                        ]
                    }
                ],
                "blockedAt": null,
                "metaTitle": null,
                "metaDescription": null
            },
            {
                "id": 92,
                "slug": "dodge-polara-hardtop-coupe-1960",
                "sortIndex": 3,
                "collectionId": 2,
                "brandId": 3,
                "name": "Dodge Polara Hardtop Coupe 1960",
                "description": "Legendary American classic. 1/43 scale",
                "unlimited": true,
                "published": true,
                "variations": [
                    {
                        "id": 96,
                        "availability": true,
                        "price": "61250.0",
                        "weight": "0.8",
                        "discountPrice": "61250.00",
                        "discountId": null,
                        "quantity": 0,
                        "blockedAt": null,
                        "images": [
                            "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/80eeb37aa2f71a0651f2ef596587d410_1706537540.JPG"
                        ],
                        "options": [
                            {
                                "id": 5,
                                "name": "Body type",
                                "value": "2-door hardtop"
                            }
                        ]
                    }
                ],
                "blockedAt": null,
                "metaTitle": null,
                "metaDescription": null
            },
            {
                "id": 91,
                "slug": "maz-203",
                "sortIndex": 2,
                "collectionId": 2,
                "brandId": 2,
                "name": "MAZ 203",
                "description": "The most popular Belarusian city bus. 1/43 scale",
                "unlimited": true,
                "published": true,
                "variations": [
                    {
                        "id": 95,
                        "availability": true,
                        "price": "30560.0",
                        "weight": "1.5",
                        "discountPrice": "30560.00",
                        "discountId": null,
                        "quantity": 0,
                        "blockedAt": null,
                        "images": [
                            "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/bdb8318091c69a8c6e7877ccb8f9c738_1706537440.JPG"
                        ],
                        "options": [
                            {
                                "id": 5,
                                "name": "Body type",
                                "value": "city bus"
                            }
                        ]
                    }
                ],
                "blockedAt": null,
                "metaTitle": null,
                "metaDescription": null
            },
            {
                "id": 90,
                "slug": "mitsubishi-lancer-2000-turbo",
                "sortIndex": 1,
                "collectionId": 2,
                "brandId": 3,
                "name": "Mitsubishi Lancer 2000 Turbo",
                "description": "One of the rarest Lancers ever built",
                "unlimited": true,
                "published": true,
                "variations": [
                    {
                        "id": 94,
                        "availability": true,
                        "price": "61200.0",
                        "weight": "0.8",
                        "discountPrice": "61200.00",
                        "discountId": null,
                        "quantity": 0,
                        "blockedAt": null,
                        "images": [
                            "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/00e17e60a2cfe48570e9c9b82d4882b5_1706537224.JPG"
                        ],
                        "options": [
                            {
                                "id": 5,
                                "name": "Body type",
                                "value": "sedan"
                            }
                        ]
                    }
                ],
                "blockedAt": null,
                "metaTitle": null,
                "metaDescription": null
            }
        ],
        "totalPages": 1,
        "totalItems": 4
    }
}
```
</details>


## Get all products ids

This operation allow to retrieve identifiers of all products in the system.

> **POST** api/v3/product/get-ids-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Request parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|Product unique identifier (auto increment)|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. name:asc, name:desc<br/>3. sortIndex:asc, sortIndex:desc|

**Product entries filter parameters**

|**Filter Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|collectionIdList|Array of integers|Optional|Perform filtration by collections list<br/>PHP system limitations|
|brandIdList|Array of integers|Optional|Perform filtration by brands list<br/>PHP system limitations|
|searchTerm|String|Optional|Perform filtration by product name<br/>Min lenght - 1, max lenght - 255|
|inStock|Boolean|Optional|Perform filtration by availability of products<br/>Possible values: *true*, *false*|

### Request example

> **POST** api/v3/product/get-ids-list

```json
{
   "data": {
       "page": 1,
       "pageSize": 20,
       "filter": {"searchTerm": "car"},
       "sort": "price:asc"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of products' ids matched filter criteria is returned<br/>Php system limitations|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "items": [
            118,
            92,
            91,
            90
        ]
    }
}
```

## Create product

### Description

This operation allows to retrieve specific product.

> **POST** api/v3/product/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|collectionId|Integer|Optional|Exists in the system|
|brandId|Integer|Optional|Exists in the system|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Optional|Product description<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Optional|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|

#### Request example

> **POST** api/v3/product/create

```json
{
    "data": {
        "collectionId": 1,
        "brandId": 1,
        "name": "product_name",
        "description": "description",
        "unlimited": true,
        "variations": [
            {
                "availability": true,
                "price": "1.23",
                "weight": "1.00",
                "quantity": 1,
                "images": [
                        "path\/image.jpg"
                ],
                "options": [
                    {
                        "id": 1,
                        "name": "option_name",
                        "value": "option_value"
                    }
                ]
            }
        ]
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of products matched filter criteria is returned<br/>Php system limitations|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Mandatory|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|totalPages|Integer<br/>(Positive integer)|Mandatory|Number of pages in response|
|totalItems|Integer<br/>(Positive integer)|Mandatory|Quantity of products in the list|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 118,
        "slug": "test-product-name",
        "sortIndex": 25,
        "published": true,
        "variations": [
            {
                "id": 124,
                "availability": true,
                "price": "30000.5",
                "weight": null,
                "discountPrice": "30000.5",
                "discountId": null,
                "quantity": 1,
                "images": [
                    "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"
                ],
                "options": [
                    {
                        "id": 5,
                        "name": "Body type",
                        "value": "sedan"
                    }
                ],
                "blockedAt": null
            }
        ],
        "collectionId": 25,
        "brandId": 3,
        "name": "test_product_name",
        "description": "description",
        "unlimited": true,
        "blockedAt": null,
        "metaTitle": null,
        "metaDescription": null
    }
}
```

## Duplicate product

### Description

This operation allow to create copy of existing product fo future use.

> **POST** api/v3/product/duplicate<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|ID of Product to be duplicated|

#### Request example

> **POST** api/v3/product/duplicate

```json
{
    "data": {
        "id": 118
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Mandatory|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 119,
        "slug": "test-product-name-2",
        "sortIndex": 26,
        "published": true,
        "variations": [
            {
                "id": 125,
                "availability": true,
                "price": "31000.5",
                "weight": null,
                "discountPrice": "31000.5",
                "discountId": null,
                "quantity": 1,
                "images": [
                    "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"
                ],
                "options": [
                    {
                        "id": 5,
                        "name": "Body type",
                        "value": "sedan"
                    }
                ],
                "blockedAt": null
            }
        ],
        "collectionId": 25,
        "brandId": 3,
        "name": "test_product_name",
        "description": "description",
        "unlimited": true,
        "blockedAt": null,
        "metaTitle": null,
        "metaDescription": null
    }
}
```

## Update product

### Description

This operation allows to update product.

> **POST** api/v3/product/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Optional|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Optional|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Optional|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Optional|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Optional|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Optional|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Optional|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Optional|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Optional|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Optional|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Optional|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Optional|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Optional|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|

#### Request example

> **POST** api/v3/product/update

```json
{
    "data": {
        "id": 118,
        "slug": "Test-Product-Name",
        "sortIndex": 25,
        "published": true,
        "variations": [
            {
                "id": 124,
                "availability": true,
                "price": "31000.5",
                "weight": null,
                "discountPrice": "31000.5",
                "discountId": null,
                "quantity": 1,
                "images": [                 "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"
                ],
                "options": [
                    {
                        "id": 5,
                        "name": "Body type",
                        "value": "sedan"
                    }
                ],
                "blockedAt": null
            }
        ],
        "collectionId": 25,
        "brandId": 3,
        "name": "test_product_name",
        "description": "description",
        "unlimited": true,
        "blockedAt": null,
        "metaTitle": null,
        "metaDescription": null
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min lenght - 1; max lenght - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min lenght - 1; max lenght - 255|
|description|String|Mandatory|Description of the product<br/>Min lenght - 1; max lenght - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min lenght - 1; max lenght - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min lenght - 1; max lenght - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min lenght - 1; max lenght - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min lenght - 1; max lenght - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min lenght - 1; max lenght - 255|
|options.value|String|Optional|Options value<br/>Min lenght - 1; max lenght - 32|
|variations.blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 118,
        "slug": "test-product-name",
        "sortIndex": 25,
        "published": true,
        "variations": [
            {
                "id": 124,
                "availability": true,
                "price": "31000.5",
                "weight": null,
                "discountPrice": "31000.50",
                "discountId": null,
                "quantity": 1,
                "images": [
                    "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"
                ],
                "options": [
                    {
                        "id": 5,
                        "name": "Body type",
                        "value": "sedan"
                    }
                ],
                "blockedAt": null
            }
        ],
        "collectionId": 25,
        "brandId": 3,
        "name": "test_product_name",
        "description": "description",
        "unlimited": true,
        "blockedAt": null,
        "metaTitle": null,
        "metaDescription": null
    }
}
```

## Update products order

### Description

This operation allows to set custom order for products' displaying in Online shop.

> **POST** api/v3/product/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of products - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Product unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/product/update-order

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

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful products order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Delete products

### Description

This operation performs product deletion. Also can be used for bulk deletion.

> **POST** api/v3/product/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of products' IDs.<br/>Number of items is limited only by PHP logic|

#### Request example

```json
{
    "data": {
        "items": [181, 112]
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