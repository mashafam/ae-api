# Delivery options

- [Get Delivery option](#get-delivery-option)
- [Get all Delivery options](#get-all-delivery-options)
- [Create Delivery option](#create-delivery-option)
  - [Create delivery](#example-request-for-delivery-type)
  - [Create pickup](#example-request-for-pickup-type)
  - [Connect 3rd party delivery system](#example-request-for-shiip-type)
- [Update Delivery option](#update-delivery-option)
- [Update Delivery options order](#update-delivery-options-order)
- [Delete Delivery option]()

## Get Delivery option

### Description

This operation returns specific delivery option details using its id.

> **GET** api/v3/delivery/get?id={id}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option unique identifier (auto increment)|

#### Request example

> **GET** api/v3/delivery/get?id=1

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option unique identifier (auto increment)|
|name|String|Mandatory|Delivery option name provided by User<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Delivery option price<br/>Min length - 1, max length - 18|
|useBusinessAddress|Boolean|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Defines available countries for “delivery” type of Delivery options|
|description|String|Mandatory|Delivery option description provided by User<br/>Min length - 1, max length - 255|
|country|String|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 16|
|city|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|state|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|address|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 1024|
|sortIndex|Integer|Mandatory|System value, auto increment on creation|
|secretKey|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User<br/>Min length - 1, max length - 255|
|userName|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|phone|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Max length - 16|
|email|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|defaultWeight|String<br/>(Numeric)|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Max length - 18|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 1,
       "name": "Quick Delivery",
       "type": "delivery",
       "price": "18.00",
       "useBusinessAddress": false,
       "isGlobal": false,
       "description": "Quick delivery",
       "country": "USA",
       "zipPostal": "55555",
       "city": "NY",
       "state": "NY",
       "address": "NY",
       "sortIndex": 0,
       "secretKey": null,
       "userName": null,
       "phone": null,
       "email": null,
       "defaultWeight": null
   }
}
```

## Get all Delivery options

### Description

This operation returns list of delivery options with details.

> **GET** api/v3/delivery/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

The body is no needed to perform the operation.

#### Request example

> **GET** api/v3/delivery/get-list

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of retrieved delivery options<br/>Php system limitations|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option unique identifier (auto increment)|
|name|String|Mandatory|Delivery option name provided by User<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Delivery option price<br/>Min length - 1, max length - 18|
|useBusinessAddress|Boolean|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Defines available countries for “delivery” type of Delivery options|
|description|String|Mandatory|Delivery option description provided by User<br/>Min length - 1, max length - 255|
|country|String|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 16|
|city|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|state|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|address|String|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 1024|
|sortIndex|Integer|Mandatory|System value, auto increment on creation|
|secretKey|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User<br/>Min length - 1, max length - 255|
|userName|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|phone|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Max length - 16|
|email|String|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|defaultWeight|String<br/>(Numeric)|Mandatory<br/>for *Shiip* delivery type|Value provided by User, depends on delivery type<br/>Max length - 18|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 10,
               "name": "Store pickup",
               "type": "pickup",
               "price": "0",
               "useBusinessAddress": false,
               "isGlobal": false,
               "description": "Quick delivery",
               "country": "USA",
               "zipPostal": "11729",
               "city": "New York",
               "state": "NY",
               "address": "1960 Deer Pk Ave, Deer Park",
               "sortIndex": 9,
               "secretKey": null,
               "userName": null,
               "phone": null,
               "email": null,
               "defaultWeight": null
           },
           {
               "id": 9,
               "name": "Quick Delivery",
               "type": "pickup",
               "price": "18.00",
               "useBusinessAddress": false,
               "isGlobal": false,
               "description": "Quick delivery",
               "country": "USA",
               "zipPostal": "11729",
               "city": "New York",
               "state": "NY",
               "address": "1960 Deer Pk Ave, Deer Park",
               "sortIndex": 8,
               "secretKey": null,
               "userName": null,
               "phone": null,
               "email": null,
               "defaultWeight": null
           }
        ]
    }
}
```

## Create delivery option

### Description

This operation allows to create (connect) new delivery option.

> **POST** api/v3/delivery/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Attribute Name**|**Type**|**Behavior for *delivery***|**Behavior for *pickup***|**Behavior for *shiip***|**Description**|
|---|---|---|---|---|---|
|name|String|Mandatory|Mandatory|Mandatory<br/>*SHiiP* by hardcode|Delivery option name provided by User<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Mandatory|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Ignored|Mandatory<br/>always equal to **0**|Delivery option price<br/>Min length - 1, max length - 18|
|useBusinessAddress|Boolean|Mandatory|Mandatory<br/>always *false*|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Ignored|Ignored|Defines available countries for “delivery” type of Delivery options|
|description|String|Optional|Optional|Ignored|Delivery option description provided by User<br/>Min length - 1, max length - 255|
|country|String|Ignored|Mandatory|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 16|
|city|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|state|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|address|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 1024|
|secretKey|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|userName|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|phone|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Max length - 16|
|email|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|defaultWeight|String<br/>(Numeric)|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Max length - 18|

#### Request example

> **GET** api/v3/delivery/create

##### Example request for *delivery* type

Delivery type represents the options provided by User to Buyer (custom negotiable options).

```json
{
   "data": {
       "name": "Quick Delivery",
       "type": "delivery",
       "price": "18.00",
       "useBusinessAddress": false,
       "isGlobal": true,
       "description": "Quick delivery"
    }
}
```

##### Example request for *pickup* type

Pickup type represents the options of pickup points, physical stores, warehouses, etc.

```json
{
   "data": {
       "name": "Store pickup",
       "type": "pickup",
       "price": "0",
       "useBusinessAddress": false,
       "description": "Quick delivery",
       "country": "USA",
       "zipPostal": "11729",
       "city": "New York",
       "state": "NY",
       "address": "1960 Deer Pk Ave, Deer Park"
   }
}
```

##### Example request for *shiip* type

Shiip type represents the integration with 3rd party delivery service. It's assummed that User is already has Shiip profile.

```json
{
   "data": {
       "name": "Shiip",
       "type": "shiip",
       "price": "0",
       "useBusinessAddress": false,
       "description": "Shiip delivery",
       "country": "NG",
       "zipPostal": "55555",
       "city": "NY",
       "state": "NY",
       "address": "NY",
       "defaultWeight": "3.85",
       "secretKey": "hBUvTVTGyhIUhUI798&89",
       "userName": "John Brown",
       "phone": "+1233456789",
       "email": "test@test.com"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior for *delivery***|**Behavior for *pickup***|**Behavior for *shiip***|**Description**|
|---|---|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Mandatory|Mandatory|Delivery option unique identifier (auto increment)|
|name|String|Mandatory|Mandatory|Mandatory<br/>*SHiiP* by hardcode|Delivery option name provided by User|
|type|String|Mandatory|Mandatory|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Ignored|Mandatory<br/>always equal to **0**|Delivery option price|
|useBusinessAddress|Boolean|Mandatory|Mandatory<br/>always *false*|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Ignored|Ignored|Defines available countries for “delivery” type of Delivery options|
|description|String|Optional|Optional|Ignored|Delivery option description provided by User|
|country|String|Ignored|Mandatory|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|city|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|state|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|address|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|sortIndex|Integer|Mandatory|Mandatory|Mandatory|System value, auto increment on creation|
|secretKey|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|userName|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|phone|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|email|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|defaultWeight|String<br/>(Numeric)|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|

#### Response examples

> Status: 200 (OK)

##### Example response for *delivery* type

```json
{
   "data": {
       "id": 4,
       "name": "Quick Delivery",
       "type": "delivery",
       "price": "18.00",
       "useBusinessAddress": true,
       "isGlobal": true,
       "description": "Quick delivery",
       "country": "NG",
       "zipPostal": "",
       "city": "",
       "state": "",
       "address": "",
       "sortIndex": 3,
       "secretKey": null,
       "userName": null,
       "phone": null,
       "email": null,
       "defaultWeight": null
   }
}
```

##### Example response for *pickup* type

```json
{
   "data": {
       "id": 10,
       "name": "Store pickup",
       "type": "pickup",
       "price": "0",
       "useBusinessAddress": false,
       "isGlobal": false,
       "description": "Quick delivery",
       "country": "USA",
       "zipPostal": "11729",
       "city": "New York",
       "state": "NY",
       "address": "1960 Deer Pk Ave, Deer Park",
       "sortIndex": 9,
       "secretKey": null,
       "userName": null,
       "phone": null,
       "email": null,
       "defaultWeight": null
   }
}
```

##### Example response for *shiip* type

```json
{
   "data": {
       "id": 7,
       "name": "Shiip",
       "type": "shiip",
       "price": "18.00",
       "useBusinessAddress": false,
       "isGlobal": false,
       "description": "Quick delivery",
       "country": "NG",
       "zipPostal": "55555",
       "city": "NY",
       "state": "NY",
       "address": "NY",
       "sortIndex": 3,
       "secretKey": "ssk_799aa242d**************************16ce244c7faa6",
       "userName": "John Brown",
       "phone": "+1233456789",
       "email": "test@test.com",
       "defaultWeight": "3.85"
   }
}
```

## Update Delivery option

### Description

This operation allows to update delivery option.

> **POST** api/v3/delivery/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Attribute Name**|**Type**|**Behavior for *delivery***|**Behavior for *pickup***|**Behavior for *shiip***|**Description**|
|---|---|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Mandatory|Mandatory|Delivery option unique identifier (auto increment)|
|name|String|Mandatory|Mandatory|Mandatory<br/>*SHiiP* by hardcode|Delivery option name provided by User<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Mandatory|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Ignored|Mandatory<br/>always equal to **0**|Delivery option price<br/>Min length - 1, max length - 18|
|useBusinessAddress|Boolean|Mandatory|Mandatory<br/>always *false*|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Ignored|Ignored|Defines available countries for “delivery” type of Delivery options|
|description|String|Optional|Optional|Ignored|Delivery option description provided by User<br/>Min length - 1, max length - 255|
|country|String|Ignored|Mandatory|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 16|
|city|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|state|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|address|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 1024|
|sortIndex|Integer|Mandatory|Mandatory|Mandatory|System value, auto increment on creation|
|secretKey|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|userName|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 255|
|phone|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Max length - 16|
|email|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Min length - 1, max length - 64|
|defaultWeight|String<br/>(Numeric)|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type<br/>Max length - 18|

#### Request example

> **GET** api/v3/delivery/create

##### Example request for *delivery* type

```json
{
   "data": {
       "id": 4,
       "name": "Quick Delivery",
       "type": "delivery",
       "price": "18.00",
       "useBusinessAddress": false,
       "isGlobal": true,
       "description": "Quick delivery"
    }
}
```

##### Example request for *pickup* type

```json
{
   "data": {
       "id": 10,
       "name": "Store pickup",
       "type": "pickup",
       "price": "0",
       "useBusinessAddress": false,
       "description": "Quick delivery",
       "country": "USA",
       "zipPostal": "11729",
       "city": "New York",
       "state": "NY",
       "address": "1960 Deer Pk Ave, Deer Park"
   }
}
```

##### Example request for *shiip* type

```json
{
   "data": {
       "id": 7,
       "name": "Shiip",
       "type": "shiip",
       "price": "0",
       "useBusinessAddress": false,
       "description": "Shiip delivery",
       "country": "NG",
       "zipPostal": "55555",
       "city": "NY",
       "state": "NY",
       "address": "NY",
       "defaultWeight": "3.85",
       "secretKey": "hBUvTVTGyhIUhUI798&*89",
       "userName": "John Brown",
       "phone": "+1233456789",
       "email": "test@test.com"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior for *delivery***|**Behavior for *pickup***|**Behavior for *shiip***|**Description**|
|---|---|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Mandatory|Mandatory|Delivery option unique identifier (auto increment)|
|name|String|Mandatory|Mandatory|Mandatory<br/>*SHiiP* by hardcode|Delivery option name provided by User|
|type|String|Mandatory|Mandatory|Mandatory|Describes type of delivery option<br/>Possible values: *delivery, shiip, pickup*|
|price|String<br/>(Numeric)|Mandatory|Ignored|Mandatory<br/>always equal to **0**|Delivery option price|
|useBusinessAddress|Boolean|Mandatory|Mandatory<br/>always *false*|Mandatory|Defines source of address for “pickup” delivery type|
|isGlobal|Boolean|Mandatory|Ignored|Ignored|Defines available countries for “delivery” type of Delivery options|
|description|String|Optional|Optional|Ignored|Delivery option description provided by User|
|country|String|Ignored|Mandatory|Mandatory|Country code list, used value from User profile|
|zipPostal|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|city|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|state|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|address|String|Ignored|Mandatory|Mandatory|Value provided by User, depends on delivery type|
|sortIndex|Integer|Mandatory|Mandatory|Mandatory|System value, auto increment on creation|
|secretKey|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|userName|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|phone|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|email|String|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|
|defaultWeight|String<br/>(Numeric)|Ignored|Ignored|Mandatory|Value provided by User, depends on delivery type|

#### Response examples

> Status: 200 (OK)

##### Example response for *delivery* type

```json
{
   "data": {
       "id": 4,
       "name": "Quick Delivery",
       "type": "delivery",
       "price": "18.00",
       "useBusinessAddress": true,
       "isGlobal": true,
       "description": "Quick delivery",
       "country": "NG",
       "zipPostal": "",
       "city": "",
       "state": "",
       "address": "",
       "sortIndex": 3,
       "secretKey": null,
       "userName": null,
       "phone": null,
       "email": null,
       "defaultWeight": null
   }
}
```

##### Example response for *pickup* type

```json
{
   "data": {
       "id": 10,
       "name": "Store pickup",
       "type": "pickup",
       "price": "0",
       "useBusinessAddress": false,
       "isGlobal": false,
       "description": "Quick delivery",
       "country": "USA",
       "zipPostal": "11729",
       "city": "New York",
       "state": "NY",
       "address": "1960 Deer Pk Ave, Deer Park",
       "sortIndex": 9,
       "secretKey": null,
       "userName": null,
       "phone": null,
       "email": null,
       "defaultWeight": null
   }
}
```

##### Example response for *shiip* type

```json
{
   "data": {
       "id": 7,
       "name": "Shiip",
       "type": "shiip",
       "price": "18.00",
       "useBusinessAddress": false,
       "isGlobal": false,
       "description": "Quick delivery",
       "country": "NG",
       "zipPostal": "55555",
       "city": "NY",
       "state": "NY",
       "address": "NY",
       "sortIndex": 3,
       "secretKey": "ssk_799aa242d**************************16ce244c7faa6",
       "userName": "John Brown",
       "phone": "+1233456789",
       "email": "test@test.com",
       "defaultWeight": "3.85"
   }
}
```

## Update Delivery options order

### Description

This operation allows to set custom order for delivery options' displaying in Online shop cart.

> **POST** api/v3/delivery/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of delivery options' ids - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/delivery/update-order

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

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful delivery options order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Delete Delivery option

### Description

This operation performs product deletion. Also can be used for bulk deletion.

> **POST** api/v3/delivery/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of product options' IDs.<br/>Number of items is limited only by PHP logic|

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

