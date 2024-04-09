# FAQ

Used in Online Shop. User is able to set up FAQ section in Online Shop.

- [Get All FAQ items](#get-all-faq-items)
- [Create FAQ item](#create-faq-item)
- [Update FAQ item](#update-faq-item)
- [Update FAQ Items Order](#update-faq-items-order)
- [Delete FAQ items](#delete-faq-items)

## Get All FAQ items

Returns the list of FAQ items.

> **POST** api/v3/faq/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

There is no body needed.

#### Request example

> **POST** api/v3/faq/get-list

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|items|array of objects|Required|10 items max|Empty array returns if no questions added|
|id|integer|Required|bigint|System identifier (auto increment)|
|question|string|Required|Min - 1, max - 160|Value provided by user|
|answer|string|Required|Min - 1, max - 700|Value provided by user|
|sortIndex|integer|Required|int|Identifies displaying order|
|totalPages|integer|Required|int|Number of pages|
|totalItems|integer|Required|int|Number of items|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "items": [
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
       ],
       "totalPages": 1,
       "totalItems": 2
   }
}
```

## Create FAQ item

User is able to create FAQ item to be displayed in Online Shop.

> **POST** api/v3/faq/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|question|string|Required|Min - 1, max - 160|
|answer|string|Required|Min - 1, max - 700|

#### Request example

> **POST** api/v3/faq/create

```json
{
   "data": {
       "question": "question",
       "answer": "answer"
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body structure:

|**Field name**|**Type**|**Requirements**|**Limitations**|**Description**|
|---|---|---|---|---|
|id|integer|Required|bigint|System identifier (auto increment)|
|question|string|Required|Min - 1, max - 160|Value provided by user|
|answer|string|Required|Min - 1, max - 700|Value provided by user|
|sortIndex|integer|Required|int|Identifies displaying order|

#### Response example

> Status: 200 (OK)

```json
{
   "data": {
       "id": 3,
       "question": "question",
       "answer": "answer",
       "sortIndex": 2
   }
}
```

## Update FAQ item

Allows to update existing FAQ item.

> **POST** api/v3/faq/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain followig data:

|**Field name**|**Type**|**Requirements**|**Limitations**|
|---|---|---|---|
|id|integer|Required|System identifier (auto increment)|
|question|string|Required|Min - 1, max - 160|
|answer|string|Required|Min - 1, max - 700|
|sortIndex|integer|Required|int|

#### Request example

> **POST** api/v3/faq/update

```json
{
   "data": {
       "id": 1,
       "question": "question",
       "answer": "answer",
       "sortIndex": 0
   }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include body structure as for [Update FAQ item input](#input-2).

## Update FAQ Items Order

Allows to update FAQ items' display order.

> **POST** api/v3/faq/update-order<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of faqs' ids - order number pairs.<br/>Number of items is limited only by PHP logic|
|id|Integer<br/>(Bigint)|Mandatory|FAQ unique identifier (auto increment)|
|sortIndex|Integer|Mandatory|Defines the item display order|

#### Request example

> **POST** api/v3/faq/update-order

```json
{
   "data": {
       "items": [
           {
               "id": 1,
               "sortIndex": true
           },
           {
               "id": 3,
               "sortIndex": true
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

## Delete FAQ items

Allows to perform FAQ item(s) deletion (separately and in bulk).

> **POST** api/v3/faq/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of faq IDs.<br/>Number of items is limited only by PHP logic|

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


