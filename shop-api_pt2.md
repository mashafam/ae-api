# Shop (part 2)

List of operations for composing Online Shop based on User's configurations.

**Products**
- [Get main products](#get-main-products)
- [Get products list](#get-products-list)
- [Get related products](#get-related-products)
- [Get product entries](#get-product-entries)
- [Get full product information by slug](#get-full-product-information-by-slug)


**Place order from cart**
- [Create Order](#create-order)
- [Get Order payment details](#get-order-payment-details)

**Unsubscribe from Order emails**
- [Unsubscribe from Order emails](#unsubscribe-from-order-emails)

**Slides operations**

- [Get all Slides](#get-all-slides)
- [Get all slides (search)](#get-slides-search)
- [Create slide](#create-slide)
- [Update slide](#update-slide)
- [Update slides order](#update-slides-order)
- [Delete slides](#delete-slides)

## Get main products

Allows to retrieve products that is presented at the Online Shop main page (Home).

> **GET** api/v3/shop/get-main-products<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Header parameter**

> uuid = {shop_uuid}

#### Request example

> **GET** api/v3/shop/get-main-products

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirement**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Php system limitation|Returns array of products that fit main product block
configuration|
|id|integer|Required|bigint|Product identifier|
|slug|string|Required|Max - 255|Product URI|
|name|string|Required|HEX colour, lenght min - 3, max - 11|Product name|
|price|string|Required|Max - 18|Product price|
|image|string|Required|Max - 255|Product main image|
|availability|boolean|Required|boolean|Product availability status|
|discountPercentage|integer|Required|Min value - 1, Max value - 99|Product discount percentage, 0 if not applied|
|discountPrice|string|Required|Max - 18|Product discount price, full price if not applied|
|isVariative|boolean|Required|boolean|Defines if product have more than one variation|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 14,
               "slug": "green-car",
               "name": "Green car",
               "price": "9500",
               "image": null,
               "availability": true,
               "discountPercentage": 0,
               "discountPrice": "9500.00",
               "isVariative": true
           },
           {
               "id": 13,
               "slug": "blue-car",
               "name": "Blue car",
               "price": "10000",
               "image": null,
               "availability": true,
               "discountPercentage": 30,
               "discountPrice": "7000.00",
               "isVariative": false
           }
        ]
    }
}        
```

## Get Products list

This operation retrieves list of all products in Online shop using search engine.

> **POST** api/v3/product/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

**Request parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|Product unique identifier (auto increment)|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. name:asc, name:desc<br/>3. sortIndex:asc, sortIndex:desc|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|

#### Request example

> **POST** api/v3/product/get-list

```json
{
   "data": {
       "filter": {"searchTerm": "car"},
       "sort": "name:asc",
       "page": 1,
       "pageSize": 3
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirement**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Php system limitation|Returns array of products (Max - 20) that located in same collection as a slug product|
|id|integer|Required|bigint|Product identifier|
|slug|string|Required|Max - 255|Product URI|
|name|string|Required|HEX colour, lenght min - 3, max - 11|Product name|
|price|string|Required|Max - 18|Product price|
|image|string|Required|Max - 255|Product main image|
|availability|boolean|Required|boolean|Product availability status|
|discountPercentage|integer|Required|Min value - 1, Max value - 99|Product discount percentage, 0 if not applied|
|discountPrice|string|Required|Max - 18|Product discount price, full price if not applied|
|isVariative|boolean|Required|boolean|Defines if product have more than one variation|
|totalPages|integer|Required|bigint|Number of pages (groups of items), controlled with pageSize parameter|
|totalItems|integer|Required|bigint|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 13,
               "slug": "blue-car",
               "name": "Blue car",
               "price": "10000",
               "image": null,
               "availability": true,
               "discountPercentage": 30,
               "discountPrice": "7000.00",
               "isVariative": false
           },
           {
               "id": 14,
               "slug": "gren-car",
               "name": "Gren car",
               "price": "9500",
               "image": null,
               "availability": true,
               "discountPercentage": 0,
               "discountPrice": "9500.00",
               "isVariative": true
           },
           {
               "id": 12,
               "slug": "red-car",
               "name": "Red car",
               "price": "10000",
               "image": null,
               "availability": true,
               "discountPercentage": 0,
               "discountPrice": "10000.00",
               "isVariative": false
           }
       ],
       "totalPages": 1,
       "totalItems": 3
   }
}
```

## Get related products

This operation retrieves related products to recommend it while Buyer purchased specific one.

> **GET** api/v3/shop/product/get-related-list/{slug}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Request example

> **GET** api/v3/shop/product/get-related-list/red-car

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirement**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Php system limitation|Returns array of products (Max - 20) that located in same collection as a slug product|
|id|integer|Required|bigint|Product identifier|
|slug|string|Required|Max - 255|Product URI|
|name|string|Required|HEX colour, lenght min - 3, max - 11|Product name|
|price|string|Required|Max - 18|Product price|
|image|string|Required|Max - 255|Product main image|
|availability|boolean|Required|boolean|Product availability status|
|discountPercentage|integer|Required|Min value - 1, Max value - 99|Product discount percentage, 0 if not applied|
|discountPrice|string|Required|Max - 18|Product discount price, full price if not applied|
|isVariative|boolean|Required|boolean|Defines if product have more than one variation|
|totalPages|integer|Required|bigint|Number of pages (groups of items), controlled with pageSize parameter|
|totalItems|integer|Required|bigint|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 14,
               "slug": "gren-car",
               "name": "Gren car",
               "price": "9500.0",
               "image": null,
               "availability": true,
               "discountPercentage": 0,
               "discountPrice": "9500.00",
               "isVariative": true
           },
           {
               "id": 13,
               "slug": "blue-car",
               "name": "Blue car",
               "price": "10000.0",
               "image": null,
               "availability": true,
               "discountPercentage": 30,
               "discountPrice": "7000.00",
               "isVariative": false
           }
       ]
   }
}
```

## Get Product entries

This operation retrieves available variations of specific product.

> **POST** api/v3/shop/product/get-entries<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request could contain following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|idList|Array of integers|Required|List of variation ids<br/>If empty array provided, all product entries returned|

#### Request example

> **POST** api/v3/shop/product/get-entries

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirement**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|PHP system limitation|Returns an array of product variations matched criteria. If empty array provided in IdList, then all product variations returned|
|id|integer|Required|bigint|Product variation identifier|
|slug|string|Required|Max - 255|Product URI|
|name|string|Required|HEX colour, lenght min - 3, max - 11|Product name|
|price|string|Required|Max - 18|Product price|
|images|array of strings|Required|Php system limitation, image string lenght max - 255|Product variation images|
|availability|boolean|Required|boolean|Product availability status|
|discountPrice|string|Required|Max - 18|Product discount price, full price if not applied|
|quantity|integer|Required|int|Quantity of product variations|
|options|array of objects|Required|Php system limitation|Options applied to product variation; max - 2; empty array in no options applied|
|options.id|integer|Required|int|Option id|
|options.name|string|Required|Max - 255|Option name|
|options.value|string|Required|Max - 32|Option value|
|published|boolean|Required|boolean|Indicates whether product is visible on the shop|
|weight|string|Required|Max - 18, numeric|Weithgt of product variation, can be null|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 12,
               "slug": "red-car",
               "images": [],
               "name": "Red car",
               "unlimited": true,
               "productId": 12,
               "availability": true,
               "price": "10000.0",
               "discountPrice": "10000.00",
               "quantity": 1,
               "options": [
                   {
                       "id": 1,
                       "name": "Color",
                       "value": "Red"
                   }
               ],
               "published": true,
               "weight": "1.0"
           },
           {
               "id": 13,
               "slug": "blue-car",
               "images": [],
               "name": "Blue car",
               "unlimited": true,
               "productId": 13,
               "availability": true,
               "price": "10000.0",
               "discountPrice": "7000.00",
               "quantity": 1,
               "options": [
                   {
                       "id": 1,
                       "name": "Color",
                       "value": "Blue"
                   }
               ],
               "published": true,
               "weight": "1.0"
           }
       ]
   }
}
```

## Get full product information by slug

This operation retrieves available variations of specific product.

> **GET** api/v3/shop/product/get/{slug}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Request example

**Path variables**

*slug = {product.slug}*

> **GET** api/v3/shop/product/get/red-car

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|boolean|Required|bigint|Product identifier|
|slug|string|Required|Max - 255|Product URI|
|published|string|Required|boolean|Identifies if product is visible on the shop|
|collection|object|Required|Php system limitation|Collection data|
|collection.id|integer|Required|bigint|Collection identifier; null if collection not applied|
|collection.slug|string|Required|Max - 255|Collection URI; null if collection not applied|
|collection.name|string|Required|Max - 255|Collection name; null if collection not applied|
|brand|object|Required|Php system limitation|Brand data|
|brand.id|integer|Required|bigint|Brand identifier; null if brand not applied|
|brand.name|string|Required|Max - 255|Brand name; null if brand not applied|
|name|string|Required|Max - 255|Product name|
|description|string|Required|Max - 5000|Product description|
|unlimited|boolean|Required|boolean|Defines if product quantity is unlimited|
|variations|array of objects|Required|Php system limitation|List of product variations for the product. Each product has at least one variation|
|variations.id|integer|Required|bigint|Product variation id|
|variations.availability|boolean|Required|boolean|Product variation availability, user for unlimited products|
|variations.price|string|Required|Max -18, numeric|Product variation price|
|variations.quantity|integer|Required|int|Product variation quantity; used for limited products|
|variations.images|array of strings|Required|Php system limitation|List of product variation image links; max - 255 chars per link|
|variations.discountPercentage|integer|Required|Positive integer, max 99|Discount percentage that applied to the product; 0 if no discount applied|
|variations.discountPrice|string|Required|Max -18, numeric|Variation price including discount percentage, full price if no discount applied|
|variations.options|array of objects|Required|Max - 2|List of option applied to variation; empty array if no options applied|
|options.id|integer|Optional|Big int|Option id|
|options.name|string|Optional|Max - 255|Option name|
|options.value|string|Optional|Max - 32|Option value|
|metaTitle|string|Required|Max - 90|Meta title that applied to the product, if SEO plugin activated; null if not activated|
|metaDescription|string|Required|Max - 160|Meta description that applied to the product, if SEO plugin activated; null if not activated|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 12,
       "slug": "red-car",
       "published": true,
       "collection": {
           "id": 2,
           "slug": "cars",
           "name": "Cars"
       },
       "brand": {
           "id": 1,
           "name": "Nike"
       },
       "name": "Red car",
       "description": "description",
       "unlimited": true,
       "variations": [
           {
               "id": 12,
               "availability": true,
               "price": "10000.0",
               "quantity": 1,
               "images": [],
               "discountPercentage": 0,
               "discountPrice": "10000.00",
               "options": [
                   {
                       "id": 1,
                       "name": "Color",
                       "value": "Red"
                   }
               ]
           }
       ],
       "metaTitle": null,
       "metaDescription": null
   }
}
```

## Get all FAQ items

Retrieves all FAQs content of particular Online shop.

> **GET** api/v3/shop/faq/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Request example

> **GET** api/v3/shop/faq/get-list

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Max - 10|Array of questions|
|id|integer|Required|bigint|Question id|
|question|string|Required|Min - 1, max - 160|Question text|
|answer|string|Required|Min - 1, max - 700|Answer text|
|sortIndex|integer|Required|int|Question display order|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 3,
               "question": "question",
               "answer": "answer",
               "sortIndex": 2
           },
           {
               "id": 2,
               "question": "question",
               "answer": "answer",
               "sortIndex": 1
           },
           {
               "id": 1,
               "question": "question",
               "answer": "answer",
               "sortIndex": 0
           }
       ]
   }
}
```

## Create order

Places the order from Online shop cart.

> **POST** api/v3/shop/order/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request should include following data:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|customerDetails|object|Required|Customer details data|
|customerDetails.name|string|Required|Min - 1, max 1024; empty string if not provided|
|customerDetails.phoneNumber|string|Required|Min - 1, max 16; numeric, start with “+”; empty string if not provided|
|customerDetails.email|string|Required|Min - 1, max 64; empty string if not provided|
|customerDetails.country|string|Required|Country code, should be always provided, country code from business profile be default|
|customerDetails.city|string|Required|Min - 1, max 255; empty string if not provided|
|customerDetails.state|string|Required|Min - 1, max 255; empty string if not provided|
|customerDetails.zipPostal|string|Required|Min - 1, max 16; empty string if not provided|
|customerDetails.address|string|Required|Min - 1, max 255; empty string if not provided|
|cart|array of objects|Required|Contains list of products, at least one item required|
|cart.id|integer|Required|Product variation id, should exit in the system|
|cart.name|string|Required|Max - 319; Product variation name|
|cart.amount|integer|Required|Product quantity to purchase, should be more then exists in the system|
|cart.price|string|Required|Max - 18, numeric; Product variation discount price|
|cart.weight|string|Required|Max -18; numeric; Product weight; null if product has no weight added|
|coupon|string|Optional|Max - 255; Coupon code|
|deliveryOptionId|integer|Optional|Selected delivery method id that exists in the system|
|salesChannel|string|Required|“my_shop” for orders in the shop|
|paymentId|integer|Optional|Selected payment method id that exists in the system|
|isOneClick|boolean|Required|Indicates how order was created: using “cart” or “buy one click” option|
|note|string|Optional|Max - 500; Order note|

#### Request example

> **POST** api/v3/shop/order/create<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

```json
{
   "data": {
       "customerDetails": {
           "name": "John Doe",
           "phoneNumber": "+44777777777",
           "email": "test@example.com",
           "country": "GB",
           "city": "Manchester",
           "state": "MAN",
           "zipPostal": "M4U678",
           "address": "Some str. 123"
       },
       "cart": [
           {
               "id": 17,
               "name": "Purple car, Medium",
               "amount": 1,
               "price": "8750.00",
               "weight": "1.00"
           }
       ],
       "coupon": "SALES",
       "deliveryOptionId": 1,
       "salesChannel": "my_shop",
       "paymentId": 1,
       "isOneClick": false,
       "note": "test note"

   }
}
```

### Output

Success response comes with HTTP code 200 (OK) with body (for properties see [Create Order](../ae-api/order-api.md#create-order)).

## Get Order Payment Details

Calculates order total including promos, delivery fee.

> **POST** api/v3/shop/order/calculate<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request should include following data:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|cart|Array of objects|Required|Number of objects is limited only by PHP logic|
|cart.id|integer|Required|Bigint, Product variation id existing in the system|
|cart.name|string|Required|Max - 255|
|cart.amount|integer|Required|int|
|cart.price|string|Required|Max - 18; numeric|
|cart.weight|string|Required|Max - 18; numeric|
|coupon|string|Optional|Max - 255|
|deliveryOptionId|integer|Optional|Bigint; Delivery method id exist in the system|
|salesChannel|string|Required|Bigint|
|paymentId|integer|Optional|Bigint; Payment method id exist in the system|

#### Request example

> **POST** api/v3/shop/order/calculate<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

```json
{
   "data": {
       "cart": [
           {
               "id": 17,
               "name": "Purple car, Medium",
               "amount": 1,
               "price": "8750.00",
               "weight": "1.00"
           }
       ],
       "coupon": "SALES",
       "deliveryOptionId": 1,
       "salesChannel": "my_shop",
       "paymentId": 1
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|subTotal|string|Required|Max - 18; numeric|Total sum of cart items without discount and coupon|
|discount|string|Required|Max - 18; numeric|Sum of discount; “0.00” if no discounts applied|
|couponDiscount|string|Required|Max - 18; numeric|Sum of discount by coupon; “0.00” if no coupon applied|
|delivery|string|Required|Max - 18; numeric|Sum of delivery; “0.00” if no delivery or delivery is free|
|total|string|Required|Max - 18; numeric|Total order sum for merchant to pay|
|cart|array of objects|Required|Number of objects is limited only by PHP logic|Detailed data on each product variation added to the cart|
|cart.id|integer|Required|bigint|Product variation id|
|cart.productId|integer|Required|bigint|Product id|
|cart.slug|string|Required|Max - 255|Product URI|
|cart.name|string|Required|Max - 255|Product name|
|cart.unlimited|boolean|Required|boolean|Defines if product quantity is unlimited|
|cart.options|Array of objects|Required|Max - 2|Option applied to variation; empty array returned if no option applied|
|options.id|integer|Optional|bigint|Optihon id|
|options.name|string|Optional|Max - 255|Option name|
|options.value|string|Optional|Max - 32|Option value|
|cart.availability|boolean|Required|boolean|Product variation availability, user for unlimited products|
|cart.price|string|Required|Max - 18; numeric|Product variation price|
|cart.quantity|integer|Required|int|Product variation quantity; used for limited products|
|cart.images|array of strings|Required|Number of items is limited only by PHP logic|List of product variation image links; max - 255 chars per link|
|cart.discountPrice|string|Required|Max - 18; numeric|Product variation price including discount; original price returned if no discount applied|
|cart.discountWithCouponPrice|string|Required|Max - 18; numeric|Product variation price including coupon discount; discount price returned if no coupon applied|
|cart.published|boolean|Required|boolean|Indicates product visibility on the shop|
|cart.discountPercentage|integer|Required|Positive in; max - 99|Discount percentage applied to the product|
|cart.weight|string|Required|Max - 18; numeric|Product weight; null returned if no weight applied|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "subTotal": "12500.00",
       "discount": "3750.00",
       "couponDiscount": "2625.00",
       "delivery": "18.00",
       "total": "6143.00",
       "cart": [
           {
               "id": 17,
               "productId": 15,
               "slug": "purple-car",
               "name": "Purple car",
               "unlimited": true,
               "options": [
                   {
                       "id": 2,
                       "name": "Size",
                       "value": "Medium"
                   }
               ],
               "availability": true,
               "price": "12500.0",
               "quantity": 0,
               "images": [],
               "discountPrice": "8750.00",
               "discountWithCouponPrice": "6125.00",
               "published": true,
               "discountPercentage": 30,
               "weight": "0.5"
           }
       ]
   }
}
```

## Unsubscribe from Order emails

Buyer has an ability to unsubscribe from emails that order has been placed in Online shop.

> **POST** api/v3/shop/email/unsubscribe<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

#### Request example

> **POST** api/v3/shop/email/unsubscribe<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|token|string|Required|Max - 255|Token that identifies buyer by email|
|types|array of strings|Required|“order”|Email type to unsubscribe|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "token": "jwt_token",
       "types": [
           "order"
       ]
   }
}
```

