# Shop

List of operations for composing Online Shop based on User's configurations.

**Shop common info**
- [Get store uuid by domain](#get-store-uuid-by-domain)
- [Get Auth code](#get-auth-code)
- [Get Access token](#get-access-token)

**Shop sitemap and state**
- [Get sitemap](#get-sitemap)
- [Get Shop state](#get-shop-state)

**Shop config**
- [Get shop configuration](#get-shop-configuration)
- [Update shop configuration](#update-shop-config)

**Plugins and pages**
- [Get page by slug](#get-page-by-slug)
- [Get Shop Plugins](#get-shop-plugins)

**Products**
- [Get main products](#get-main-products)
- [Get products list](#get-products-list)
- [Get related products](#get-related-products)
- [Get product entries](#get-product-entries)
- [Get full product information by slug](#get-full-product-information-by-slug)

**FAQ**
- [Get all FAQ items](#get-all-faq-items)

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


## Get store uuid by domain

Returns store uuid by domain to pull in the appropriate Online shop config.

> **GET** api/v3/shop/uuid<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: Domain 

### Request example

> **GET** api/v3/shop/uuid<br/>
> **Header**: Domain = 1921.dev.myexpress.shop

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|uuid|string|Required|UUID4|Shop identifier, used as a header in shop requests|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "uuid": "398ee2b0-5a61-4e84-8e84-813fe6eb77dd"
   }
}
```

## Get Auth Code

Allows to get authentication code to access the shop.

> **POST** api/v3/shop/auth/code<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **POST** api/v3/shop/auth/code

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|code|string|Required|Min - 1, max - 255|Authentication code of the shop|

#### Response example

> Status: 200 (OK)


```json
{
    "data": {
        "code": "c65328cb49a2a26dadab5db5f763d713b2877a41"
    }
}
```

## Get Access token

This operation returns access token via auth code using to access Online shop.

> **POST** api/v3/shop/auth/token<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Following parameters should be sent:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|code|string|Required|Min - 1, max - 255|Authentication code of the shop|

#### Request example

> **POST** api/v3/shop/auth/code

```json
{
   "data": {
       "code": "e1231b4702922bc874a6972b212ef0d6f564b390"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) with following structure:



#### Response example

> Status: 200 (OK)


```json
{
    "data": {
        "code": "c65328cb49a2a26dadab5db5f763d713b2877a41"
    }
}
```

## Get Sitemap

Retrieves sitemap entities of particular Online shop.

> **GET** api/v3/shop/sitemap/get<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: Uuid = {shop_uuid}

### Input

Request body could include following data:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|type|string|Required|'index', 'products', 'pages', 'static_pages', 'collections'|Predefined types of sitemap entities|
|page|integer|Required|integer|Page id, used if number if items more then 150|

#### Request example

> **GET** api/v3/shop/sitemap/get
> **Header**: Uuid = {shop_uuid}

```json
{
   "data": {
       "type": "pages",
       "page": 1
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) with sitemap xml data

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "sitemap": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\r\n\t<sitemap>\r\n\t\t<loc>https://1921.dev.myexpress.shop/sitemap/static_pages/1.xml</loc>\r\n\t\t</sitemap>\r\n\t<sitemap>\r\n\t\t<loc>https://1921.dev.myexpress.shop/sitemap/pages/1.xml</loc>\r\n\t\t</sitemap>\r\n\t<sitemap>\r\n\t\t<loc>https://1921.dev.myexpress.shop/sitemap/collections/1.xml</loc>\r\n\t\t</sitemap>\r\n\t<sitemap>\r\n\t\t<loc>https://1921.dev.myexpress.shop/sitemap/products/1.xml</loc>\r\n\t\t</sitemap>\r\n</sitemapindex>"
   }
}
```

## Get Shop state

Returns Online shop complex data like: contact details, business data, static pages, delivery and payment options and other data config.

> **GET** api/v3/shop/<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**: Uuid = {shop_uuid}

### Request example

> **GET** api/v3/shop/state<br/>
> **Header**: Uuid = {shop_uuid}

### Output

Success response comes with HTTP code 200 (OK) with following data:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|published|boolean|Require|boolean|Indicates if shop is visible for merchants|
|language|string|Require|System language code|Defines language of the shop|
|adminLanguage|string|Require|System language code|Defines language of the admin panel|
|currency|string|Require|ISO code|Defines shop currency|
|createdAt|string|Require|Datetime format|Defines date when shop was created|
|info|object|Require|Php system limitation|Contains information about shop and business|
|info.registeredBusiness|boolean|Require|boolean|Defines if business have official registration|
|info.registeredBusinessName|string|Require|Min - 1, max 512|Business name, empty string if not provided|
|info.registeredBusinessBin|string|Require|Min - 1, max 64|Business identifier, empty string if not provided|
|info.ownerName|string|Require|Min - 1, max 1024|Admin user name from profile|
|info.ownerEmail|string|Require|Min - 1, max 64|Admin email from profile|
|info.name|string|Require|Min - 1, max 90|Shop name from shop info|
|info.description|string|Require|Min - 1, max 150|Shop description from shop info|
|info.contacts|array of objects|Require|Php system limitation|List of shop contacts from shop info, empty array if contacts not added|
|contacts.type|string|Optional|*'phone', 'email', 'messenger', 'whatsapp', 'telegram'*|Predefined enum of contacts|
|contacts.value|string|Optional|Min - 1, max 255|Contact value, depends on type|
|contactAddress|object|Required|-|Contains shop address data provided in shop info|
|contactAddress.country|string|Required|Country code|Country from business profile|
|contactAddress.zipPostal|string|Required|Min - 1, max 16|Postal code provided by user|
|contactAddress.city|string|Required|Min - 1, max 255|City provided by user|
|contactAddress.state|string|Required|Min - 1, max 255|State provided by user|
|contactAddress.address|string|Required|Min - 1, max 255|Address provided by user|
|country|string|Required|Country code|Country from business profile|
|zipPostal|string|Required|Min - 1, max 16|Postal code provided by user in business profile|
|city|string|Required|Min - 1, max 255|City provided by user in business profile|
|state|string|Required|Min - 1, max 255|State provided by user in business profile|
|address|string|Required|Min - 1, max 1024|Address provided by user in business profile|
|socialLinks|Array of objects|Required|Php system limitation|List of shop social links from shop info, empty array if social links not added|
|socialLinks.type|string|Optional|*'facebook', 'instagram', 'youtube', 'tiktok', 'snapchat', 'pinterest'*|Predefined enum of social links|
|socialLinks.value|string|Optional|Min - 1, max 255|Social link value, depends on type|
|collections|array of objects|Required|Php system limitation|Return array of existing collection that has assigned products, empty array returned if no collections added|
|collections.id|integer|Required|binint|Collection id|
|collections.slug|string|Required|Min - 1, max 255|Collection URI|
|collections.name|string|Required|Min - 1, max 255|Collection name|
|collections.image|string|Required|Min - 1, max 255|Collection image URL|
|collections.sortIndex|integer|Required|integer|Identifies collection displaying order|
|collections.showOnMain|boolean|Required|boolean|Indicates displaying of collection on the main page|
|collections.metaTitle|string|Required|Min - 1, max 90|Collection meta title if SEO plugin activated, null if not activated|
|collections.metaDescription|string|Required|Min - 1, max 160|Collection meta description if SEO plugin activated, null if not activated|
|staticPages|array of objects|Required|Php system limitation|Returns list of shop pages|
|staticPages.id|integer|Required|Bigint|Page id|
|staticPages.slug|string|Required|Min - 1, max 255|Page URI|
|staticPages.isVisible|boolean|Required|boolean|Indicates page displaying status|
|staticPages.name|integer|Required|Min - 1, max 255|Page name|
|staticPages.sortIndex|integer|Required|int|Indicates page displaying order|
|staticPages.type|integer|Required|*'custom', 'contacts', 'payment', 'delivery','about-us','terms-and-conditions', 'privacy-policy'*|Defines type of the page, user page are created with “custom" type|
|deliveries|array of objects|Required|Php system limitation|Returns list of available delivery methods, empty array if not created|
|deliveries.id|integer|Required|bigint|Delivery method id|
|deliveries.type|string|Required|*“pickup”, “delivery”, “shiip”*|Delivery method type, predefined list|
|deliveries.name|string|Required|Min - 1, max 255|Delivery method name|
|deliveries.price|string|Required|Max 18, numeric|Delivery method price|
|deliveries.useBusinessAddress|boolean|Required|boolean|Defines if delivery address for pickup type matches with business profile address|
|deliveries.description|string|Required|Min - 1, max 255|Delivery method description|
|deliveries.isGlobal|boolean|Required|boolean|Defines if delivery is of global type|
|deliveries.country|string|Required|Country code|Delivery method country, for pickup type|
|​​deliveries.zipPostal|string|Required|Min - 1, max 16|Delivery method postal code, for pickup type|
|deliveries.city|string|Required|Min - 1, max 255|Delivery method city, for pickup type|
|deliveries.state|string|Required|Min - 1, max 255|Delivery method state, for pickup type|
|deliveries.address|string|Required|Min - 1, max 1024|Delivery method address, for pickup type|
|paymentMethods|array of objects|Required|Php system limitation|Returns list of available payment methods, empty array if not added|
|paymentMethods.id|integer|Required|int|Payment method id|
|paymentMethods.name|string|Required|Min - 1, max 255|Payment method name|
|paymentMethods.description|string|Required|Min - 1, max 255|Payment method description|
|paymentMethods.type|string|Required|*'cash', 'custom', 'paystack', 'pos', 'banking_account_transfer'*|Payment method type|
|paymentMethods.connected|boolean|Required|boolean|Payment method connection status, defines availability of the payment method|
|paymentMethods.sortIndex|integer|Required|int|Payment method sortIndex, defines displaying order of the payment method|
|paymentMethods.image|string|Required|Min - 1, max 255|Payment method image|
|pixelId|string|Required|Max- 64|Facebook pixel id for connected advertising, null if not connected|
|homePage|object|Required|Php system limitation|Return home page meta title and meta description, if SEO plugin is activated|
|homePage.metaTitle|string|Required|Min - 1, max 90|Return home page meta title, if SEO plugin is activated|
|homePage.metaDescription|string|Required|Min - 1, max 255|Return home page meta description, if SEO plugin is activated|

#### Response example

> Status: 200 (OK)

<details>
  <summary>Expand to see response body</summary>

```json
{
   "data": {
       "published": false,
       "language": "en",
       "adminLanguage": "en",
       "currency": "NGN",
       "createdAt": "2024-03-18 10:22:03",
       "info": {
           "registeredBusiness": false,
           "registeredBusinessName": "",
           "registeredBusinessBin": "",
           "registeredBusinessTaxId": "",
           "ownerName": "",
           "ownerEmail": "denis.narubin+que10@skystart.team",
           "name": "Test one two",
           "description": "My first store",
           "contacts": [
              {
                   "type": "telegram",
                   "value": "aleph"
               }
            ],
           "contactAddress": {
               "country": "NG",
               "zipPostal": "",
               "city": "",
               "state": "",
               "address": ""
           },
           "country": "NG",
           "zipPostal": "",
           "city": "",
           "state": "",
           "address": "",
           "socialLinks": [
               {
                   "type": "instagram",
                   "value": "aleph"
               }
            ]
       },
       "collections": [
           {
               "id": 2,
               "slug": "cars",
               "name": "Cars",
               "image": "",
               "sortIndex": 4,
               "showOnMain": false,
               "metaTitle": null,
               "metaDescription": null
           },
           {
               "id": 1,
               "slug": "clothes",
               "name": "Clothes",
               "image": "img.jpg",
               "sortIndex": 3,
               "showOnMain": true,
               "metaTitle": null,
               "metaDescription": null
           }
       ],
       "staticPages": [
           {
               "id": 11,
               "slug": "name-page-4",
               "isVisible": false,
               "name": "name page",
               "sortIndex": 10,
               "type": "custom"
           }
       ],
       "deliveries": [
            {
               "id": 5,
               "type": "pickup",
               "name": "Quick Delivery",
               "price": "18.00",
               "useBusinessAddress": false,
               "description": "Quick delivery",
               "isGlobal": false,
               "country": "",
               "zipPostal": "",
               "city": "",
               "state": "",
               "address": ""
           },
           {
               "id": 4,
               "type": "delivery",
               "name": "Quick Delivery",
               "price": "18.00",
               "useBusinessAddress": true,
               "description": "Quick delivery",
               "isGlobal": true,
               "country": "NG",
               "zipPostal": "",
               "city": "",
               "state": "",
               "address": ""
           }      
       ],
       "paymentMethods": [
           {
               "id": 1,
               "name": "Cash on Delivery",
               "description": "Customers pay cash when receiving a product",
               "type": "cash",
               "connected": true,
               "sortIndex": 0,
               "image": ""
           }
       ],
       "pixelId": "",
       "homePage": {
           "metaTitle": null,
           "metaDescription": null
       }
   }
}
```


## Get shop configuration

Allows to get a shop in set configuration to represent its appearance.

> **GET** api/v3/shop/config<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Header parameter**

> uuid = {shop_uuid}

#### Request example

> **GET** api/v3/shop/config

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirement**|**Limitations**|**Description**|
|---|---|---|---|---|
|theme|object|Required|Php system limitation|Configuration for common display settings of the shop|
|theme.btnColor|string|Required|HEX colour, lenght min - 3, max - 11|Colour of the buttons, active elements, links, etc.|
|theme.bgImage|string|Required|Max - 255|Image url for the background image|
|theme.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Background of all shop|
|theme.useBgImage|boolean|Required|boolean|Indicates weather background image is used|
|theme.fontSize|integer|Required|14 - 18|Basic size of the shop font|
|theme.bgImageOpacity|double|Required|0 - 1|Opacity of the background image|
|theme.adultPopup|boolean|Required|boolean|Activate age confirmation popup|
|theme.adultPopupTitle|string|Required|Max - 60|Title for age confirmation popup|
|theme.adultPopupDescription|string|Required|Max - 255|Description for age confirmation popup|
|theme.cookiePopup|boolean|Required|boolean|Activate cookie confirmation popup|
|theme.favicon|string|Required|Max - 255|URL for shop favicon|
|theme.headingFont|string|Required|'Roboto', 'Montserrat', 'Lato', 'Oswald', 'PT Sans', 'Playfair Display', 'Source Sans Pro'|Font of the headers|
|theme.paragraphFont|string|Required|'Roboto', 'Montserrat', 'Lato', 'Oswald', 'PT Sans', 'Playfair Display', 'Source Sans Pro'|Font of the paragraphs|
|header|object|Required|Php system limitation|Configuration for header of the shop|
|header.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Header background color|
|header.logoSize|integer|Required|1 - 5|Relative size of the logo|
|header.logoFont|string|Required|'Roboto', 'Montserrat', 'Lato', 'Oswald', 'PT Sans', 'Playfair Display', 'Source Sans Pro'|Header text logo font|
|header.logoFontColor|string|Required|HEX colour, lenght min - 3, max - 11|Header text logo color|
|header.logoImageUrl|string|Required|Max - 255|URL on image for shop logo, empty string if not provided|
|header.logoTextValue|string|Required|Max - 60|Text for shop logo, empty string if not provided|
|header.searchDisplayMode|string|Required|“icon”, ”bar”|Type for search bar displaying|
|footer|object|Required|Php system limitation|Configuration for footer of the shop|
|footer.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Footer background color|
|mainProducts|object|Required|Php system limitation|Configuration for Main products section on the main page of the shop|
|mainProducts.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Main products section background color|
|mainProducts.title|string|Required|Max - 60|Main products section title text color|
|mainProducts.collectionId|integer|Required|int|Collection id to display products in main products section, null returned if not provided|
|mainProducts.slider|boolean|Required|boolean|Not used|
|mainProducts.aspectRatio|string|Required|'1:1', '4:3', '3:4'|Defines image size representation on Main products section|
|mainProducts.oneClick|boolean|Required|boolean|Activates by in one click option of the product cart|
|mainCollections|object|Required|Php system limitation|Configuration for Main collections section on the main page of the shop|
|mainCollections.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Main collections section background color|
|mainCollections.slider|boolean|Required|boolean|Not used|
|mainCollections.aspectRatio|string|Required|'1:1', '4:3', '3:4'|Defines image size representation on Main collections section|
|homeSections|array of objects|Required|Php system limitation|Configuration for sections on the main page of the shop|
|homeSections.type|string|Required|"slider", "products", "collections", "textAndImage", "video", "faq"|Type of system available section|
|homeSections.sortable|boolean|Required|boolean|Indicates if position of the section on the main page could be changed|
|homeSections.active|boolean|Required|boolean|Defines is section activated and visible|
|slider|object|Required|Php system limitation|Configuration for slider section on the main page of the shop|
|slider.stretchedImage|boolean|Required|boolean|If true, slider image is stretched on the screen wides|
|slider.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Slider section background color|
|textAndImage|object|Required|Php system limitation|Configuration for “Text and Image” section on the main page of the shop|
|textAndImage.image|string|Required|Max - 255|Image URL|
|textAndImage.title|string|Required|Max - 60|Title for the section|
|textAndImage.description|string|Required|Max - 1000|Description for the section|
|textAndImage.imagePosition|string|Required|'left', right'|Defines image position relative to text|
|textAndImage.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|“Text and Image” section background color|
|mainVideo|object|Required|Php system limitation|Configuration for “Video” section on the main page of the shop|
|mainVideo.youTubeUrl|string|Required|Valid youtube link|Youtube video link URL|
|mainVideo.title|string|Required|Max - 60|Title for the section|
|mainVideo.description|string|Required|Max - 1000|Description for the section|
|mainVideo.videoPosition|string|Required|'left', 'center', 'right'|Defines video frame position|
|mainVideo.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|Video section background color|
|faq|object|Required|Php system limitation|Configuration for “FAQ” section on the main page of the shop|
|faq.title|string|Required|Max - 60|Title for the section|
|faq.description|string|Required|Max - 255|Description for the section|
|faq.position|string|Required|'left', 'center'|Defines position of the questions list of the section|
|faq.bgColor|string|Required|HEX colour, lenght min - 3, max - 11|FAQ section background color|
|catalogSection|object|Required|Php system limitation|Configuration for “Catalog” section on the main page of the shop|
|catalogSection.aspectRatio|string|Required|'1:1', '4:3', '3:4'|Defines image size representation on Catalog section|
|catalogSection.useBorders|boolean|Required|boolean|Apply border for product image in catalog|
|catalogSection.displayMode|string|Required|'smallTiles', 'largeTiles', 'combined'|Defines products images grouping in the Catalog section|
|catalogSection.showAddToCard|boolean|Required|boolean|Activates “Add to cart” button on the product cart in Catalog section|
|catalogSection.stretchedImage|boolean|Required|boolean|Apply setting to stretch product image on the to fit image placeholder size|

#### Response example

> Status: 200 (OK)

<details>
  <summary>Expand to see response body</summary>

```json
{
   "data": {
       "theme": {
           "btnColor": "#000000",
           "bgImage": "",
           "bgColor": "#F2F4F7",
           "useBgImage": true,
           "fontSize": 16,
           "bgImageOpacity": 0,
           "adultPopup": false,
           "adultPopupTitle": "Warning! Adult content!",
           "adultPopupDescription": "You must be older than 18 years old to watch our stuff",
           "cookiePopup": true,
           "favicon": "https://static.alephexpress.com/api/file/get/default/logo-shop.svg",
           "headingFont": "Roboto",
           "paragraphFont": "Roboto"
       },
       "header": {
           "bgColor": "#FFFFFF",
           "logoSize": 2,
           "logoFont": "Montserrat",
           "logoFontColor": "#000000",
           "logoImageUrl": "https://static.alephexpress.com/api/file/get/default/logo-shop.svg",
           "logoTextValue": "Shop Brand",
           "searchDisplayMode": "icon"
       },
       "footer": {
           "bgColor": "#FFFFFF"
       },
       "mainProducts": {
           "bgColor": "transparent",
           "title": "Popular Products",
           "collectionId": null,
           "slider": false,
           "aspectRatio": "3:4",
           "oneClick": false
       },
       "mainCollections": {
           "bgColor": "transparent",
           "slider": false,
           "aspectRatio": "3:4"
       },
       "homeSections.items": [
           {
               "type": "slider",
               "sortable": false,
               "active": true
           },
           {
               "type": "products",
               "sortable": true,
               "active": true
           },
           {
               "type": "collections",
               "sortable": true,
               "active": true
           },
           {
               "type": "textAndImage",
               "sortable": true,
               "active": false
           },
           {
               "type": "video",
               "sortable": true,
               "active": false
           },
           {
               "type": "faq",
               "sortable": true,
               "active": false
           }
       ],
       "slider": {
           "stretchedImage": false,
           "bgColor": "#F2F4F7"
       },
       "textAndImage": {
           "image": null,
           "title": null,
           "description": null,
           "imagePosition": "left",
           "bgColor": "#F2F4F7"
       },
       "mainVideo": {
           "youTubeUrl": null,
           "title": null,
           "description": null,
           "videoPosition": "center",
           "bgColor": "#F2F4F7"
       },
       "faq": {
           "title": null,
           "description": null,
           "position": "center",
           "bgColor": "#F2F4F7"
       },
       "catalogSection": {
           "aspectRatio": "3:4",
           "useBorders": false,
           "displayMode": "smallTiles",
           "showAddToCard": false,
           "stretchedImage": true
       }
   }
}
```
</details>

## Update shop config

Allows to update a shop set configuration to represent its appearance.

> **POST** api/v3/shop/update-config<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Header parameter**

> uuid = {shop_uuid}

Every section (entity) presented below contains whole list of parameters that can be updated for specific enitity.

#### Update main theme - example

```json
{
   "data": {
       "theme": {
           "btnColor": "#000000",
           "bgImage": "",
           "bgColor": "#F2F4F7",
           "useBgImage": true,
           "fontSize": 16,
           "bgImageOpacity": 0,
           "adultPopup": false,
           "adultPopupTitle": "Warning! Adult content!",
           "adultPopupDescription": "You must be older than 18 years old to watch our stuff",
           "cookiePopup": true,
           "favicon": "https://static.alephexpress.com/api/file/get/default/logo-shop.svg",
           "headingFont": "Roboto",
           "paragraphFont": "Roboto"
       }
   }
}
```
#### Update header config - example

```json
{
   "data": {
       "header": {
           "bgColor": "#FFFFFF",
           "logoSize": 2,
           "logoFont": "Montserrat",
           "logoFontColor": "#000000",
           "logoImageUrl": "https://static.alephexpress.com/api/file/get/default/logo-shop.svg",
           "logoTextValue": "Shop Brand",
           "searchDisplayMode": "icon"
       }
   }
}
```

#### Update footer config - example

```json
{
   "data": {
       "footer": {
           "bgColor": "#FFFFFF"
       }
   }
}
```

#### Update main products section config - example

```json
{
   "data": {
       "mainProducts": {
           "bgColor": "transparent",
           "title": "Popular Products",
           "collectionId": null,
           "slider": false,
           "aspectRatio": "3:4",
           "oneClick": false
       }
   }
}
```

#### Update collections section config - example

```json
{
   "data": {
    "mainCollections": {
           "bgColor": "transparent",
           "slider": false,
           "aspectRatio": "3:4"
       }
   }
}
```

#### Update slider config - example

```json
{
   "data": {
      "slider": {
           "stretchedImage": false,
           "bgColor": "#F2F4F7"
       }
   }
}
```

#### Update text and image setcion config - example

```json
{
   "data": {
   "textAndImage": {
           "image": null,
           "title": null,
           "description": null,
           "imagePosition": "left",
           "bgColor": "#F2F4F7"
       }
   }
}
```

#### Update video section config - example

```json
{
   "data": {
    "mainVideo": {
           "youTubeUrl": null,
           "title": null,
           "description": null,
           "videoPosition": "center",
           "bgColor": "#F2F4F7"
       }
   }
}
```

#### Update FAQ section config - example

```json
{
   "data": {
       "faq": {
           "title": null,
           "description": null,
           "position": "center",
           "bgColor": "#F2F4F7"
       }
   }
}
```

#### Update catalog section config - example

```json
{
   "data": {
       "catalogSection": {
           "aspectRatio": "3:4",
           "useBorders": false,
           "displayMode": "smallTiles",
           "showAddToCard": false,
           "stretchedImage": true
       }
   }
}
```

For properties description see [Get shop configuration](#output-1) definition

## Get Page by slug

Retrieves Online shop page data set by its slug.

> **GET** api/v3/shop/page/get/{slug}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**:  Uuid = {shop_uuid}

### Request example

> **GET** api/v3/shop/page/get/name-page<br/>
> **Header**:  Uuid = {shop_uuid}

### Output

Success response comes with HTTP code 200 (OK) with following structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|string|Required|Number of objects is limited only by PHP logic|Page id|
|slug|string|Required|Max - 255|Page URI|
|isVisible|boolean|Required|boolean|Indicates page visibility on shop|
|name|string|Required|Max - 255|Page name|
|description|string|Required|Max - 16B|Page description (content)|
|sortIndex|integer|Required|int|Page displaying order|
|type|string|Required|*'custom', 'contacts', 'payment', 'delivery','about-us','terms-and-conditions', 'privacy-policy'*|Defines type of the page, user page are created with “custom" type|
|config|object|Required|Number of objects is limited only by PHP logic|Configuration for system pages|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 7,
       "slug": "name-page",
       "isVisible": true,
       "name": "name page",
       "description": "description",
       "sortIndex": 6,
       "type": "custom",
       "config": null
   }
}
```

## Get Shop Plugins

Retrieves Online shop plugins' data set.

> **GET**  api/v3/shop/plugins/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json<br/>
> **Header**:  Uuid = {shop_uuid}

### Request example

> **GET**  api/v3/shop/plugins/get-list<br/>
> **Header**:  Uuid = 398ee2b0-5a61-4e84-8e84-813fe6eb77dd

### Output

Success response comes with HTTP code 200 (OK) with body (for properties description see [Get Plugin](../ae-api/plugin-api.md) definition)

#### Response example

> Status: 200 (OK)

<details>
  <summary>Expand to see response body</summary>

```json
{
   "data": {
       "items": [
           {
               "type": "reviews",
               "status": "inactive",
               "settings": {
                   "display": false
               }
           },
           {
               "type": "chat_widget",
               "status": "active",
               "settings": {
                   "display": true,
                   "customize": {
                       "position": "bottomRight",
                       "iconSize": "medium",
                       "iconColor": "#fa2f66"
                   },
                   "channels": [
                       {
                           "type": "whatsapp",
                           "value": "375335329635"
                       },
                       {
                           "type": "messenger",
                           "value": "isks"
                       },
                       {
                           "type": "instagram",
                           "value": "aleph"
                       }
                   ]
               }
           },
           {
               "type": "google_search_console",
               "status": "inactive",
               "settings": {
                   "id": ""
               }
           },
           {
               "type": "google_tag_manager",
               "status": "active",
               "settings": {
                   "id": "GTM-cvvvvt"
               }
           },
           {
               "type": "google_analytics",
               "status": "inactive",
               "settings": {
                   "id": ""
               }
           },
           {
               "type": "seo_settings",
               "status": "inactive",
               "settings": {
                   "product": {
                       "metaTitle": "{product.name}",
                       "metaDescription": "{product.name}"
                   },
                   "collection": {
                       "metaTitle": "{collection.name}",
                       "metaDescription": "{collection.name}"
                   },
                   "homePage": {
                       "metaTitle": "Test one two",
                       "metaDescription": "My first store"
                   }
               }
           }
       ]
   }
}
```
</details>

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

### ### Output

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