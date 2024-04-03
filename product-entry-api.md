# Product entries

- [Get all product entries](#get-all-products-entries-list),
- [Get all product entries ids](#get-all-products-entries-ids)

Product entries list is used to build link between product and promo (discount or coupon).

## Get all products entries list

This operation returns whole list of product entries (variations) and its information.

> **POST** api/v3/product-entries/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body can contain following structure:

**Request parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|
|filter|Object<br/>Limited system values|Optional|searchTerm performs search by name parameter|
|sort|String|Optional|System sorting options<br/>1. price:asc, price:desc,<br/>2. quantity:asc, quantity:desc|

**Product entries filter parameters**

|**Filter Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|collectionId|Integer|Optional|Perform filtration by assigned collection<br/>PHP system limitations|
|productId|Integer|Optional|Perform filtration by product id|
|searchTerm|String|Optional|Perform filtration by product name<br/>Min length - 1, max length - 255|
|idList|Array of integers|Optional|Perform filtration by list of variation ids<br/>PHP system limitations|
|discountId|Integer|Integer<br/>(Bigint)|Optional|Perform filtration by discount id|
|couponId|integer|Integer<br/>(Bigint)|Optional|Perform filtration by coupon id|

#### Request example

> **POST** api/v3/product-entries/get-list

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

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of variations belonging to the product (auto increment)|
|collectionId|Integer<br/>(Bigint)|Mandatory|Identifier of product collection|
|brandId|Integer<br/>(Bigint)|Mandatory|Identifier of product brand|
|slug|String|Mandatory|Descriptive unique text that identifies the product<br/>Min length - 1; max length - 255|
|name|String|Mandatory|Product name<br/>Min length - 1; max length - 255|
|unlimited|Boolean|Mandatory|Displays if store has unlimited quantity of such products or not<br/>Possible values: *true, false*|
|productId|Integer<br/>(Bigint)|Mandatory|System identifier of product (auto increment)|
|availability|Boolean|Mandatory|Displays if variation of the product is available or not<br/>Possible values: *true, false*|
|weight|String<br/>(Numeric)|Mandatory|Weight of the product (kg). Used for delivery integration<br/>Default value: 0.5<br/>Min length - 1; max length - 18|
|discountId|Integer|Mandatory|Has *NULL* value by default (if no discounts were applied)|
|price|String<br/>(Numeric)|Mandatory|Product variation price<br/>Min length - 1; max length - 18|
|discountPrice|String<br/>(Numeric)|Mandatory|If no discounts were applied has the same value as price<br/>Min length - 1; max length - 18|
|quantity|Integer|Mandatory|Quantity of products in variation|
|images|Array of Strings (url)|Mandatory|Images of the product variation<br/>Number of variations is limited only by PHP logic|
|options|Array of objects|Mandatory|Size, colour, material etc. of the product<br/>Empty array by default; one product can have 2 options max|
|options.id|Integer|Optional|System identifier of options (auto increment)|
|options.name|String|Optional|Options name<br/>Min length - 1; max length - 255|
|options.value|String|Optional|Options value<br/>Min length - 1; max length - 32|
|blockedAt|Timestamp|Mandatory|Has *NULL* value if variation isn’t blocked<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|totalPages|Integer<br/>(Positive integer)|Mandatory|Number of pages (groups of items), controlled with pageSize parameter|
|totalItems|Integer<br/>(Positive integer)|Mandatory|Total number of available items|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 12,
               "collectionId": 1,
               "brandId": 1,
               "slug": "red-car",
               "name": "Red car",
               "unlimited": true,
               "productId": 12,
               "availability": true,
               "price": "10000",
               "weight": null,
               "discountId": null,
               "quantity": 1,
               "images": [],
               "options": [
                   {
                       "id": 1,
                       "name": "Color",
                       "value": "Red"
                   }
               ],
               "couponIdList": [
                   1
               ],
               "discountPrice": "10000.00"
           },
           {
               "id": 13,
               "collectionId": 1,
               "brandId": 1,
               "slug": "blue-car",
               "name": "Blue car",
               "unlimited": true,
               "productId": 13,
               "availability": true,
               "price": "10000",
               "weight": null,
               "discountId": 1,
               "quantity": 1,
               "images": [],
               "options": [
                   {
                       "id": 1,
                       "name": "Color",
                       "value": "Blue"
                   }
               ],
               "couponIdList": [],
               "discountPrice": "7000.00"
           }
       ],
       "totalPages": 1,
       "totalItems": 2
   }
}
```

## Get all Products entries ids

This operation allow to retrieve identifiers of all product variations in the system.

> **POST** api/v3/product-entries/get-ids-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Request parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|
|filter|Object<br/>Limited system values|Optional|searchTerm performs search by name parameter|
|sort|String|Optional|System sorting options<br/>1. price:asc, price:desc,<br/>2. quantity:asc, quantity:desc|

**Product entries filter parameters**

|**Filter Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|collectionId|Integer|Optional|Perform filtration by assigned collection<br/>PHP system limitations|
|productId|Integer|Optional|Perform filtration by product id|
|searchTerm|String|Optional|Perform filtration by product name<br/>Min length - 1, max length - 255|
|idList|Array of integers|Optional|Perform filtration by list of variation ids<br/>PHP system limitations|
|discountId|Integer|Integer<br/>(Bigint)|Optional|Perform filtration by discount id|
|couponId|integer|Integer<br/>(Bigint)|Optional|Perform filtration by coupon id|

#### Request example

> **POST** api/v3/product-entries/get-ids-list

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

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Php system limitations|Array of variation ids matched filter criteria is returned|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           12,
           13,
           14,
           15
       ]
   }
}
```

