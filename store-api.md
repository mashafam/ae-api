# Store

- [Get country settings list](#get-country-settings-list)
- [Check if User’s store exists](#check-if-users-store-exists)
- [Get store details](#get-store-details)
- [Unpublish store](#unpublish-store)
- [Get languages list](#get-languages-list)
- [Update store settings](#update-store-settings)
- [Change Own Domain](#change-own-domain)
- [Change Sub Domain](#change-sub-domain)
- [Check Own Domain](#check-own-domain)
- [Check Sub Domain](#check-sub-domain)
- [Cancel domain change](#cancel-domain-change)
- [Get Info](#get-info)
- [Update Info](#update-info)
- [Update Contacts Order](#update-contacts-order)
- [Get analytics](#get-analytics)
- [Get onboarding](#get-onboarding)
- [Update onboarding](#update-onboarding)

## Get country settings list

This operation returns the country of business settins list.

> **GET** api/v3/store/country-settings<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/country-settings

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|currencies|Array of objects|Mandatory|Number of objects is limited only by PHP logic|Currencies used by selected country|
|iso|String|Mandatory|Min lenght - 1, max lenght - 3|Currency code by country (ISO 4217 standard)|
|name|String|Mandatory|Min lenght  lenght - 1; max lenght - 255|Currency name|
|symbol|String|Mandatory|Min lenght  lenght - 1, max lenght - 3|Currency symbol|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "currencies": [
            {
                "iso": "NGN",
                "name": "Naira",
                "symbol": "₦"
            },
            {
                "iso": "USD",
                "name": "US dollar",
                "symbol": "$"
            }
        ]
    }
}
```

## Check if User’s store exists

Technical operation for User store existance check.

> **GET** api/v3/store/exists<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/exists

### Response example

Empty object returns if User’s Store exists

> Status: 200 (OK)

```json
{}
```

## Get store details

This operation returns the store internal settins list.

> **GET** api/v3/store/details<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/details

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|uuid|String|Mandatory|Min lenght  - 1, max lenght - 36|Unique identifier of the user’s store|
|published|Boolean|Mandatory|True, false|Shows if shop has already been published or not|
|status|String|Mandatory|Min lenght  - 1; max lenght - 10|Shop status (active for example)|
|domain|String|Mandatory|Min lenght  - 1, max lenght - 255|Shop domain|
|pendingDomain|String|Optional|Min lenght  - 1, max lenght - 255|Used only when user is waiting of his custom domain verification|
|domainPublished|String|Mandatory|Min lenght  - 1, max lenght - 255|Status of shop domain|
|domainScope|String|Mandatory|Min lenght  - 1, max lenght - 255|Scope of the domain (".dev.myexpress.shop" for example)|
|shopLanguageCode|String|Mandatory|Min lenght  - 1, max lenght - 255|Locale and language code of the shop|
|currency|String|Mandatory|Min lenght  - 1, max lenght - 3|Currency codes by country (ISO 4217 standard)|
|timezoneId|Integer|Mandatory|Bigint|Identifier of the timezone|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "uuid": "8e571555-4a73-4cb2-b588-9cb5285795b2",
        "published": true,
        "status": "active",
        "domain": "12345w.dev.myexpress.shop",
        "pendingDomain": "",
        "domainPublished": "fulfilled",
        "domainScope": ".dev.myexpress.shop",
        "shopLanguageCode": "NG-en",
        "currency": "NGN",
        "timezoneId": 31
    }
}
```

## Unpublish store

This operation make the store unavailable for visitors.

> **GET** api/v3/store/unpublish<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/unpublish

### Response example

Empty object returns if user’s store was successfully unpublished

> Status: 200 (OK)

```json
{}
```

## Get languages list

This operation returns the list of system supported languages.

> **GET** api/v3/store/languages<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/languages

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|Array of objects|Mandatory|PHP system limitations|Array of store languages|
|locale|Array of objects|Mandatory|PHP system limitations|ICU, name and localised name for the selected locale|
|icu|String|Mandatory|Min lenght - 1; max lenght - 255|Locale code by ICU standard|
|name|String|Mandatory|Min lenght - 1; max lenght - 255|Locale name|
|localizedName|String|Mandatory|Min lenght - 1; max lenght - 255|Localised locale name|
|country|Array of objects|Mandatory|PHP system limitations|ISO, name and localised name for the selected country|
|iso|String|Mandatory|Min lenght - 1, max lenght - 3|Currency codes by country (ISO 4217 standard)|
|name|String|Mandatory|Min lenght - 1; max lenght - 255|Country name|
|localizedName|String|Mandatory|Min lenght - 1; max lenght - 255|Localised country name|
|code|String|Mandatory|Min lenght - 1; max lenght - 255|Country and language code|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "items": [
            {
                "locale": {
                    "icu": "en",
                    "name": "US",
                    "localizedName": "US"
                },
                "country": {
                    "iso": "NG",
                    "name": "Nigeria",
                    "localizedName": "Nigeria"
                },
                "code": "NG-en"
            }
        ]
    }
}
```
 
## Update store settings

This operation allows to update store settings (separately and in bulk).

> **POST** api/v3/store/update-settings<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|shopLanguageCode|String|Mandatory|Min lenght - 1, max lenght - 255|Locale and language code of the shop|
|currency|String|Mandatory|Min lenght - 1, max lenght - 3|Currency codes by country (ISO 4217 standard)|
|timezoneId|Integer|Mandatory|Bigint|Identifier of the timezone|

#### Request example

> **POST** api/v3/store/update-settings

```json
{
    "data": {
        "shopLanguageCode": "NG-en",
        "currency": "NGN",
        "timezoneId": 31
    }
}
```

### Output

**Response body structure**

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|shopLanguageCode|String|Mandatory|Min lenght - 1, max lenght - 255|Locale and language code of the shop|
|currency|String|Mandatory|Min lenght - 1, max lenght - 3|Currency codes by country (ISO 4217 standard)|
|timezoneId|Integer|Mandatory|Bigint|Identifier of the timezone|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "shopLanguageCode": "NG-en",
        "currency": "NGN",
        "timezoneId": 31
    }
}
```

## Change Own Domain

This operation allows to set own domain for Online shop access.

> **POST** api/v3/store/domain/change/own<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|domain|String|Mandatory|Min leght - 1, max leght - 255|Domain purchased from domain provider|

#### Request example

> **POST** api/v3/store/domain/change/own

```json
{
    "data": {
        "domain": "motors3.com"
    }
}
```

### Output

Empty object returns in case of successful own domain change

#### Response example

> Status: 200 (OK)

```json
{}
```

## Change Sub Domain

This operation allows to set subdomain for Online shop access.

> **POST** api/v3/store/domain/change/sub<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|domain|String|Mandatory|Min leght - 1, max leght - 255|Subdomain set by User<br/>The subdomain can't consist solely of digits. The lenght of the name should be min 3 - max 63 symbols and contain only a-z and 0 - 9 without spaces or special characters (the use of the “-” character is allowed).|

#### Request example

> **POST** api/v3/store/domain/change/own

```json
{
    "data": {
        "domain": "subdomain"
    }
}
```

### Output

Empty object returns in case of successful own domain change

#### Response example

> Status: 200 (OK)

```json
{}
```

## Check Own Domain

This operation performs check if a Store with a similar domain exists.

> **POST** api/v3/store/domain/check/own<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|domain|String|Mandatory|Min leght - 1, max leght - 255|Domain purchased from domain provider|

#### Request example

> **POST** api/v3/store/domain/check/own

```json
{
    "data": {
        "domain": "motors3.com"
    }
}
```

### Output

Empty object returns in case of successful own domain change

#### Response example

> Status: 200 (OK)

```json
{}
```

## Check Sub Domain

This operation performs check if a Store with a similar subdomain exists.

> **POST** api/v3/store/domain/check/sub<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|domain|String|Mandatory|Min leght - 1, max leght - 255|Subdomain set by User<br/>The subdomain can't consist solely of digits. The lenght of the name should be min 3 - max 63 symbols and contain only a-z and 0 - 9 without spaces or special characters (the use of the “-” character is allowed).|

#### Request example

> **POST** api/v3/store/domain/check/sub

```json
{
    "data": {
        "domain": "subdomain"
    }
}
```

### Output

Empty object returns in case of successful own domain change

#### Response example

> Status: 200 (OK)

```json
{}
```

## Cancel domain change

This operation terminates own domain change operation.

> **GET** api/v3/store/domain/change/cancel<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/domain/change/cancel

### Response example

Empty object returns in case of successful own domain check

> Status: 200 (OK)

```json
{}
```

## Get Info

This operation retrieves Online Shop contact info data like:
* contact information:
  * email,
  * phone number,
  * link to Messenger chat,
  * link to WhatsApp chat,
  * link to Telegram chat,
* business address,
* social networks' links.

> **GET** api/v3/store/info<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/info

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|name|String|Mandatory|Min lenght - 1, max lenght - 90|Shop name|
|description|String|Mandatory|Min lenght - 1, max lenght - 150|Shop description|
|contacts|Array of objects|Mandatory|PHP system limitation|Shop contacts key-value pairs|
|contacts.id|Integer|Optional|Bigint|Contact identifier|
|contacts.type|String|Optional|Min lenght - 1, max lenght - 255|Contact type. Possible values: *email, phone number, link to WhatsApp chat, link to Messenger chat, link to Telegram chat*|
|contacts.value|String|Optional|Min lenght - 1, max lenght - 255|Contact value<br/>Every conatact should follow special mask for every type|
|contacts.sortIndex|Integer|Optional|Int|Defines the contact display order|
|useBusinessAddress|Boolean|Mandatory|True, false|Shows if address is re-used from user profile|
|country|String|Mandatory|Min lenght - 1, max lenght - 3|Currency codes by country (ISO 4217 standard)|
|zipPostal|String|Mandatory|Min lenght - 1, max lenght - 16|Zip/postal code|
|city|String|Mandatory|Min lenght - 1, max lenght - 255|Shop city address|
|state|String|Mandatory|Min lenght - 1, max lenght - 255|Shop state/province address|
|address|String|Mandatory|Min lenght - 1, max lenght - 255|Shop address|
|socialLinks|Array of objects|Mandatory|PHP system limitation|Returns shop social links|
|socialLinks.id|Integer|Optional|Bigint|Social link identifier|
|socialLinks.type|String|Optional|Min lenght - 1, max lenght - 255|Social link type. Possible values: *Facebook page, Instagram account, YouTube channel, TikTok, Snapchat and Pinterest*|
|socialLinks.value|String|Optional|Min lenght - 1, max lenght - 255|Social link value<br/>Every conatact should follow special mask for every type|
|socialLinks.sortIndex|Integer|Optional|Int|Defines the social link display order|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "name": "S Motors",
        "description": "We sell scaled metal models of cars in 1/43 scale:car::blue_car::taxi:",
        "contacts": [
            {
                "id": 317,
                "type": "telegram",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 316,
                "type": "messenger",
                "value": "profile.php?id=61553105624306",
                "sortIndex": 2
            },
            {
                "id": 315,
                "type": "email",
                "value": "smsmotors@mail.com",
                "sortIndex": 3
            },
            {
                "id": 314,
                "type": "whatsapp",
                "value": "https://wa.me/115295209250",
                "sortIndex": 4
            },
            {
                "id": 313,
                "type": "phone",
                "value": "+115295209250",
                "sortIndex": 5
            }
        ],
        "useBusinessAddress": false,
        "country": "NG",
        "zipPostal": "224032",
        "city": "Abuja",
        "state": "Capiral Area",
        "address": "Motors avenue 20",
        "socialLinks": [
            {
                "id": 322,
                "type": "pinterest",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 321,
                "type": "snapchat",
                "value": "smsmotors",
                "sortIndex": 2
            },
            {
                "id": 320,
                "type": "tiktok",
                "value": "@ysmsmotors",
                "sortIndex": 3
            },
            {
                "id": 323,
                "type": "youtube",
                "value": "@ysmsmotors",
                "sortIndex": 4
            },
            {
                "id": 319,
                "type": "facebook",
                "value": "profile.php?id=61552880287573",
                "sortIndex": 5
            },
            {
                "id": 318,
                "type": "instagram",
                "value": "ysmsmotors",
                "sortIndex": 6
            }
        ]
    }
}
```

## Update Info

This operation retrieves Online Shop contact info data.

> **POST** api/v3/store/update-info<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include parameters as mentioned in [Get Info output](#output-8)

#### Request example

> **POST** api/v3/store/update-info

```json
{
    "data": {
        "name": "STT Motors",
        "description": "Sell scaled metal models",
        "contacts": [
            {
                "id": 317,
                "type": "telegram",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 316,
                "type": "messenger",
                "value": "profile.php?id=61553105624306",
                "sortIndex": 2
            },
            {
                "id": 315,
                "type": "email",
                "value": "smsmotors@mail.com",
                "sortIndex": 3
            },
            {
                "id": 314,
                "type": "whatsapp",
                "value": "https://wa.me/115295209250",
                "sortIndex": 4
            },
            {
                "id": 313,
                "type": "phone",
                "value": "+115295209250",
                "sortIndex": 5
            }
        ],
        "useBusinessAddress": false,
        "country": "NG",
        "zipPostal": "224032",
        "city": "Abuja",
        "state": "Capiral Area",
        "address": "Motors avenue 20",
        "socialLinks": [
            {
                "id": 322,
                "type": "pinterest",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 321,
                "type": "snapchat",
                "value": "smsmotors",
                "sortIndex": 2
            },
            {
                "id": 320,
                "type": "tiktok",
                "value": "@ysmsmotors",
                "sortIndex": 3
            },
            {
                "id": 323,
                "type": "youtube",
                "value": "@ysmsmotors",
                "sortIndex": 4
            },
            {
                "id": 319,
                "type": "facebook",
                "value": "profile.php?id=61552880287573",
                "sortIndex": 5
            },
            {
                "id": 318,
                "type": "instagram",
                "value": "ysmsmotors",
                "sortIndex": 6
            }
        ]
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include updated entity structure fron input:

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "name": "STT Motors",
        "description": "Sell scaled metal models",
        "contacts": [
            {
                "id": 317,
                "type": "telegram",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 316,
                "type": "messenger",
                "value": "profile.php?id=61553105624306",
                "sortIndex": 2
            },
            {
                "id": 315,
                "type": "email",
                "value": "smsmotors@mail.com",
                "sortIndex": 3
            },
            {
                "id": 314,
                "type": "whatsapp",
                "value": "https://wa.me/115295209250",
                "sortIndex": 4
            },
            {
                "id": 313,
                "type": "phone",
                "value": "+115295209250",
                "sortIndex": 5
            }
        ],
        "useBusinessAddress": false,
        "country": "NG",
        "zipPostal": "224032",
        "city": "Abuja",
        "state": "Capiral Area",
        "address": "Motors avenue 20",
        "socialLinks": [
            {
                "id": 322,
                "type": "pinterest",
                "value": "smsmotors",
                "sortIndex": 1
            },
            {
                "id": 321,
                "type": "snapchat",
                "value": "smsmotors",
                "sortIndex": 2
            },
            {
                "id": 320,
                "type": "tiktok",
                "value": "@ysmsmotors",
                "sortIndex": 3
            },
            {
                "id": 323,
                "type": "youtube",
                "value": "@ysmsmotors",
                "sortIndex": 4
            },
            {
                "id": 319,
                "type": "facebook",
                "value": "profile.php?id=61552880287573",
                "sortIndex": 5
            },
            {
                "id": 318,
                "type": "instagram",
                "value": "ysmsmotors",
                "sortIndex": 6
            }
        ]
    }
}
```

## Update Contacts Order

This operation allows to update contacts display order (to present it in Online Shop).

> **POST** api/v3/store/update-contacts-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|items|Array of objects|Mandatory|Number of items is limited only by PHP logic|
|id|Integer|Mandatory|Contact ID exists in the system|
|sortIndex|Integer|Mandatory|Defines the contact item display order|

#### Request example

> **POST** api/v3/store/update-contacts-order

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

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful contacts' order change.

#### Response example

> Status: 200 (OK)
```json
{}
```

## Get analytics

This operation allows to return Online Shop analytics for the specified period of time.

> **POST** api/v3/store/analytics/get<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|filter|Object|Mandatory|Limited system values|Performs filtration by interval between start date and end date|
|startDate|Date|Mandatory|YYYY-MM-DD|All orders >= startDate (greater or equal)|
|endDate|Date|Mandatory|YYYY-MM-DD|All orders <= endDate (less or equal)|

#### Request example

> **POST** api/v3/store/analytics/get

```json
{
    "data": {
        "filter": {
            "startDate": "2024-01-15", 
            "endDate": "2024-03-22"
        }
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|visitors|Object|Mandatory|PHP system limitations|Shows quantity of visitors of the shop during selected interval|
|visitors.current|Integer|Mandatory|Bigint|Current quantity|
|visitors.previous|Integer|Mandatory|Bigint|Quantity when previous request was made|
|pageViews|Object|Mandatory|PHP system limitations|Shows quantity of page views of the shop during selected
interval|
|pageViews.current|Integer|Mandatory|Bigint|Current quantity|
|pageViews.previous|Integer|Mandatory|Bigint|Quantity when previous request was made|
|orders|Object|Mandatory|PHP system limitations|Shows quantity of orders during selected interval|
|orders.current|Integer|Mandatory|Bigint|Current quantity|
|orders.previous|Integer|Mandatory|Bigint|Quantity when previous request was made|
|totalSales|Object|Mandatory|PHP system limitations|Shows total sum of sales during selected interval|
|totalSales.current|Integer|Mandatory|Bigint|Current total sum|
|totalSales.previous|Integer|Mandatory|Bigint|Total sum when previous request was made|
|topSellingProducts|Array of objects|Mandatory|PHP system limitations|Top selling products during selected interval|
|topSellingProducts.id|Integer|Mandatory|Bigint|Unique identifier of the product|
|topSellingProducts.name|string|Mandatory|Min - 1, max - 255|Product name (with variation)|
|topSellingProducts.quantity|Integer|Mandatory|Bigint|Quantity of sold products|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "visitors": {
            "current": 245,
            "previous": 35
        },
        "pageViews": {
            "current": 1770,
            "previous": 207
        },
        "orders": {
            "current": 36,
            "previous": 9
        },
        "totalSales": {
            "current": 1976186.93,
            "previous": 410822.04
        },
        "topSellingProducts": [
            {
                "id": 91,
                "name": "Ford Escort 1300GT 1969, 2-door sedan",
                "quantity": 9
            },
            {
                "id": 88,
                "name": "Ford Escort 1300GT 1969, estate",
                "quantity": 5
            },
            {
                "id": 114,
                "name": "VAZ 2120 Nadezhda, minivan",
                "quantity": 4
            },
            {
                "id": 110,
                "name": "VAZ 2112",
                "quantity": 4
            },
            {
                "id": 92,
                "name": "Ford Escort 1300GT 1969, 2-door estate",
                "quantity": 3
            }
        ]
    }
}
```

## Get onboarding

This operation returns the current status of onboarding steps completion.

> **GET** api/v3/store/onboarding/get<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/store/onboarding/get

### Output

Success response comes with HTTP code 200 (OK) and include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|productCreated|Boolean|Mandatory|True, false|Shows if user created his first product|
|paymentMethodAdded|Boolean|Mandatory|True, false|Shows if user added first payment method|
|deliveryMethodCreated|Boolean|Mandatory|True, false|Shows if user added first delivery method|
|storePublished|Boolean|Mandatory|True, false|Shows whether user published his shop or not|
|messagingStarted|Boolean|Mandatory|True, false|Shows if user connected messenger to his shop|
|advertisingStarted|Boolean|Mandatory|True, false|Shows if user started ad campaign|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "productCreated": true,
        "paymentMethodAdded": true,
        "deliveryMethodCreated": true,
        "storePublished": true,
        "messagingStarted": true,
        "advertisingStarted": true
    }
}
```

## Update onboarding

This operations allows to update onboarding completion status (the operation is started sequentially and separately after 1st product creation, 1st payment and delivery method activation, shop publication, etc.)

> **GET** api/v3/store/onboarding/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|productCreated|Boolean|Mandatory|True, false|Shows if user created his first product|
|paymentMethodAdded|Boolean|Mandatory|True, false|Shows if user added first payment method|
|deliveryMethodCreated|Boolean|Mandatory|True, false|Shows if user added first delivery method|
|storePublished|Boolean|Mandatory|True, false|Shows whether user published his shop or not|
|messagingStarted|Boolean|Mandatory|True, false|Shows if user connected messenger to his shop|
|advertisingStarted|Boolean|Mandatory|True, false|Shows if user started ad campaign|

#### Request example

> **GET** api/v3/store/onboarding/update

```json
{
    "data": {
        "productCreated": true,
        "paymentMethodAdded": true,
        "deliveryMethodCreated": true,
        "storePublished": true,
        "messagingStarted": true,
        "advertisingStarted": false
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include updated values sent by User (see [Get onboarding response example](#response-example-15))

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "productCreated": true,
        "paymentMethodAdded": true,
        "deliveryMethodCreated": true,
        "storePublished": true,
        "messagingStarted": true,
        "advertisingStarted": false
    }
}
```

