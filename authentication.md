# OAuth 2.0 API Documentation 

## Introduction

Welcome to the OAuth 2.0 API Documentation for the Aleph Express API. This document provides guidelines on how to authenticate and authorize access to the Aleph Express API using OAuth 2.0.

## Overview

The OAuth 2.0 API allows third-party applications to obtain limited access to an HTTP service, either on behalf of a resource owner or by allowing the third-party application to obtain access on its own behalf. This documentation provides details on how to authenticate and use the API.

## Authentication

OAuth 2.0 authentication requires obtaining an access token. Below are the steps to obtain an access token:

1. **Authorization Request**   
   Redirects User to the authorization server's authorization endpoint. 
   
   *Example URL:* 

    https://passport.alephexpress.com/api/v3/oauth2/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=SCOPE&state=STATE

    |Parameter name|Parameter description|
    |---|---|
    |response_type|The value should be code.|
    |client_id|The client ID provided by the service.|
    |redirect_uri|The URL to which the user will be redirected after authentication.|
    |scope|The permissions requested by the application.|
    |state|A random string to protect against CSRF attacks. Optional param|


2. **Authorization Grant**   
    The User authenticates and approves the authorization request.

3. **Access Token Request**   
   Exchange the authorization code for an access token by making a *POST* request to the token endpoint. 

   *Example:*

    > **POST** /oauth2/token HTTP/1.1
    > 
    > *Host*: https://passport.alephexpress.com/api/v3
    > 
    > *Content-Type*: application/x-www-form-urlencoded
    > 
    > grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=REDIRECT_URI&client_id=CLIENT_ID&client_secret=CLIENT_SECRET

    |Parameter name|Parameter description|
    |---|---|
    |grant_type|The value should be authorization_code.|
    |code|The authorization code received in the previous step.|
    |redirect_uri|The same redirect URI used in the authorization request.|
    |client_id|The client ID provided by the service.|
    |client_secret|The client secret provided by the service.|


4. **Access Token Response**
   
   The authorization server responds with an access token. 
   
    *Example:*
    ```json
    {
        "access_token": "ACCESS_TOKEN",
        "token_type": "Bearer",
        "expires_in": 3600,
        "refresh_token": "REFRESH_TOKEN"
    }
    ```
### Example Usage (Python) 

#### Step 1. Authorization Request

>   *auth_url* = 'https://passport.alephexpress.com/api/v3/oauth2/authorize'
> 
>   *auth_params* = 
>   {
>       'response_type': 'code',
>       'client_id': 'CLIENT_ID',
>       'redirect_uri': 'REDIRECT_URI',
>       'scope': 'SCOPE',
>       'state': 'STATE'
>   } 
> 
>   *response* = requests.get(auth_url, params=auth_params)
> 
>   *authorization_code* = input("Enter authorization code: ")

#### Step 2. Access Token Request

>   *token_url* = 'https://passport.alephexpress.com/api/v3/oauth2/token'
> 
>   *token_params* = 
>   {
>      'grant_type': 'authorization_code',
>      'code': authorization_code,
>      'redirect_uri': 'REDIRECT_URI',
>      'client_id': 'CLIENT_ID',
>      'client_secret': 'CLIENT_SECRET'
>   }
> 
>   *token_response* = requests.post(token_url, data=token_params)
> 
>   *access_token* = token_response.json()['access_token']

#### Step 3. Use the access token to make API requests
   To obtain an access token and use it to make authenticated requests to the API. 
   
   Remember to replace placeholders like ```CLIENT_ID```, ```REDIRECT_URI```, ```SCOPE```, and ```CLIENT_SECRET``` with actual values provided by  the service.

   *Example:*

>   *api_url* = 'https://store-api.alephexpress.com/api/v3/brand/create'
> 
>   *headers* = {'Authorization': 'Bearer ' + access_token}
> 
>   *response* = requests.get(api_url, headers=headers)
> 
>   *print*(response.json())


