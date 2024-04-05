# Payment options

- [Get Payment option](#get-payment-option)
- [Get all Payment options](#get-all-payment-options)
- [Update Payment option](#update-payment-option)
- [Update Payment options' order](#update-payment-options-order)
- [Update Payment options' status](#update-payment-status)

## Get Payment option

### Description

This operation retrieves a specific payment option by its id.

> **GET** api/v3/payment/get?id={id}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|

#### Request example

> **GET** api/v3/payment/get?id=1

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|name|String|Mandatory|Payment option name<br/>There are following default payment options: *Cash on Delivery, POS, Bank transfer*<br/>Min length - 1, max length - 255|
|description|String|Mandatory|Payment option description<br/>Every default payment options has pre-defined descriptions<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Pre-defined parameter<br/>Possible values: *cash_on_delivery, pos, banking_account_transfer*<br/>Min length - 1, max length - 30|
|connected|Boolean|Mandatory|Defines payment method activation status|
|sortIndex|Integer|Mandatory|Identifies displaying order|
|config|JSON|Mandatory|Payment methods configuration container|
|image|String|Mandatory|Container for payment methods image<br/>Can contain default icon for default payment option OR icon of 3rd party payment service|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 1,
       "name": "Cash on Delivery",
       "description": "Customers pay cash when receiving a product",
       "type": "cash",
       "connected": false,
       "sortIndex": 1,
       "config": {},
       "image": ""
   }
}
```

## Get all Payment options

### Description

This operation retrieves list payment option.

> **GET** api/v3/payment/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request performs with no body

#### Request example

> **GET** api/v3/payment/get?id=1

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of retrieved payment options<br/>PHP system limitations|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|name|String|Mandatory|Payment option name<br/>There are following default payment options: *Cash on Delivery, POS, Bank transfer*<br/>Min length - 1, max length - 255|
|description|String|Mandatory|Payment option description<br/>Every default payment options has pre-defined descriptions<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Pre-defined parameter<br/>Possible values: *cash_on_delivery, pos, banking_account_transfer*<br/>Min length - 1, max length - 30|
|connected|Boolean|Mandatory|Defines payment method activation status|
|sortIndex|Integer|Mandatory|Identifies displaying order|
|config|JSON|Mandatory|Payment methods configuration container|
|image|String|Mandatory|Container for payment methods image<br/>Can contain default icon for default payment option OR icon of 3rd party payment service|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "name": "Cash on Delivery",
               "description": "Customers pay cash when receiving a product",
               "type": "cash",
               "connected": false,
               "sortIndex": 0,
               "config": {},
               "image": ""
           },
           {
               "id": 2,
               "name": "Paystack",
               "description": "Payments via credit/debit cards, mobile money, QR codes, bank accounts, USSD",
               "type": "paystack",
               "connected": false,
               "sortIndex": 1,
               "config": {},
               "image": ""
           },
           {
               "id": 3,
               "name": "POS",
               "description": "Payments by POS terminals",
               "type": "pos",
               "connected": false,
               "sortIndex": 2,
               "config": {},
               "image": ""
           },
           {
               "id": 4,
               "name": "Bank transfer",
               "description": "Payments to the bank account. Providing account details will be required",
               "type": "banking_account_transfer",
               "connected": false,
               "sortIndex": 3,
               "config": {},
               "image": ""
           }
       ]
   }
}
```

## Update Payment option

### Description

This operation allows to update payment option (update details, connect/disconnect).

> **POST** api/v3/payment/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|name|String|Mandatory|Payment option name<br/>There are following default payment options: *Cash on Delivery, POS, Bank transfer*<br/>Min length - 1, max length - 255|
|description|String|Mandatory|Payment option description<br/>Every default payment options has pre-defined descriptions<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Pre-defined parameter<br/>Possible values: *cash_on_delivery, pos, banking_account_transfer*<br/>Min length - 1, max length - 30|
|connected|Boolean|Mandatory|Defines payment method activation status|
|sortIndex|Integer|Mandatory|Identifies displaying order|
|config|JSON|Optional|Payment methods configuration container|
|image|String|Mandatory|Container for payment methods image url<br/>Can contain default icon for default payment option OR icon of 3rd party payment service|

#### Request example

> **POST** api/v3/payment/update

```json
{
   "data": {
       "id": 1,
       "name": "Cash",
       "description": "Only Cash",
       "type": "custom",
       "connected": true,
       "sortIndex": 0,
       "config": {},
       "image": "cashImage.img"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of retrieved payment options<br/>PHP system limitations|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|name|String|Mandatory|Payment option name<br/>There are following default payment options: *Cash on Delivery, POS, Bank transfer*<br/>Min length - 1, max length - 255|
|description|String|Mandatory|Payment option description<br/>Every default payment options has pre-defined descriptions<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Pre-defined parameter<br/>Possible values: *cash_on_delivery, pos, banking_account_transfer*<br/>Min length - 1, max length - 30|
|connected|Boolean|Mandatory|Defines payment method activation status|
|sortIndex|Integer|Mandatory|Identifies displaying order|
|config|JSON|Mandatory|Payment methods configuration container|
|image|String|Mandatory|Container for payment methods image<br/>Can contain default icon for default payment option OR icon of 3rd party payment service|

#### Response example

```json
{
   "data": {
       "id": 1,
       "name": "Cash",
       "description": "Only Cash",
       "type": "custom",
       "connected": true,
       "sortIndex": 0,
       "config": {},
       "image": "cashImage.img"
   }
}
```

## Update Payment options order

### Description

This operation allows to set custom order for payment options' displaying in Online shop cart.

> **POST** api/v3/payment/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of payment options' ids - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/payment/update-order

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

## Update Payment status

### Description

This operation allows to update payment options' activation status.

> **POST** api/v3/payment/update-status<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of payment options' ids - status pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Payment option unique identifier (auto increment)|
|isActive|Boolean|Mandatory|Defines the payment options' activation status|

#### Request example

> **POST** api/v3/payment/update-status

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "isActive": true
           },
           {
               "id": 3,
               "isActive": true
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