## Get all slides

Returns all available slides structure created by User.

> **GET** api/v3/shop/slide/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

#### Request example

> **GET** api/v3/shop/slide/get-list<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Require|Php system limitation|List of existing slides, empty array if no slides created|
|id|integer|Required|Bigint|System identifier (auto increment)|
|isVisible|boolean|Required|True, false|Visibility of slide in the shop|
|title|string|Required|Min - 1, max - 255|Slide title (visible on slide)|
|description|string|Optional|Min - 1, max - 1000|Slide description (visible on slide)|
|useBgImage|boolean|Required|True, false|Shows whether background image is used or not|
|bgImage|string|Optional|Min - 1, max - 255|Link to the background image|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|Background image opacity|
|bgColor|string|Optional|Min - 1, max - 255|Background color|
|sortIndex|integer|Required|Int|Defines the slide display order|
|useLink|boolean|Required|True, false|Shows whether link is used on slide or not|
|linkObjectType|string|Optional|Min - 1, max - 255|Object on which link specifies|
|linkObjectId|integer|Optional|Bigint|Identifier of the object|
|linkObjectName|string|Optional|Min - 1, max - 255|Name of the object|
|linkObjectSlug|string|Optional|Min - 1, max - 255|Descriptive unique text that identifies the object|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "isVisible": true,
               "title": "Slide title",
               "description": "Slide description",
               "useBgImage": false,
               "bgImage": "",
               "bgImageOpacity": 1,
               "bgColor": "#ffffff",
               "fontColor": "#000000",
               "sortIndex": 0,
               "useLink": true,
               "linkObjectType": "collection",
               "linkObjectId": 2,
               "linkObjectName": "Cars",
               "linkObjectSlug": "cars"
           }
       ]
   }
}
```

## Get slides (search)

Returns all slides structure that satisfy mentioned search term

> **POST** api/v3/slide/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request could include following parameters: 

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|page|integer|Optional|bigint|Number of the returned page with customers|
|pageSize|integer|Optional|bigint|Number of customers per page|
|filter|object|Optional|Limited system values|searchTerm performs search by title parameter|
|sort|string|Optional|id:asc, id:desc,<br/> name:asc, name:desc,<br/> sortIndex:asc, sortIndex:desc|System sorting options|

#### Request example

> **POST** api/v3/slide/get-list<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

```json
{
    "data": {
        "page": 1,
        "pageSize": 3,
        "filter": {"searchTerm": "name"},
        "sort": "id:desc"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|Php system limitations|Array of customers matched filter criteria is returned|
|id|integer|Required|Bigint|System identifier (auto increment)|
|isVisible|boolean|Required|True, false|Visibility of slide in the shop|
|title|string|Required|Min - 1, max - 255|Slide title (visible on slide)|
|description|string|Optional|Min - 1, max - 1000|Slide description (visible on slide)|
|useBgImage|boolean|Required|True, false|Shows whether background image is used or not|
|bgImage|string|Optional|Min - 1, max - 255|Link to the background image|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|Background image opacity|
|bgColor|string|Optional|Min - 1, max - 255|Background color|
|sortIndex|integer|Required|Int|Defines the slide display order|
|useLink|boolean|Required|True, false|Shows whether link is used on slide or not|
|linkObjectType|string|Optional|"product", "page", "collection"|Object on which link specifies|
|linkObjectId|integer|Optional|Bigint|Identifier of the object|
|linkObjectName|string|Optional|Min - 1, max - 255|Name of the object|
|linkObjectSlug|string|Optional|Min - 1, max - 255|Descriptive unique text that identifies the object|
|totalPages|integer|Required|Positive integer|Quantity of pages in response|
|totalItems|integer|Required|Positive integer|Quantity of slides in the list|


#### Response example

> Status: 200 (OK)

<details>
  <summary>Expand to see response body</summary>

```json
{
    "data": {
        "items": [
            {
                "id": 9,
                "isVisible": false,
                "title": "name slide test",
                "description": "description test",
                "useBgImage": true,
                "bgImage": "img.jpg",
                "bgImageOpacity": 0.5,
                "bgColor": "#000000",
                "fontColor": "#000000",
                "sortIndex": 7,
                "useLink": true,
                "linkObjectType": "product",
                "linkObjectId": null,
                "linkObjectName": "aut",
                "linkObjectSlug": "voluptatum"
            },
            {
                "id": 8,
                "isVisible": true,
                "title": "",
                "description": "",
                "useBgImage": true,
                "bgImage": "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/05b57c37b1813f2bd362c813241b2f42_1708081950.jpg",
                "bgImageOpacity": 1,
                "bgColor": "#ffffff",
                "fontColor": "#000000",
                "sortIndex": 0,
                "useLink": false,
                "linkObjectType": null,
                "linkObjectId": null,
                "linkObjectName": "",
                "linkObjectSlug": ""
            },
            {
                "id": 7,
                "isVisible": true,
                "title": "",
                "description": "",
                "useBgImage": true,
                "bgImage": "https://static.dev.alephexpress.com/api/file/get/8e571555-aa73-4cb2-b588-9cb5285795b2/ad152541f9f85e1fc754486db4254dc2_1708081486.jpeg",
                "bgImageOpacity": 1,
                "bgColor": "#ffffff",
                "fontColor": "#000000",
                "sortIndex": 1,
                "useLink": false,
                "linkObjectType": null,
                "linkObjectId": null,
                "linkObjectName": "",
                "linkObjectSlug": ""
            }
        ],
        "totalPages": 3,
        "totalItems": 8
    }
}
```
</details>

## Create slide

Allows to create slide to represent Online shop pages, actual news and promos.

> **POST** api/v3/slide/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request could include following parameters: 

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|isVisible|boolean|Required|True, false|
|title|string|Required|Min - 1, max - 255|
|description|string|Optional|Min - 1, max - 1000|
|useBgImage|boolean|Required|True, false|
|bgImage|string|Optional|Min - 1, max - 255|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|
|bgColor|string|Optional|Min - 1, max - 255|
|sortIndex|integer|Required|Int|
|useLink|boolean|Required|True, false|
|linkObjectType|string|Required|"product", "page", "collection"|
|linkObjectId|integer|Required|Bigint|
|linkObjectName|string|Required|Min - 1, max - 255|
|linkObjectSlug|string|Required|Min - 1, max - 255|

#### Request example

> **POST** api/v3/slide/create<br/>
> **Header**: uuid = {4355-kt594-5ut30-5938}

```json
{
    "data": {
        "isVisible": false,
        "title": "name slide",
        "description": "description",
        "useBgImage": true,
        "bgImage": "img.jpg",
        "bgImageOpacity": 0.5,
        "bgColor": "#000000",
        "fontColor": "#000000",
        "sortIndex": 0,
        "useLink": true,
        "linkObjectType": "product",
        "linkObjectId": 2,
        "linkObjectName": "aut",
        "linkObjectSlug": "voluptatum"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|Bigint|System identifier (auto increment)|
|isVisible|boolean|Required|True, false|Visibility of slide in the shop|
|title|string|Required|Min - 1, max - 255|Slide title (visible on slide)|
|description|string|Optional|Min - 1, max - 1000|Slide description (visible on slide)|
|useBgImage|boolean|Required|True, false|Shows whether background image is used or not|
|bgImage|string|Optional|Min - 1, max - 255|Link to the background image|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|Background image opacity|
|bgColor|string|Optional|Min - 1, max - 255|Background color|
|sortIndex|integer|Required|Int|Defines the slide display order|
|useLink|boolean|Required|True, false|Shows whether link is used on slide or not|
|linkObjectType|string|Optional|"product", "page", "collection"|Object on which link specifies|
|linkObjectId|integer|Optional|Bigint|Identifier of the object|
|linkObjectName|string|Optional|Min - 1, max - 255|Name of the object|
|linkObjectSlug|string|Optional|Min - 1, max - 255|Descriptive unique text that identifies the object|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 9,
        "isVisible": false,
        "title": "name slide",
        "description": "description",
        "useBgImage": true,
        "bgImage": "img.jpg",
        "bgImageOpacity": 0.5,
        "bgColor": "#000000",
        "fontColor": "#000000",
        "sortIndex": 7,
        "useLink": true,
        "linkObjectType": "product",
        "linkObjectId": null,
        "linkObjectName": "aut",
        "linkObjectSlug": "voluptatum"
    }
}
```

## Update slide

Allows to update existing slide structure

> **POST** api/v3/slide/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: uuid = {shop_uuid}

### Input

Request could include following parameters: 

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|id|integer|Required|Bigint|
|isVisible|boolean|Required|True, false|
|title|string|Required|Min - 1, max - 255|
|description|string|Optional|Min - 1, max - 1000|
|useBgImage|boolean|Required|True, false|
|bgImage|string|Optional|Min - 1, max - 255|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|
|bgColor|string|Optional|Min - 1, max - 255|
|sortIndex|integer|Required|Int|
|useLink|boolean|Required|True, false|
|linkObjectType|string|Required|"product", "page", "collection"|
|linkObjectId|integer|Required|Bigint|
|linkObjectName|string|Required|Min - 1, max - 255|
|linkObjectSlug|string|Required|Min - 1, max - 255|

#### Request example

> **POST** api/v3/slide/update

```json
{
    "data": {
        "id": 9,
        "isVisible": false,
        "title": "name slide test",
        "description": "description test",
        "useBgImage": true,
        "bgImage": "img.jpg",
        "bgImageOpacity": 0.5,
        "bgColor": "#000000",
        "fontColor": "#000000",
        "sortIndex": 7,
        "useLink": true,
        "linkObjectType": "product",
        "linkObjectId": null,
        "linkObjectName": "aut",
        "linkObjectSlug": "voluptatum"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following body structure:

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|Bigint|System identifier (auto increment)|
|isVisible|boolean|Required|True, false|Visibility of slide in the shop|
|title|string|Required|Min - 1, max - 255|Slide title (visible on slide)|
|description|string|Optional|Min - 1, max - 1000|Slide description (visible on slide)|
|useBgImage|boolean|Required|True, false|Shows whether background image is used or not|
|bgImage|string|Optional|Min - 1, max - 255|Link to the background image|
|bgImageOpacity|double(8,2)|Optional|8 - total number of digits and 2 - number of digits following the decimal point|Background image opacity|
|bgColor|string|Optional|Min - 1, max - 255|Background color|
|sortIndex|integer|Required|Int|Defines the slide display order|
|useLink|boolean|Required|True, false|Shows whether link is used on slide or not|
|linkObjectType|string|Optional|"product", "page", "collection"|Object on which link specifies|
|linkObjectId|integer|Optional|Bigint|Identifier of the object|
|linkObjectName|string|Optional|Min - 1, max - 255|Name of the object|
|linkObjectSlug|string|Optional|Min - 1, max - 255|Descriptive unique text that identifies the object|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 9,
        "isVisible": false,
        "title": "name slide test",
        "description": "description test",
        "useBgImage": true,
        "bgImage": "img.jpg",
        "bgImageOpacity": 0.5,
        "bgColor": "#000000",
        "fontColor": "#000000",
        "sortIndex": 7,
        "useLink": true,
        "linkObjectType": "product",
        "linkObjectId": null,
        "linkObjectName": "aut",
        "linkObjectSlug": "voluptatum"
    }
}
```

## Update slides order

This operation allows to set custom order for slides' displaying in Online shop.

> **POST** api/v3/slide/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of slides' ids - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/slide/update-order

```json
{
    "data": {
        "items": [
        {
            "id": 9,
            "sortIndex" : 7
        },
        {
            "id": 7,
            "sortIndex": 9
        }
        ]
    }
}
```

### Output

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful slides order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Delete slides

This operation performs slide deletion. Also can be used for bulk deletion.

> **POST** api/v3/slide/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of slides' IDs.<br/>Number of items is limited only by PHP logic|

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

