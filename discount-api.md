# Discount

- [Get discount](#get-discount)
- [Get all discounts](#get-all-discounts)
- [Create discount](#create-discount)
- [Update discount](#update-discount)
- [Add product variations to discount](#add-product-variations-to-discount)
- [Delete discount](#delete-discount)

## Get discount

### Description

This operation returns a specific discount information.

> **GET** api/v3/discount/get?fields={fields}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json


### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|System identifier of discount to be returned|

#### Request example

> **GET** api/v3/discount/get?id=1<br/>
> **Content-type**: application/json

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of discount to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*discount*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the discount|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "discount",
       "productEntriesCount": 0,
       "name": "discountNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Get all discounts

### Description

This operation returns full list of discounts information.

> **GET** api/v3/discount/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json


### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|searchTerm performs search by name parameter<br/>min length - 1; max length - 255|

#### Request example

> **GET** api/v3/discount/get-list<br/>

```json
{
   "data": {
       "filter": {"searchTerm": "DISCOUNTNAME"}
   }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Empty array returns in case if no match found|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of discount to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*discount*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the discount|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "type": "discount",
               "productEntriesCount": 1,
               "name": "discountNAME",
               "percentage": 30,
               "permanent": true,
               "startDate": "2023-01-05T14:48:00.000Z",
               "endDate": "2023-10-05T14:48:00.000Z"
           },
           {
               "id": 2,
               "type": "discount",
               "productEntriesCount": 0,
               "name": "discountNAME1",
               "percentage": 30,
               "permanent": true,
               "startDate": "",
               "endDate": ""
           }
       ]
   }
}
```

## Create discount

### Description

This operation creates new discount.

> **POST** api/v3/discount/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Request example

> **GET** api/v3/discount/create<br/>

```json
{
   "data": {
       "name": "discountNAME",
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
|id|Integer<br/>(Bigint)|Mandatory|System identifier of discount to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*discount*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the discount|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "discount",
       "productEntriesCount": 0,
       "name": "discountNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Update discount

### Description

This operation updates existing discount.

> **POST** api/v3/discount/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Request example

> **GET** api/v3/discount/get-list<br/>

```json
{
   "data": {
       "name": "discountNAME",
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
|id|Integer<br/>(Bigint)|Mandatory|System identifier of discount to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*discount*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the discount|
|name|String|Mandatory|discount code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for discount<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the discount validity|
|startDate|Datetime|Mandatory|Start date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of discount validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example
         
> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "type": "discount",
       "productEntriesCount": 0,
       "name": "discountNAME",
       "percentage": 30,
       "permanent": true,
       "startDate": "2023-01-05T14:48:00.000Z",
       "endDate": "2023-10-05T14:48:00.000Z"
   }
}
```

## Add product variations to discount

### Description

This operation allows to link discount and product variations.

> **POST** api/v3/discount/add-product-entries<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|discount ID (exists in the system)|
|productEntries|Array of integers|Mandatory|Product variation identifiers existing in the system.<br/>Could be retrieved on “Get all Products entries list” endpoint|

#### Request example

> **POST** api/v3/discount/add-product-entries<br/>

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

## Delete discount

### Description

This operation provides deletion of existing discount.

> **POST** api/v3/discount/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|System identifier(s) of discount to be deleted<br/>Number of items is limited only by PHP logic|

#### Request Example

> **POST** api/v3/discount/delete<br/>
> **Content-type**: application/json

```json
{
    "data": {
        "items": [1, 2]
    }
}
```

### Output

In case of success, the system returns **200 (OK)** without response body.