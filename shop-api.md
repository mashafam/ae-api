# Shop

List of operations for composing Online Shop based on User's configurations.

**Shop common info**
- [Get store uuid by domain](#get-store-uuid-by-domain)
- [Get Auth code](#get-auth-code)
- [Get Access token](#get-access-token)

**Shop sitemap and state**
- [Get sitemap](#get-sitemap)
- [Get Shop state](#get-shop-state)


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
