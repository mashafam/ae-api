# Product

- [Get product](#get-product),
- [Get all products](#get-all-products),
- [Get all products ids](#get-all-products-ids),
- [Create product](#create-product),
- [Duplicate product](#duplicate-product),
- [Update product](#update-product),
- [Update products order](#update-products-order),
- [Delete products](#delete-products),


### Get product

### Description

This operation allows to retrieve specific category.

> **GET** api/v3/product/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Query parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Product unique identifier (auto increment)|
|slug|String|Optional|Descriptive unique text that identifies the product<br/>Min length - 1; max length - 255|

#### Request example

> **GET** {{baseUrl}}/api/v3/product/get?id=92&slug=dodge-polara-hardtop-coupe-1960


### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier (auto increment)|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min length - 1; max length - 255|
|sortIndex|Integer<br/>(Bigint)|Mandatory|Defines the item display order|
|published|Boolean|Mandatory|Displays whether shop is published or not<br/>Possible values: *true, false*|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|name|String|Mandatory|Product name<br/>Min length - 1; max length - 255|
|description|String|Mandatory|Description of the product<br/>Min length - 1; max length - 5000|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or
not<br/>Possible values: *true, false*|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if product isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|metaTitle|String|Mandatory|Available if SEO plugin is activated<br/>Min length - 1; max length - 60|
|metaDescription|String|Mandatory|Available if SEO plugin is activated<br/>Min length - 1; max length - 160|
|variations|Array of objects|Mandatory|Variations of the products by options (e.g.,colour)<br/>Number of variations is limited only by PHP logic|
|variations.id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|variations.availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|variations.price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min length - 1; max length - 18|
|variations.weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min length - 1; max length - 18|
|variations.discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min length - 1; max length - 18|
|variations.discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|variations.quantity|Integer|Mandatory|Quantity of products in variation|
|variations.images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|variations.options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min length - 1; max length - 255|
|options.value|String|Optional|Options value<br/>Min length - 1; max length - 32|
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



|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|Integer|Mandatory|Bigint|System identifier (auto increment)|
|slug|String|Mandatory|Min - 1; max - 255|Descriptive unique text that identifies the product|
|sortIndex|Integer|Mandatory|Bigint|Defines the item display order|
|published|Boolean|Mandatory|true, false|Displays whether shop is published or not|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|Variations of the products by product options (colour for
example)|
|id (variations)|Integer|Mandatory|Bigint|System identifier of variations (auto increment)|
|availability|Boolean|Mandatory|true, false|Displays if variation of the product is available or not|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|Product variation price|
|weight|String|Mandatory|Min - 1; max - 18 (numeric); Default value - 0.5 kg|Weight of the product|
|discountPrice|String|Mandatory|Min - 1; max - 18 (numeric)|If no discounts were applied has the same value as price|
|discountId|Integer|Mandatory|Bigint|Has NULL value by default (if no discounts were applied)|
|quantity|Integer|Mandatory|Positive Integer|Quantity of products in variation|
|images|Array of Strings (url)|Mandatory|Number of variations is limited only by PHP logic|Images of the product variation|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|Size, colour, material etc. of the product|
|id (options)|Integer|Optional|Exists in the system|System identifier of options (auto increment)|
|name (options)|String|Optional|Min - 1; max - 255|Options name|
|value|String|Optional|Min - 1; max - 32|Options value|
|blockedAt (variations)|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if variation isn’t blocked|
|collectionId|Integer|Mandatory|Bigint|Identifier of product collection|
|brandId|Integer|Mandatory|Bigint|Identifier of product brand|
|name|String|Mandatory|Min - 1; max - 255|Product name|
|description|String|Mandatory|Min - 1; max - 5000|Description of the product|
|unlimited|Boolean|Mandatory|true, false|Displays if store has unlimited quantity of such products or
not|
|blockedAt|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if product isn’t blocked|
|metaTitle|String|Mandatory|Min - 1; max - 60|Available if SEO plugin is activated|
|metaDescription|String|Mandatory|Min - 1; max - 160|Available if SEO plugin is activated|

### **Update product**

**Endpoint:** api/v3/product/update

**Method:** POST

**Example request:**

{

"data": {

"id": 118,

"slug": "Test-Product-Name",

"sortIndex": 25,

"published": true,

"variations": \[

{

"id": 124,

"availability": true,

"price": "31000.5",

"weight": null,

"discountPrice": "31000.5",

"discountId": null,

"quantity": 1,

"images": \[
"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "sedan"

}

\],

"blockedAt": null

}

\],

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

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|id|Integer|Mandatory|Bigint|
|slug|String|Optional|Min - 1; max - 255|
|sortIndex|Integer|Mandatory|Bigint|
|published|Boolean|Mandatory|true, false|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|
|id (variations)|Integer|Mandatory|Bigint|
|availability|Boolean|Optional|true, false|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|
|weight|String|Mandatory if SHiiP activated|Min - 1; max - 18 (numeric); Default value - 0.5 kg|
|discountPrice|String|Optional|Min - 1; max - 18 (numeric)|
|discountId|Integer|Optional|Bigint|
|quantity|Integer|Mandatory|Positive Integer|
|images|Array of Strings (url)|Optional|Number of variations is limited only by PHP logic|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|
|id (options)|Integer|Optional|Exists in the system|
|name (options)|String|Optional|Min - 1; max - 255|
|value|String|Optional|Min - 1; max - 32|
|blockedAt (variations)|timestamp|Optional|YYYY-MM-DD HH:MM:SS|
|collectionId|Integer|Optional|Bigint|
|brandId|Integer|Optional|Bigint|
|name|String|Mandatory|Min - 1; max - 255|
|description|String|Optional|Min - 1; max - 5000|
|unlimited|Boolean|Mandatory|true, false|
|blockedAt|timestamp|Optional|YYYY-MM-DD HH:MM:SS|
|metaTitle|String|Optional|Min - 1; max - 60|
|metaDescription|String|Optional|Min - 1; max - 160|

**Example response**:

{

"data": {

"id": 118,

"slug": "test-product-name",

"sortIndex": 25,

"published": true,

"variations": \[

{

"id": 124,

"availability": true,

"price": "31000.5",

"weight": null,

"discountPrice": "31000.50",

"discountId": null,

"quantity": 1,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "sedan"

}

\],

"blockedAt": null

}

\],

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

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|Integer|Mandatory|Bigint|System identifier (auto increment)|
|slug|String|Mandatory|Min - 1; max - 255|Descriptive unique text that identifies the product|
|sortIndex|Integer|Mandatory|Bigint|Defines the item display order|
|published|Boolean|Mandatory|true, false|Displays whether shop is published or not|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|Variations of the products by product options (colour for
example)|
|id (variations)|Integer|Mandatory|Bigint|System identifier of variations (auto increment)|
|availability|Boolean|Mandatory|true, false|Displays if variation of the product is available or not|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|Product variation price|
|weight|String|Mandatory|Min - 1; max - 18 (numeric); Default value - 0.5 kg|Weight of the product|
|discountPrice|String|Mandatory|Min - 1; max - 18 (numeric)|If no discounts were applied has the same value as price|
|discountId|Integer|Mandatory|Bigint|Has NULL value by default (if no discounts were applied)|
|quantity|Integer|Mandatory|Positive Integer|Quantity of products in variation|
|images|Array of Strings (url)|Mandatory|Number of variations is limited only by PHP logic|Images of the product variation|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|Size, colour, material etc. of the product|
|id (options)|Integer|Optional|Exists in the system|System identifier of options (auto increment)|
|name (options)|String|Optional|Min - 1; max - 255|Options name|
|value|String|Optional|Min - 1; max - 32|Options value|
|blockedAt (variations)|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if variation isn’t blocked|
|collectionId|Integer|Mandatory|Bigint|Identifier of product collection|
|brandId|Integer|Mandatory|Bigint|Identifier of product brand|
|name|String|Mandatory|Min - 1; max - 255|Product name|
|description|String|Mandatory|Min - 1; max - 5000|Description of the product|
|unlimited|Boolean|Mandatory|true, false|Displays if store has unlimited quantity of such products or
not|
|blockedAt|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if product isn’t blocked|
|metaTitle|String|Mandatory|Min - 1; max - 60|Available if SEO plugin is activated|
|metaDescription|String|Mandatory|Min - 1; max - 160|Available if SEO plugin is activated|

### **Get all Products ids**

**Endpoint:** api/v3/product/get-ids-list

**Method:** POST

**Example request:**

{

"data": {

"page": 1,

"pageSize": 20,

"filter": {"searchTerm": "car"},

"sort": "price:asc"

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|filter|object|Optional|Limited system values|
|sort|String|Optional|id:asc, id:desc, name:asc, name:desc, sortIndex:asc,
sortIndex:desc|

**Product entries filter parameters:**

|**Name**|**Value Type**|**Value Limitation**|**Description**|
|---|---|---|---|
|collectionIdList|array of Integers|PHP system limitations|Perform filtration by collections list|
|brandIdList|array of Integers|PHP system limitations|Perform filtration by brands list|
|searchTerm|String|Min - 1, max - 255|Perform filtration by product name|
|inStock|Boolean|True, false|Perform filtration by availability of products|

**Example response**:

{

"data": {

"items": \[

118,

92,

91,

90

\]

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of Integers|Mandatory|Php system limitations|Array of product ids matched filter criteria is returned|

### **Get all Products**

**Endpoint:** api/v3/product/get-list

**Method:** POST

**Example request:**

{

"data": {

"filter": {"brandIdList": \[1, 2, 3\]},

"sort": "sortIndex:desc",

"page": 1,

"pageSize": 10

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|filter|object|Optional|Limited system values|
|sort|String|Optional|id:asc, id:desc, name:asc, name:desc, sortIndex:asc,
sortIndex:desc|
|page|Integer|Optional|Bigint|
|pageSize|Integer|Optional|Bigint|

**Product entries filter parameters:**

|**Name**|**Value Type**|**Value Limitation**|**Description**|
|---|---|---|---|
|collectionIdList|array of Integers|PHP system limitations|Perform filtration by collections list|
|brandIdList|array of Integers|PHP system limitations|Perform filtration by brands list|
|searchTerm|String|Min - 1, max - 255|Perform filtration by product name|
|inStock|Boolean|True, false|Perform filtration by availability of products|

**Example response**:

{

"data": {

"items": \[

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

"variations": \[

{

"id": 124,

"availability": true,

"price": "31000.5",

"weight": null,

"discountPrice": "31000.50",

"discountId": null,

"quantity": 1,

"blockedAt": null,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "sedan"

}

\]

}

\],

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

"variations": \[

{

"id": 96,

"availability": true,

"price": "61250.0",

"weight": "0.8",

"discountPrice": "61250.00",

"discountId": null,

"quantity": 0,

"blockedAt": null,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/80eeb37aa2f71a0651f2ef596587d410_1706537540.JPG"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "2-door hardtop"

}

\]

}

\],

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

"variations": \[

{

"id": 95,

"availability": true,

"price": "30560.0",

"weight": "1.5",

"discountPrice": "30560.00",

"discountId": null,

"quantity": 0,

"blockedAt": null,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/bdb8318091c69a8c6e7877ccb8f9c738_1706537440.JPG"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "city bus"

}

\]

}

\],

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

"variations": \[

{

"id": 94,

"availability": true,

"price": "61200.0",

"weight": "0.8",

"discountPrice": "61200.00",

"discountId": null,

"quantity": 0,

"blockedAt": null,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/00e17e60a2cfe48570e9c9b82d4882b5_1706537224.JPG"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "sedan"

}

\]

}

\],

"blockedAt": null,

"metaTitle": null,

"metaDescription": null

}

\],

"totalPages": 1,

"totalItems": 4

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of Integers|Mandatory|Php system limitations|Array of products matched filter criteria is returned|
|id|Integer|Mandatory|Bigint|System identifier (auto increment)|
|slug|String|Mandatory|Min - 1; max - 255|Descriptive unique text that identifies the product|
|sortIndex|Integer|Mandatory|Bigint|Defines the item display order|
|collectionId|Integer|Mandatory|Bigint|Identifier of product collection|
|brandId|Integer|Mandatory|Bigint|Identifier of product brand|
|name|String|Mandatory|Min - 1; max - 255|Product name|
|description|String|Mandatory|Min - 1; max - 5000|Description of the product|
|unlimited|Boolean|Mandatory|true, false|Displays if store has unlimited quantity of such products or
not|
|published|Boolean|Mandatory|true, false|Displays whether shop is published or not|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|Variations of the products by product options (colour for
example)|
|id (variations)|Integer|Mandatory|Bigint|System identifier of variations (auto increment)|
|availability|Boolean|Mandatory|true, false|Displays if variation of the product is available or not|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|Product variation price|
|weight|String|Mandatory|Min - 1; max - 18 (numeric); Default value - 0.5 kg|Weight of the product|
|discountPrice|String|Mandatory|Min - 1; max - 18 (numeric)|If no discounts were applied has the same value as price|
|discountId|Integer|Mandatory|Bigint|Has NULL value by default (if no discounts were applied)|
|quantity|Integer|Mandatory|Positive Integer|Quantity of products in variation|
|blockedAt (variations)|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if variation isn’t blocked|
|images|Array of Strings (url)|Mandatory|Number of variations is limited only by PHP logic|Images of the product variation|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|Size, colour, material etc. of the product|
|id (options)|Integer|Optional|Exists in the system|System identifier of options (auto increment)|
|name (options)|String|Optional|Min - 1; max - 255|Options name|
|value|String|Optional|Min - 1; max - 32|Options value|
|blockedAt|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if product isn’t blocked|
|metaTitle|String|Mandatory|Min - 1; max - 60|Available if SEO plugin is activated|
|metaDescription|String|Mandatory|Min - 1; max - 160|Available if SEO plugin is activated|
|totalPages|Integer|Mandatory|Positive Integer|Quantity of pages in response|
|totalItems|Integer|Mandatory|Positive Integer|Quantity of products in the list|

### **Delete Products**

**Endpoint:** api/v3/product/delete

**Method:** POST

**Example request:**

{

"data": {

"items": \[118, 92\]

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|items|Array of Integers (product ids)|Mandatory|Number of items is limited only by PHP logic|

**Example response**:

{}

Empty object returns in case of successful deletion

### **Update Products Order**

**Endpoint:** api/v3/product/update-order

**Method:** POST

**Example request:**

{

"data": {

"items": \[

> {
>
> “id”: 1,
>
> “sortIndex” : 2
>
> },
>
> {
>
> “id”: 2,
>
> “sortIndex”: 1
>
> }

\]

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|items|Array of objects|Mandatory|Number of items is limited only by PHP logic|
|id|Integer|Mandatory|Exists in the system|
|sortIndex|Integer|Mandatory|Defines the item display order|

**Example response**:

{}

Empty object returns in case of successful products order change

### **Get Product**

**Endpoint:** api/v3/product/get

**Method:** GET

**Example request:**

{{baseUrl}}/api/v3/product/get?id=92&slug=dodge-polara-hardtop-coupe-1960

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|id|Integer|Mandatory|Exists in the system|
|slug|String|Optional|Min - 1; max - 255|

**Example response**:

{

"data": {

"id": 92,

"slug": "dodge-polara-hardtop-coupe-1960",

"sortIndex": 3,

"published": true,

"variations": \[

{

"id": 96,

"availability": true,

"price": "61250.0",

"weight": "0.8",

"discountPrice": "61250.00",

"discountId": null,

"quantity": 0,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/80eeb37aa2f71a0651f2ef596587d410_1706537540.JPG"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "2-door hardtop"

}

\],

"blockedAt": null

}

\],

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

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|Integer|Mandatory|Bigint|System identifier (auto increment)|
|slug|String|Mandatory|Min - 1; max - 255|Descriptive unique text that identifies the product|
|sortIndex|Integer|Mandatory|Bigint|Defines the item display order|
|published|Boolean|Mandatory|true, false|Displays whether shop is published or not|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|Variations of the products by product options (colour for
example)|
|id (variations)|Integer|Mandatory|Bigint|System identifier of variations (auto increment)|
|availability|Boolean|Mandatory|true, false|Displays if variation of the product is available or not|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|Product variation price|
|weight|String|Mandatory|Min - 1; max - 18 (numeric); Default value - 0.5 kg|Weight of the product|
|discountPrice|String|Mandatory|Min - 1; max - 18 (numeric)|If no discounts were applied has the same value as price|
|discountId|Integer|Mandatory|Bigint|Has NULL value by default (if no discounts were applied)|
|quantity|Integer|Mandatory|Positive Integer|Quantity of products in variation|
|images|Array of Strings (url)|Mandatory|Number of variations is limited only by PHP logic|Images of the product variation|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|Size, colour, material etc. of the product|
|id (options)|Integer|Optional|Exists in the system|System identifier of options (auto increment)|
|name (options)|String|Optional|Min - 1; max - 255|Options name|
|value|String|Optional|Min - 1; max - 32|Options value|
|blockedAt (variations)|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if variation isn’t blocked|
|collectionId|Integer|Mandatory|Bigint|Identifier of product collection|
|brandId|Integer|Mandatory|Bigint|Identifier of product brand|
|name|String|Mandatory|Min - 1; max - 255|Product name|
|description|String|Mandatory|Min - 1; max - 5000|Description of the product|
|unlimited|Boolean|Mandatory|true, false|Displays if store has unlimited quantity of such products or
not|
|blockedAt|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if product isn’t blocked|
|metaTitle|String|Mandatory|Min - 1; max - 60|Available if SEO plugin is activated|
|metaDescription|String|Mandatory|Min - 1; max - 160|Available if SEO plugin is activated|

### **Duplicate Product**

**Endpoint:** api/v3/product/duplicate

**Method:** POST

**Example request:**

{

"data": {

"id": 118

}

}

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|id|Integer|Mandatory|Exists in the system|

**Example response**:

{

"data": {

"id": 119,

"slug": "test-product-name-2",

"sortIndex": 26,

"published": true,

"variations": \[

{

"id": 125,

"availability": true,

"price": "31000.5",

"weight": null,

"discountPrice": "31000.5",

"discountId": null,

"quantity": 1,

"images": \[

"https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/5ca7826cdc9ac57a0c5528c6b056566b_1705051502.jpg"

\],

"options": \[

{

"id": 5,

"name": "Body type",

"value": "sedan"

}

\],

"blockedAt": null

}

\],

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

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|Integer|Mandatory|Bigint|System identifier (auto increment)|
|slug|String|Mandatory|Min - 1; max - 255|Descriptive unique text that identifies the product|
|sortIndex|Integer|Mandatory|Bigint|Defines the item display order|
|published|Boolean|Mandatory|true, false|Displays whether shop is published or not|
|variations|Array of objects|Mandatory|Number of variations is limited only by PHP logic|Variations of the products by product options (colour for
example)|
|id (variations)|Integer|Mandatory|Bigint|System identifier of variations (auto increment)|
|availability|Boolean|Mandatory|true, false|Displays if variation of the product is available or not|
|price|String|Mandatory|Min - 1; max - 18 (numeric)|Product variation price|
|weight|String|Mandatory|Min - 1; max - 18 (numeric); Default value - 0.5 kg|Weight of the product|
|discountPrice|String|Mandatory|Min - 1; max - 18 (numeric)|If no discounts were applied has the same value as price|
|discountId|Integer|Mandatory|Bigint|Has NULL value by default (if no discounts were applied)|
|quantity|Integer|Mandatory|Positive Integer|Quantity of products in variation|
|images|Array of Strings (url)|Mandatory|Number of variations is limited only by PHP logic|Images of the product variation|
|options|Array of objects|Mandatory|Empty array by default; One product can have 2 options max|Size, colour, material etc. of the product|
|id (options)|Integer|Optional|Exists in the system|System identifier of options (auto increment)|
|name (options)|String|Optional|Min - 1; max - 255|Options name|
|value|String|Optional|Min - 1; max - 32|Options value|
|blockedAt (variations)|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if variation isn’t blocked|
|collectionId|Integer|Mandatory|Bigint|Identifier of product collection|
|brandId|Integer|Mandatory|Bigint|Identifier of product brand|
|name|String|Mandatory|Min - 1; max - 255|Product name|
|description|String|Mandatory|Min - 1; max - 5000|Description of the product|
|unlimited|Boolean|Mandatory|true, false|Displays if store has unlimited quantity of such products or
not|
|blockedAt|timestamp|Mandatory|YYYY-MM-DD HH:MM:SS|Has NULL value if product isn’t blocked|
|metaTitle|String|Mandatory|Min - 1; max - 60|Available if SEO plugin is activated|
|metaDescription|String|Mandatory|Min - 1; max - 160|Available if SEO plugin is activated|
