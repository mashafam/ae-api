# Plugin

Plugins help to improve User experience (both Merchant and Buyer)

- [Get all plugins](#get-all-plugins)
- [Get plugin](#get-plugin)
- [Update plugin status](#update-plugin-status)
- [Update plugin](#update-plugin)

## Get all plugins

### Description

This operation returns list of plugins with connection status.

> **GET** api/v3/plugin/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

There is no body required.

#### Request example

> **GET** api/v3/plugin/get-list

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of Objects|Mandatory|Return list of plugins with connection status<br/>PHP system limitations|
|type|String|Mandatory|Available plugin type:<li> - "reviews",<li/> - "chat_widget",<li> - "google_search_console",<li/> - "google_tag_manager",<li/> - "google_analytics",<li> - "seo_settings"|
|status|String|Mandatory|Indicates status of plugin connection<br/>Possible values: *active, inactive*|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
           {
               "type": "reviews",
               "status": "inactive"
           },
           {
               "type": "chat_widget",
               "status": "inactive"
           },
           {
               "type": "google_search_console",
               "status": "inactive"
           },
           {
               "type": "google_tag_manager",
               "status": "inactive"
           },
           {
               "type": "google_analytics",
               "status": "inactive"
           },
           {
               "type": "seo_settings",
               "status": "inactive"
           }
       ]
   }
}
```

## Get plugin

This operation returns specific plugin details using its slug.

> **GET** api/v3/plugin/get/slug?slug={slug_value}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Path variables**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|slug|String|Mandatory|Slug of plugin (auto increment). Unique amoung all plugins|

**Body parameters**

There is no body required.

#### Request example for Reviews plugin

> **GET** api/v3/delivery/get/slug?slug=reviews

#### Request example for Chat widget plugin

> **GET** api/v3/delivery/get/slug?slug=chat_widget

#### Request example for Google Search Console plugin

> **GET** api/v3/delivery/get/slug?slug=google_search_console

#### Request example for Google Tag Manager plugin

> **GET** api/v3/delivery/get/slug?slug=google_tag_manager

#### Request example for Google Analytics plugin

> **GET** api/v3/delivery/get/slug?slug=google_analytics

#### Request example for SEO settings plugin

> **GET** api/v3/delivery/get/slug?slug=seo_settings

### Output

Success response comes with HTTP code 200 (OK) and include specific body structure for every plugin type:

#### Response example for Reviews plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|reviews|Object|Mandatory|Name of plugin|
|status|String|Mandatory|Indicates plugin activation status<br/>Possible values: *active, inactive*|
|display|Boolean|Mandatory|Indicates plugin visibility in Online Shop|

> Status: 200 (OK)

```json
{
   "data": {
       "reviews": {
           "status": "inactive",
           "display": false
       }
   }
}
```

#### Response example for Chat widget plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|chat_widget|Object|Mandatory|Name of plugin|
|status|String|Mandatory|Indicates plugin activation status<br/>Possible values: *active, inactive*|
|display|Boolean|Mandatory|Indicates plugin visibility in Online Shop|
|customize|Object|Mandatory|Contains plugin customization settings|
|customize.position|String|Mandatory|Defines position of chat icon: *bottomLeft, bottomRight*|
|customize.iconSize|String|Mandatory|Defines size of chat icon: *small, medium, large*|
|customize.iconColor|String|Mandatory|Defines colour of chat icon|
|channels|Array of Objects|Mandatory|Communication channel used as a chat data|
|channels.type|String|Optional|Defines type of channel to add: *"whatsapp", "messenger", "instagram”*|
|channels.value|String|Optional|Defines chat channel identifier<br/>Max lenght - 1000|

> Status: 200 (OK)

```json
{
   "data": {
       "chat_widget": {
           "status": "active",
           "display": true,
           "customize": {
               "position": "bottomRight",
               "iconSize": "medium",
               "iconColor": "#fa2f66"
           },
           "channels": [
               {
                   "type": "whatsapp",
                   "value": "311335329635"
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
   }
}
```

#### Response example for Google Search Console plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_search_console|Object|Mandatory|Name of plugin|
|status|String|Mandatory|Indicates plugin activation status<br/>Possible values: *active, inactive*|
|id|String|Mandatory|Returns Google Search Console id provided by Google<br/>Max lenght - 1000|

> Status: 200 (OK)

```json
{
   "data": {
       "google_search_console": {
           "status": "active",
           "id": "xHl7vNt34ZBOSHizTMNtfVYgm6ItJjlVE7gDlb3A-Mk"
       }
   }
}
```

#### Response example for Google Tag Manager plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_tag_manager|Object|Mandatory|Name of plugin|
|status|String|Mandatory|Indicates plugin activation status<br/>Possible values: *active, inactive*|
|id|String|Mandatory|Returns Google Tag Manager id provided by Google<br/>Max lenght - 1000|

> Status: 200 (OK)

```json
{
   "data": {
       "google_tag_manager": {
           "status": "inactive",
           "id": "GTM-KW6XDMFV"
       }
   }
}
```

#### Response example for Google Analytics plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_analytics|Object|Mandatory|Name of plugin|
|status|String|Mandatory|Indicates plugin activation status<br/>Possible values: *active, inactive*|
|id|String|Mandatory|Returns Google Analytics id provided by Google<br/>Max lenght - 1000|

> Status: 200 (OK)

```json
{
   "data": {
       "google_analytics": {
           "status": "inactive",
           "id": "G-C39TH5G8WG"
       }
   }
}
```

#### Response example for SEO settings plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|seo_settings|Object|Mandatory|Return name of plugin|
|status|String|Mandatory|active, inactive|Indicates active plugin or not|
|product|Object|Mandatory|Returns set of settings for SEO settings for products|
|product.metaTitle|String|Mandatory|Defines pattern for meta title for the products<br/>Max lenght - 90|
|product.metaDescription|String|Mandatory|Defines pattern for meta description for the products<br/>Max lenght - 160|
|collection|Object|Mandatory|Returns set of settings for SEO settings for collections|
|collection.metaTitle|String|Mandatory|Defines pattern for meta title for the collections<br/>Max lenght - 90|
|collection.metaDescription|String|Mandatory|Defines pattern for meta description for the collections<br/>Max lenght - 160|
|homePage|Object|Mandatory|Returns set of settings for SEO settings for home page|
|homePage.metaTitle|String|Mandatory|Defines pattern for meta title for the home page<br/>Max lenght - 90|
|homePage.metaDescription|String|Mandatory|Defines pattern for meta description for the home page<br/>Max lenght - 160|

> Status: 200 (OK)

```json
{
   "data": {
       "seo_settings": {
           "status": "active",
           "product": {
               "metaTitle": "Best {product.name} in your city!",
               "metaDescription": "Byu {product.name} fast with our shop in Nigeria!"
           },
           "collection": {
               "metaTitle": "BUY BEST FROM {collection.name} IN OUR STORE!",
               "metaDescription": "This is great chance to buy {collection.name} in Nigeria!"
           },
           "homePage": {
               "metaTitle": "Skyway",
               "metaDescription": "Buy best goods in our shop for your joy!"
           }
       }
   }
}
```

## Update plugin status

This operation allows to activate (deactivate) specific plugin for Merchant's Online shop.

> **POST** api/v3/plugin/update-status<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Body paramters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|type|String|Mandatory|Available plugin type:<br/> - "reviews",<br/> - "chat_widget",<br/> - "google_search_console",<br/> - "google_tag_manager",<br/> - "google_analytics",<br/> - "seo_settings"|
|status|String|Mandatory|Indicates status of plugin connection<br/>Possible values: *active, inactive*|

#### Request example

> **POST** api/v3/plugin/update-status<br/>

```json
{
   "data": {
       "type": "reviews",
       "status": "inactive"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|type|Object|Mandatory|Plugin type specified in request|
|status|String|Mandatory|Plugin activation status sent in request|
|display|String|Mandatory|Indicates plugin visibility in Online Shop (if applicable)|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "reviews": {
           "status": "inactive",
           "display": false
       }
   }
}
```

## Update plugin

his operation allows to update specific plugin settings.

> **POST** api/v3/plugin/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

#### Request example for Chat widget plugin


**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|chat_widget|Object|Mandatory|Name of plugin|
|settings|Object|Mandatory|Set of setting depending on plugin type|
|settings.display|Boolean|Mandatory|Indicates plugin visibility in Online Shop|
|settings.customize|Object|Mandatory|Contains plugin customization settings|
|settings.customize.position|String|Mandatory|Defines position of chat icon: *bottomLeft, bottomRight*|
|settings.customize.iconSize|String|Mandatory|Defines size of chat icon: *small, medium, large*|
|settings.customize.iconColor|String|Mandatory|Defines colour of chat icon|
|settings.channels|Array of Objects|Mandatory|Communication channel used as a chat data|
|settings.channels.type|String|Optional|Defines type of channel to add: *"whatsapp", "messenger", "instagram”*|
|settings.channels.value|String|Optional|Defines chat channel identifier<br/>Max lenght - 1000|

```json
{
     "data": {
          "settings": {
               "display": true,
               "customize": {
                    "position": "bottomRight",
                    "iconSize": "medium",
                    "iconColor": "#fa2f82"
               },
               "channels": [
                    {
                         "type": "instagram",
                         "value": "aleph"
                    },
                    {
                         "type": "whatsapp",
                         "value": "375296352653"
                    },
                    {
                         "type": "messenger",
                         "value": "aleph"
                    }
               ]
          },
          "type": "chat_widget"
     }
}
```


#### Request example for Google Search Console plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_search_console|Object|Mandatory|Name of plugin|
|settings|Object|Mandatory|Set of setting depending on plugin type|
|settings.id|String|Mandatory|Returns Google Search Console id provided by Google<br/>Max lenght - 1000|

```json
{
     "data": {
          "settings": {
               "id": "xHl7vNt34ZBOSHizTMNtfVYgm6ItJjlVE7gDlb3A-Mk"
          },
          "type": "google_search_console"
     }
}
```

#### Request example for Google Tag Manager plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_tag_manager|Object|Mandatory|Name of plugin|
|settings|Object|Mandatory|Set of setting depending on plugin type|
|settings.id|String|Mandatory|Returns Google Tag Manager id provided by Google<br/>Max lenght - 1000|

```json
{
     "data": {
          "settings": {
               "id": "GTM-KW6XDMFV"
          },
          "type": "google_tag_manager"
     }
}
```

#### Request example for Google Analytics plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|google_analytics|Object|Mandatory|Name of plugin|
|settings|Object|Mandatory|Set of setting depending on plugin type|
|settings.id|String|Mandatory|Returns Google Analytics id provided by Google<br/>Max lenght - 1000|

```json
{
     "data": {
          "settings": {
               "id": "G-C39TH5G8WG"
          },
          "type": "google_analytics"
     }
}
```

#### Request example for SEO settings plugin

**Body parameters**

|**Field name**|**Type**|**Requirements**|**Description**|
|---|---|---|---|
|seo_settings|Object|Mandatory|Return name of plugin|
|settings|Object|Mandatory|Set of setting depending on plugin type|
|settings.product|Object|Mandatory|Returns set of settings for SEO settings for products|
|settings.product.metaTitle|String|Mandatory|Defines pattern for meta title for the products<br/>Max lenght - 90|
|settings.product.metaDescription|String|Mandatory|Defines pattern for meta description for the products<br/>Max lenght - 160|
|settings.collection|Object|Mandatory|Returns set of settings for SEO settings for collections|
|settings.collection.metaTitle|String|Mandatory|Defines pattern for meta title for the collections<br/>Max lenght - 90|
|settings.collection.metaDescription|String|Mandatory|Defines pattern for meta description for the collections<br/>Max lenght - 160|
|settings.homePage|Object|Mandatory|Returns set of settings for SEO settings for home page|
|settings.homePage.metaTitle|String|Mandatory|Defines pattern for meta title for the home page<br/>Max lenght - 90|
|settings.homePage.metaDescription|String|Mandatory|Defines pattern for meta description for the home page<br/>Max lenght - 160|


> Single object “product”, “collection”, “homePage” should be applied to settings.

```json
{
     "data": {
          "settings": {
               "homePage": {
                    "metaTitle": "Skyways",
                    "metaDescription": "Byu best goods in our shop for your joy!"
               }
          },
          "type": "seo_settings"
     }
}
```

### Output

See [Get plugin](#get-plugin) section.


