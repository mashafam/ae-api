# Coupon

- [Get coupon](#get-coupon)
- [Get all coupons](#get-all-coupons)
- [Create coupon](#create-coupon)
- [Update coupon](#update-coupon)
- [Add product variations to Coupon](#add-product-variations-to-coupon)
- [Delete coupon](#delete-coupon)

## Get coupon

### Description

This operation returns a specific coupon information.

> **GET** api/v3/coupon/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|System identifier of coupon to be returned|

#### Request example

> **GET** api/v3/coupon/get?id=1

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of coupon to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*coupon*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the coupon|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "coupon",
       "productEntriesCount": 0,
       "name": "COUPONNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Get all coupons

### Description

This operation returns full list of coupons information.

> **GET** api/v3/coupon/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json


### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|searchTerm performs search by name parameter<br/>Min length - 1; max length - 255|

#### Request example

> **GET** api/v3/coupon/get-list<br/>

```json
{
   "data": {
       "filter": {"searchTerm": "COUPONNAME"}
   }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Empty array returns in case if no match found|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of coupon to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*coupon*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the coupon|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "type": "coupon",
               "productEntriesCount": 1,
               "name": "COUPONNAME",
               "percentage": 30,
               "permanent": true,
               "startDate": "2023-01-05T14:48:00.000Z",
               "endDate": "2023-10-05T14:48:00.000Z"
           },
           {
               "id": 2,
               "type": "coupon",
               "productEntriesCount": 0,
               "name": "COUPONNAME1",
               "percentage": 30,
               "permanent": true,
               "startDate": "",
               "endDate": ""
           }
       ]
   }
}
```

## Create coupon

### Description

This operation creates new coupon.

> **POST** api/v3/coupon/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Request example

> **GET** api/v3/coupon/create<br/>

```json
{
   "data": {
       "name": "COUPONNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of coupon to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*coupon*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the coupon|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "coupon",
       "productEntriesCount": 0,
       "name": "COUPONNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Update coupon

### Description

This operation updates existing coupon.

> **POST** api/v3/coupon/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Request example

> **GET** api/v3/coupon/get-list<br/>

```json
{
   "data": {
       "name": "COUPONNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of coupon to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*coupon*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the coupon|
|name|String|Mandatory|Coupon code provided by User. Should be unique among the entity<br/>Min length - 1, max length - 255|
|percentage|Integer|Mandatory|Percentage amount provided for coupon<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the coupon validity|
|startDate|Datetime|Mandatory|Start date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of coupon validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "coupon",
       "productEntriesCount": 0,
       "name": "COUPONNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Add product variations to Coupon

### Description

This operation allows to link coupon and product variations.

> **POST** api/v3/coupon/add-product-entries<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|Coupon ID (exists in the system)|
|productEntries|Array of integers|Mandatory|Product variation identifiers existing in the system.<br/>Could be retrieved on [Get all Products entries list](https://github.com/mashafam/ae-api/blob/source-api-doc/product-entry-api.md#get-all-products-entries-list) endpoint|

#### Request example

> **POST** api/v3/coupon/add-product-entries<br/>

```json
{
   "data": {
       "id": 1,
       "productEntries": [12]
   }
}
```

### Output

In case of success, the system returns **200(OK)** without response body.

## Delete coupon

### Description

This operation provides deletion of existing coupon.

> **POST** api/v3/coupon/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|System identifier(s) of coupon to be deleted<br/>Number of items is limited only by PHP logic|

#### Request Example

> **POST** api/v3/coupon/delete

```json
{
    "data": {
        "items": [1, 2]
    }
}
```

### Output

In case of success, the system returns **200 (OK)** without response body.