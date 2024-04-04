# Customer

- [Get Customer](#get-customer)
- [Get all Customers](#get-all-customers)
- [Create Customer](#create-customer)
- [Update Customer](#update-customer)
- [Check if Customer exists](#check-if-customer-exists)
- [Delete Customer](#delete-customer)

## Get Customer

### Description

This operation returns specific Customer info.

> **GET** api/v3/customer/get?id={id}<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

**Query parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer|Mandatory|Customer unique ID. Exists in the system|

#### Request example

> **GET** api/v3/customer/get?id=57

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Customer unique ID. System identifier (auto increment)|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 57,
        "name": "John Doe",
        "phoneNumber": "+12345678",
        "email": "johndoemail@johndoe.com",
        "country": "US",
        "state": "Texas",
        "city": "Austin",
        "zipPostal": "111222",
        "address": "Lorem ave, 1"
    }
}
```

## Get all Customers

### Description

This operation returns the list of all Customers of Merchant' online shop.

> **GET** api/v3/customer/get-list<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body could contain following parameters:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|filter|Object|Optional|searchTerm performs search by name parameter<br/>Limited system values|
|sort|String|Optional|System sorting options<br/>1. id:asc, id:desc,<br/>2. name:asc, name:desc|
|page|Integer<br/>(Bigint)|Optional|Number of the returned page with Customer entity|
|pageSize|Integer<br/>(Bigint)|Optional|Number of Customers records per page|

#### Request example

> **GET** api/v3/customer/get-list

```json
{
    "data": {
        "page": 1,
        "pageSize": 3,
        "filter": {"searchTerm": "John Doe"},
        "sort": "id:desc"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of integers|Mandatory|Array of products matched filter criteria is returned<br/>Php system limitations|
|id|Integer<br/>(Bigint)|Mandatory|Customer unique ID. System identifier (auto increment)|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|
|totalPages|Integer<br/>(Positive integer)|Mandatory|Number of pages in response|
|totalItems|Integer<br/>(Positive integer)|Mandatory|Quantity of Customers in the list|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "items": [
            {
                "id": 57,
                "name": "John Doe",
                "phoneNumber": "+12345678",
                "email": "johndoemail@johndoe.com",
                "country": "US",
                "state": "Texas",
                "city": "Austin",
                "zipPostal": "111222",
                "address": "Lorem ave, 1"
            },
            {
                "id": 10,
                "name": "George West",
                "phoneNumber": "+134525551",
                "email": "gwest@coherent.com",
                "country": "UK",
                "state": "London",
                "city": "London",
                "zipPostal": "123456",
                "address": "East End 77"
            }
        ],
        "totalPages": 1,
        "totalItems": 2
    }
}
```

## Create Customer

### Description

This operation allows to retrieve specific product.

> **POST** api/v3/customer/create<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body should contain following parameters:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|

#### Request example

> **POST** api/v3/customer/create

```json
{
    "data": {
        "name": "John Doe",
        "phoneNumber": "+12345678",
        "email": "johndoemail@johndoe.com",
        "country": "US",
        "state": "Texas",
        "city": "Austin",
        "zipPostal": "111222",
        "address": "Lorem ave, 1"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Customer unique ID. System identifier (auto increment)|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "id": 57,
        "name": "John Doe",
        "phoneNumber": "+12345678",
        "email": "johndoemail@johndoe.com",
        "country": "US",
        "state": "Texas",
        "city": "Austin",
        "zipPostal": "111222",
        "address": "Lorem ave, 1"
    }
}
```

## Update Customer

### Description

This operation allows to retrieve specific product.

> **POST** api/v3/customer/update<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body should contain following parameters:

**Body parameters**

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Customer unique ID. System identifier (auto increment)|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|

#### Request example

> **POST** api/v3/customer/update

```json
{
    "data": {
        "name": "Leo Doe",
        "phoneNumber": "+132145678",
        "email": "johndoe11mail@johndoe.com"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|id|Integer<br/>(Bigint)|Mandatory|Customer unique ID. System identifier (auto increment)|
|name|String|Mandatory|Customer name<br/>Min length - 1, max length - 1024|
|phoneNumber|String|Mandatory|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|
|email|String|Optional|Customer email<br/>Max 64 symbols including "@" sign and domain|
|country|String|Optional|Customer country<br/>Min length - 1, max length - 255|
|city|String|Optional|Customer city/town<br/>Min length - 1, max length - 255|
|state|String|Optional|Customer state/region<br/>Min length - 1, max length - 255|
|zipPostal|String|Optional|Customer postal code<br/>Min length - 1, max length - 16|
|address|String|Optional|Customer address<br/>Min length - 1, max length - 1024|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "name": "Leo Doe",
        "phoneNumber": "+132145678",
        "email": "johndoe11mail@johndoe.com",
        "country": "US",
        "state": "Texas",
        "city": "Austin",
        "zipPostal": "111222",
        "address": "Lorem ave, 1"
    }
}
```

## Check if Customer exists

### Description

This operation performs check if Customer exists by his phone number.

> **POST** api/v3/customer/exists<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request body should contain following parameters:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|phoneNumber|String|Required|Customer phone number<br/>Max 16 symbols including "+" sign and phone mask|

#### Request example

> **POST** api/v3/customer/exists

```json
{
    "data": {
        "phoneNumber": "+375336706708"
    }
}
```

### Output

Success response comes with HTTP code 200 (OK) and include following body stucture:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|customerId|Integer<br/>(Bigint)|Required|Customer unique identifier|

#### Response example

> Status: 200 (OK)

```json
{
    "data": {
        "customerId": 57
    }
}
```

## Delete Customer

### Description

This operation performs product deletion. Also can be used for bulk deletion.

> **POST** api/v3/customer/delete<br/>
> **Authorization:** Bearer<br/>
> **Content-type**: application/json

### Input

Request should contain body with following content:

|**Attribute Name**|**Type**|**Behavior**|**Description**|
|---|---|---|---|
|items|Array of objects|Mandatory|Contains the array of customers' IDs.<br/>Number of items is limited only by PHP logic|

#### Request example

> **POST** api/v3/customer/delete

```json
{
    "data": {
        "items": [49, 50]
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