# Order

- [Get Order](#get-order)
- [Get all Orders](#get-all-orders)
- [Create Order](#create-order)
- [Update Order](#update-order)
- [Get Orders payment details](#get-orders-payment-details)
- [Update External Order Delivery Status](#update-external-order-delivery-status)
- [Delete Orders](#delete-orders)

## Get Order

### Description

This operation retrieves a specific Order.

> **GET** api/v3/order/get?id={id}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|

#### Request example

> **GET** api/v3/order/get?id=98

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|createdAt|DateTime|Mandatory|Timestamp which shows date and time when order was created<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 98,
        "paymentDetails": {
            "subTotal": "30600.00",
            "total": "38920.00",
            "cartDiscountDetails": {
                "type": "cash",
                "value": "2500.00",
                "reason": "For testing purposes",
                "result": "2500.00"
            },
            "couponDetails": {
                "id": 9,
                "name": "1969",
                "result": "9180.00"
            },
            "deliveryOptionDetails": {
                "id": 8,
                "name": "Delivery around the world",
                "type": "delivery",
                "result": "20000.00"
            }
        },
        "customerId": 57,
        "customerDetails": {
            "name": "John Doe",
            "phoneNumber": "+1116706708",
            "email": "voi@gmail.com",
            "country": "BY",
            "state": "Brest region",
            "city": "Brest",
            "zipPostal": "224023",
            "address": "Moloya 346, apartment 108"
        },
        "currency": "NGN",
        "cart": [
            {
                "id": 91,
                "quantity": 1,
                "price": "30600.00",
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "weight": ""
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes"
        },
        "couponId": 9,
        "deliveryOptionId": 8,
        "salesChannel": "my_shop",
        "paymentId": 4,
        "deliveryStatus": "processing",
        "externalDeliveryStatus": null,
        "externalDeliveryReference": null,
        "paymentStatus": "paid",
        "createdAt": "2024-03-20T12:57:01.000Z",
        "isOneClick": false,
        "note": "Order for testing purposes"
    }
}
```

## Get all Orders

### Description

This operation retrieves list of Orders satisfying to the search term and filter criteria.

> **POST** api/v3/order/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|filter|Object|Optional|Entity unique identifier (auto increment)|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. sortIndex:asc, sortIndex:desc|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with items|
|pageSize|Integer<br/>(Bigint)|Optional|Number of items per page|

**Filter parameters:**

|**Name**|**Value Type**|**Value Limitation**|**Description**|
|---|---|---|---|
|searchTerm|String|Perform filtration by Customer's full_name, phone_number, email,country, city, state, zip_postal, address<br/>Min length - 1, max length - 255|
|customerId|Integer<br/>Positive integers|Perform filtration by Customer ids|
|paymentStatus|Array of strings|Perform filtration by payment statuses<br/>PHP system limitations|
|deliveryStatuses|Array of strings|Perform filtration by delivery statuses<br/>PHP system limitations|
|salesChannels|Array of strings|Perform filtration by sales channels<br/>PHP system limitations|
|startDate|Date|Order's date >= specified start date<br/>Format: *YYYY-MM-DD*|
|endDate|Date|Order's date <= specified end date<br/>Format: *YYYY-MM-DD*|

#### Request example

> **POST** api/v3/order/get-list

```json
{
    "data": {
        "page": 1,
        "pageSize": 10,
        "filter": {"customerId": "57"},
        "sort": "id:desc"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of orders matched filter criteria is returned<br/>Php system limitations|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|createdAt|DateTime|Mandatory|Timestamp which shows date and time when order was created<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|
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
                "id": 98,
                "paymentDetails": {
                    "subTotal": "30600.00",
                    "total": "38920.00",
                    "cartDiscountDetails": {
                        "type": "cash",
                        "value": "2500.00",
                        "reason": "For testing purposes",
                        "result": "2500.00"
                    },
                    "couponDetails": {
                        "id": 9,
                        "name": "1969",
                        "result": "9180.00"
                    },
                    "deliveryOptionDetails": {
                        "id": 8,
                        "name": "Delivery around the world",
                        "type": "delivery",
                        "result": "20000.00"
                    }
                },
                "customerId": 57,
                "customerDetails": {
                    "name": "John Doe",
                    "phoneNumber": "+1136706708",
                    "email": "voi@gmail.com",
                    "country": "BY",
                    "state": "Brest region",
                    "city": "Brest",
                    "zipPostal": "224023",
                    "address": "Moloya 346, apartment 108"
                },
                "currency": "NGN",
                "cart": [
                    {
                        "id": 91,
                        "quantity": 1,
                        "price": "30600.00",
                        "name": "Ford Escort 1300GT 1969, 2-door sedan",
                        "weight": ""
                    }
                ],
                "cartDiscount": {
                    "type": "cash",
                    "value": "2500.00",
                    "reason": "For testing purposes"
                },
                "couponId": 9,
                "deliveryOptionId": 8,
                "salesChannel": "my_shop",
                "paymentId": 4,
                "deliveryStatus": "processing",
                "externalDeliveryStatus": null,
                "externalDeliveryReference": null,
                "paymentStatus": "paid",
                "createdAt": "2024-03-20T12:57:01.000Z",
                "isOneClick": false,
                "note": "Order for testing purposes"
            },
            {
                "id": 97,
                "paymentDetails": {
                    "subTotal": "30600.00",
                    "total": "38920.00",
                    "cartDiscountDetails": {
                        "type": "cash",
                        "value": "2500.00",
                        "reason": "For testing purposes",
                        "result": "2500.00"
                    },
                    "couponDetails": {
                        "id": 9,
                        "name": "1969",
                        "result": "9180.00"
                    },
                    "deliveryOptionDetails": {
                        "id": 8,
                        "name": "Delivery around the world",
                        "type": "delivery",
                        "result": "20000.00"
                    }
                },
                "customerId": 57,
                "customerDetails": {
                    "name": "John Doe",
                    "phoneNumber": "+1136706708",
                    "email": "voi@gmail.com",
                    "country": "BY",
                    "state": "Brest region",
                    "city": "Brest",
                    "zipPostal": "224023",
                    "address": "Moloya 346, apartment 108"
                },
                "currency": "NGN",
                "cart": [
                    {
                        "id": 91,
                        "quantity": 1,
                        "price": "30600.00",
                        "name": "Ford Escort 1300GT 1969, 2-door sedan",
                        "weight": ""
                    }
                ],
                "cartDiscount": {
                    "type": "cash",
                    "value": "2500.00",
                    "reason": "For testing purposes"
                },
                "couponId": 9,
                "deliveryOptionId": 8,
                "salesChannel": "my_shop",
                "paymentId": 4,
                "deliveryStatus": "processing",
                "externalDeliveryStatus": null,
                "externalDeliveryReference": null,
                "paymentStatus": "paid",
                "createdAt": "2024-03-20T12:49:17.000Z",
                "isOneClick": false,
                "note": "Order for testing purposes"
            }
        ],
        "totalPages": 1,
        "totalItems": 2
    }
}
```
</details>

## Create Order

### Description

This operation creates an Order.

> **POST** api/v3/order/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|

#### Request example

> **POST** api/v3/order/create

```json
{
    "data": {
        "paymentDetails": {
            "subTotal": "96300.00",
            "total": "84910.00",
            "cartDiscountDetails": {
                "type": "cash",
                "value": "2500.00",
                "reason": "For testing purposes",
                "result": "2500.00"
            },
            "couponDetails": {
                "id": 9,
                "name": "1969",
                "result": "28890.00"
            },
            "deliveryOptionDetails": {
                "id": 8,
                "name": "Delivery around the world",
                "type": "delivery",
                "result": "20000.00"
            }
        },
        "customerId": 57,
        "customerDetails": {
            "name": "Igor Yalovoi",
            "phoneNumber": "+375336706708",
            "email": "igoryalovoi@gmail.com",
            "country": "BY",
            "state": "Brest region",
            "city": "Brest",
            "zipPostal": "224023",
            "address": "Moskovskaya 346, apartment 108"
        },
        "currency": "NGN",
        "cart": [
            {
                "id": 91,
                "quantity": 1,
                "price": "30600.00",
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "weight": ""
            },
            {
                "id": 92,
                "quantity": 1,
                "price": "31500.00",
                "name": "Ford Escort 1300GT 1969, 2-door estate",
                "weight": ""
            },
            {
                "id": 93,
                "quantity": 1,
                "price": "34200.00",
                "name": "Ford Escort 1300GT 1969, panel van",
                "weight": ""
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes"
        },
        "couponId": 9,
        "deliveryOptionId": 8,
        "salesChannel": "my_shop",
        "paymentId": 4,
        "deliveryStatus": "processing",
        "externalDeliveryStatus": null,
        "externalDeliveryReference": null,
        "paymentStatus": "paid",
        "createdAt": "2024-03-20T12:49:17.000Z",
        "isOneClick": false,
        "note": "Order for testing purposes"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|createdAt|DateTime|Mandatory|Timestamp which shows date and time when order was created<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 98,
        "paymentDetails": {
            "subTotal": "96300.00",
            "total": "84910.00",
            "cartDiscountDetails": {
                "type": "cash",
                "value": "2500.00",
                "reason": "For testing purposes",
                "result": "2500.00"
            },
            "couponDetails": {
                "id": 9,
                "name": "1969",
                "result": "28890.00"
            },
            "deliveryOptionDetails": {
                "id": 8,
                "name": "Delivery around the world",
                "type": "delivery",
                "result": "20000.00"
            }
        },
        "customerId": 57,
        "customerDetails": {
            "name": "Igor Yalovoi",
            "phoneNumber": "+375336706708",
            "email": "igoryalovoi@gmail.com",
            "country": "BY",
            "state": "Brest region",
            "city": "Brest",
            "zipPostal": "224023",
            "address": "Moskovskaya 346, apartment 108"
        },
        "currency": "NGN",
        "cart": [
            {
                "id": 91,
                "quantity": 1,
                "price": "30600.00",
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "weight": ""
            },
            {
                "id": 92,
                "quantity": 1,
                "price": "31500.00",
                "name": "Ford Escort 1300GT 1969, 2-door estate",
                "weight": ""
            },
            {
                "id": 93,
                "quantity": 1,
                "price": "34200.00",
                "name": "Ford Escort 1300GT 1969, panel van",
                "weight": ""
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes"
        },
        "couponId": 9,
        "deliveryOptionId": 8,
        "salesChannel": "my_shop",
        "paymentId": 4,
        "deliveryStatus": "processing",
        "externalDeliveryStatus": null,
        "externalDeliveryReference": null,
        "paymentStatus": "paid",
        "createdAt": "2024-03-20T12:57:01.000Z",
        "isOneClick": false,
        "note": "Order for testing purposes"
    }
}
```

## Update Order

### Description

This operation updates an existing Order.

> **POST** api/v3/order/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|
|updateCart|Boolean|Mandatory|Defines updates that causes cart update<br/>Possible values: *true, false*|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|

#### Request example

> **POST** api/v3/order/create

```json
{
    "data": {
        "id": 98,
        "updateCart": true,
        "paymentDetails": {
            "subTotal": "30600.00",
            "total": "38920.00",
            "cartDiscountDetails": {
                "type": "cash",
                "value": "2500.00",
                "reason": "For testing purposes",
                "result": "2500.00"
            },
            "couponDetails": {
                "id": 9,
                "name": "1969",
                "result": "9180.00"
            },
            "deliveryOptionDetails": {
                "id": 8,
                "name": "Delivery around the world",
                "type": "delivery",
                "result": "20000.00"
            }
        },
        "customerId": 57,
        "customerDetails": {
            "name": "Igor Yalovoi",
            "phoneNumber": "+375336706708",
            "email": "igoryalovoi@gmail.com",
            "country": "BY",
            "state": "Brest region",
            "city": "Brest",
            "zipPostal": "224023",
            "address": "Moskovskaya 346, apartment 108"
        },
        "currency": "NGN",
        "cart": [
            {
                "id": 91,
                "quantity": 1,
                "price": "30600.00",
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "weight": ""
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes"
        },
        "couponId": 11,
        "deliveryOptionId": 8,
        "salesChannel": "my_shop",
        "paymentId": 4,
        "deliveryStatus": "processing",
        "externalDeliveryStatus": null,
        "externalDeliveryReference": null,
        "paymentStatus": "paid",
        "createdAt": "2024-03-20T12:49:17.000Z",
        "isOneClick": false,
        "note": "Order for testing purposes"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Order unique identifier (auto increment)|
|paymentDetails|Array of objects|Mandatory|Includes all discounts, deliveries and total sum<br/>Number of objects is limited only by PHP logic|
|paymentDetails.subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|paymentDetails.cartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscountDetails.type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|cartDiscountDetails.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscountDetails.reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|cartDiscountDetails.result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|paymentDetails.couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|couponDetails.id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|couponDetails.name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|couponDetails.result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|paymentDetails.deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|deliveryOptionDetails.id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|deliveryOptionDetails.name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|deliveryOptionDetails.type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|deliveryOptionDetails.result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|
|customerId|Integer<br/>(Bigint)|Mandatory|Unique customer identifier|
|customerDetails|Array of objects|Mandatory|Customer details<br/>Number of objects is limited only by PHP logic|
|customerDetails.name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|customerDetails.phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|customerDetails.email|String|Optional|Customer email<br/>64 symbols including "@" sign and domain|
|customerDetails.country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|customerDetails.city|String|Optional|Customer city<br/>Min length - 1, max length - 255|
|customerDetails.state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|customerDetails.zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|customerDetails.address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|currency|String|Mandatory|Selected currency for the order (ISO code)<br/>Min length - 1, max length - 3|
|cart|Array of objects|Mandatory|All products which are in the shopping cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Mandatory|Unique identifier of a product in cart|
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart|
|cart.price|String<br/>(numeric)|Mandatory|Product price<br/>Min length - 1; max length - 18|
|cart.name|String|Mandatory|Product name<br/>Min length - 1, max length - 255|
|cart.weight|String<br/>(numeric)|Optional|Product weight<br/>Mandatory if 3rd party delivery service is activated<br/>Min length - 1; max length - 18;<br/>Default value - 0.5 kg|
|cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product/products in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|
|salesChannel|String|Mandatory|Shows through which channel Buyer placed an order<br/>Min length - 1, max length - 50|
|paymentId|String|Optional|Payment method identifier<br/>Min length - 1, max length - 20|
|deliveryStatus|String|Mandatory|Status of order delivery<br/>Min length - 1, max length - 20|
|externalDeliveryStatus|String|Optional|Status of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 30|
|externalDeliveryReference|String|Optional|Unique identifier of the delivery via 3rd party delivery service<br/>Min length - 1, max length - 255|
|paymentStatus|String|Mandatory|Status of order payment<br/>Min length - 1, max length - 20|
|createdAt|DateTime|Mandatory|Timestamp which shows date and time when order was created<br/>Format: *YYYY-MM-DD HH:MM:SS*|
|isOneClick|Boolean|Mandatory|Shows whether order was created via Buy-in-one-click flow<br/>Possible values: *true, false*|
|note|String|Optional|Order note<br/>Min length - 1, max length - 500|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 98,
        "paymentDetails": {
            "subTotal": "30600.00",
            "total": "38920.00",
            "cartDiscountDetails": {
                "type": "cash",
                "value": "2500.00",
                "reason": "For testing purposes",
                "result": "2500.00"
            },
            "couponDetails": {
                "id": 9,
                "name": "1969",
                "result": "9180.00"
            },
            "deliveryOptionDetails": {
                "id": 8,
                "name": "Delivery around the world",
                "type": "delivery",
                "result": "20000.00"
            }
        },
        "customerId": 57,
        "customerDetails": {
            "name": "Igor Yalovoi",
            "phoneNumber": "+375336706708",
            "email": "igoryalovoi@gmail.com",
            "country": "BY",
            "state": "Brest region",
            "city": "Brest",
            "zipPostal": "224023",
            "address": "Moskovskaya 346, apartment 108"
        },
        "currency": "NGN",
        "cart": [
            {
                "id": 91,
                "quantity": 1,
                "price": "30600.00",
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "weight": ""
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes"
        },
        "couponId": 11,
        "deliveryOptionId": 8,
        "salesChannel": "my_shop",
        "paymentId": 4,
        "deliveryStatus": "processing",
        "externalDeliveryStatus": null,
        "externalDeliveryReference": null,
        "paymentStatus": "paid",
        "createdAt": "2024-03-20T12:49:17.000Z",
        "isOneClick": false,
        "note": "Order for testing purposes"
    }
}
```

## Get Orders payment details

This operation updates an existing Order.

> **POST** api/v3/order/get-payment-details<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|orderId|Integer<br/>(Bigint)|Required|ID of order which payment details should be retrieved|
|cart|Array of objects|Required|Contains brief info about product item(s) in the cart<br/>Number of objects is limited only by PHP logic|
|cart.id|Integer<br/>(Bigint)|Required||
|cart.quantity|Integer<br/>Positive Integer|Mandatory|Product quantity in cart||cartDiscount|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|cartDiscount.type|String|Optional|Two types: certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20<br/>Possible values: *cash, percentage*|
|cartDiscount.value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|cartDiscount.reason|String|Optional|Discount application reason<br/>Min length - 1, max length - 255|
|couponId|Integer<br/>(Bigint)|Optional|Unique identifier of the coupon applied to the product(s) in cart|
|deliveryOptionId|Integer<br/>(Bigint)|Optional|Identifier of the delivery option|

#### Request example

> **POST** api/v3/order/get-payment-details

```json
{
    "data": {
        "orderId": 98,
        "cart": [
            {
                "id": 91,
                "quantity": 1
            }
        ],
        "cartDiscount": {
            "type": "cash",
            "value": "2500",
            "reason": "For testing purposes"
        },
        "couponId": 9,
        "deliveryOptionId": 8
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|subTotal|String<br/>(numeric)|Mandatory|Sum without coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|total|String<br/>(numeric)|Mandatory|Total sum incl. all products, coupons, deliveries and order discounts<br/>Min length - 1; max length - 18|
|pcartDiscountDetails|Array of objects|Mandatory|Includes order discounts<br/>Number of objects is limited only by PHP logic|
|type|String|Optional|Certain amount of money or percent of subTotal<br/>Min length - 1, max length - 20;<br/>Options: cash, percentage|
|value|String|Optional|Discount value<br/>Min length - 1, max length - 255|
|reason|String|Optional|Reason for giving order discount<br/>Min length - 1, max length - 255|
|result|String<br/>(numeric)|Optional|Sum of order discount in the selected currency<br/>Min length - 1; max length - 18|
|couponDetails|Array of objects|Mandatory|Coupon details<br/>Number of objects is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Optional|Unique identifier of coupon applied to the product(s) in order|
|name|String|Optional|Coupon name<br/>Min length - 1, max length - 255|
|result|String<br/>(numeric)|Optional|Sum of discount applied as a coupon to product(s)<br/>Min length - 1; max length - 18|
|deliveryOptionDetails|Array of objects|Mandatory|Order delivery option details<br/>Number of objects is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|Delivery option identifier|
|name|String|Mandatory|Delivery option name<br/>Min length - 1, max length - 255|
|type|String|Mandatory|Delivery type<br/>Possible values: *delivery, shiip, pickup*|
|result|String<br/>(numeric)|Mandatory|Cost of the delivery<br/>Min length - 1; max length - 18|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "subTotal": "30600.00",
        "total": "38920.00",
        "cartDiscountDetails": {
            "type": "cash",
            "value": "2500.00",
            "reason": "For testing purposes",
            "result": "2500.00"
        },
        "couponDetails": {
            "id": 9,
            "name": "1969",
            "result": "9180.00"
        },
        "deliveryOptionDetails": {
            "id": 8,
            "name": "Delivery around the world",
            "type": "delivery",
            "result": "20000.00"
        }
    }
}
```

## Update External Order Delivery Status

### Description

This operation allows to update the order delivery status (if delivery is provided by 3rd party system)

> **POST** api/v3/order/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body parameters**

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|orderId|Integer|Required|ID of order which delivery status should be sent to the 3rd party system|
|deliveryService|String|Required|Delivery service identifier<br/>Min length - 1, max length - 255|
|deliveryStatus|String|Required|Delivery status. Should be agreed with delivery service<br/>Min length - 1, max length - 255|

#### Request example

> **POST** api/v3/order/update

```json
{
    "data": {
        "orderId": 86,
        "deliveryService": "shiip",
        "deliveryStatus": "booked"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and empty object in case of successful external delivery status update.

## Delete Orders

### Description

This operation performs order deletion. Also can be used for bulk deletion.

> **POST** api/v3/order/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior in Request**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of orders' IDs.<br/>Number of items is limited only by PHP logic|

#### Request example

```json
{
    "data": {
        "items": [11, 12]
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