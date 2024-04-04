# Promo

Promo represents unified list of discounts and coupons.

- [Get All promos](#get-all-promos)

## Get All promos

### Desciption 

Such operation returns mixed list of discounts and coupons.

> **POST** api/v3/promo/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|System defined list of keys<br/>Min length - 1; max length - 255|
|filter.searchTerm|String|Optional|searchTerm performs search by name parameter<br/>Min length - 1; max length - 255|
|filter.type|Array of strings|Optional|Defines type of promo type to be retrieved<br/> Possible values: *discount*, *coupon*|
|filter.startDate|Datetime|Optional|Start date of promo validity, if permanent parameter is false<br/>Empty string, if not provided|
|filter.endDate|Datetime|Optional|End date of promo validity, if permanent parameter is false<br/>Empty string, if not provided|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|

#### Request example

> **POST** api/v3/promo/get-list

```json
{
   "data": {
       "filter": {
           "searchTerm": "name",
           "type": ["discount", "coupon"],
           "startDate": "2024-01-05T14:48:00.000Z",
           "endDate": "2024-02-05T14:48:00.000Z"
       },
       "page": 1,
       "pageSize": 10
   }
}
```

### Output

Success response code is 200 (OK); the response should include a body described below:

**Body Parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains array of results<br/>Empty array returns in case if no match found|
|id|Integer<br/>(Bigint)|Mandatory|System identifier of promo to be returned (automatically generated)|
|type|String|Mandatory|Describes type of promo (*discount* or *coupon*)|
|productEntriesCount|Integer<br/>(Bigint)|Mandatory|Number of product variations applied to the promo|
|name|String|Mandatory|Promo code provided by User<br/>Min length - 1, max length -255; should be unique among the entity|
|percentage|Integer|Mandatory|Percentage amount provided for promo<br/>Max value - 100|
|permanent|Boolean|Mandatory|Determines the duration of the promo validity|
|startDate|Datetime|Mandatory|Start date of promo validity, if permanent parameter is false<br/>Empty string, if not provided|
|endDate|Datetime|Mandatory|End date of promo validity, if permanent parameter is false<br/>Empty string, if not provided|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 2,
               "type": "discount",
               "productEntriesCount": 0,
               "name": "DISCOUNTNAME",
               "percentage": 30,
               "permanent": true,
               "startDate": "",
               "endDate": ""
           },
           {
               "id": 1,
               "type": "discount",
               "productEntriesCount": 1,
               "name": "DISCOUNTNAME",
               "percentage": 30,
               "permanent": true,
               "startDate": "2023-01-05T14:48:00.000Z",
               "endDate": "2023-10-05T14:48:00.000Z"
           }
       ],
       "totalPages": 1,
       "totalItems": 2
   }
}
```