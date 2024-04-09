# Themes

Themes are using to customize the Online shop instantly with pre-defines set theme.

- [Get all themes](#get-all-themes)
- [Apply theme](#apply-theme)

## Get All Themes

Returns the full list of the pre-defined (system) themes provided by Aleph Express.

> **GET** api/v3/theme/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Request example

> **GET** api/v3/theme/get-list

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|Array of objects|Required|Number of objects is limited only by PHP logic|All available themes|
|id|integer|Required|Bigint|Unique identifier of a theme|
|name|string|Required|Min - 1, max - 50|Theme name|
|image|string (url)|Required|Min - 1; max - 255|Theme image|
|configFile|string|Required|Min - 1, max - 255|Theme config file|
|applied|boolean|Required|True, false|Shows if theme is applied to the shop or not|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "items": [
            {
                "id": 1,
                "name": "Basic",
                "image": "https://static.alephexpress.com/api/file/get/default/basic-min.jpg",
                "configFile": "themes/basic.json",
                "applied": false
            },
            {
                "id": 2,
                "name": "Black",
                "image": "https://static.alephexpress.com/api/file/get/default/black-min.jpg",
                "configFile": "themes/black.json",
                "applied": false
            },
            {
                "id": 3,
                "name": "Colorblock",
                "image": "https://static.alephexpress.com/api/file/get/default/colorblock-min.jpg",
                "configFile": "themes/colorblock.json",
                "applied": false
            },
            {
                "id": 4,
                "name": "Prestige",
                "image": "https://static.alephexpress.com/api/file/get/default/prestige-min.jpg",
                "configFile": "themes/prestige.json",
                "applied": false
            }
        ]
    }
}
```

## Apply Theme

Allows to apply selected theme config to User's Online shop.

> **POST** api/v3/theme/apply<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could include following parameters:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|Bigint|Unique identifier of a theme|

#### Request example

> **GET** api/v3/theme/get-list

```json
{
    "data": {
        "id": 1
    }
}
```

### Response 

Success response comes with HTTP code 200 (OK). Empty object returns in case of successful theme applying