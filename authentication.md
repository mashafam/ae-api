Authentication
OAuth 2.0 authentication requires obtaining an access token. Below are the steps to obtain an access token:
Authorization Request: Redirect the user to the authorization server's authorization endpoint. Example URL:
https://passport.alephexpress.com/api/v3/oauth2/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=SCOPE&state=STATE

response_type: The value should be code.
client_id: The client ID provided by the service.
redirect_uri: The URL to which the user will be redirected after authentication.
scope: The permissions requested by the application.
state (optional): A random string to protect against CSRF attacks.


Authorization Grant: The user authenticates and approves the authorization request.
Access Token Request: Exchange the authorization code for an access token by making a POST request to the token endpoint. Example:
POST /oauth2/token HTTP/1.1
Host: https://passport.alephexpress.com/api/v3
Content-Type: application/x-www-form-urlencoded
grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=REDIRECT_URI&client_id=CLIENT_ID&client_secret=CLIENT_SECRET
grant_type: The value should be authorization_code.
code: The authorization code received in the previous step.
redirect_uri: The same redirect URI used in the authorization request.
client_id: The client ID provided by the service.
client_secret: The client secret provided by the service.


Access Token Response: The authorization server responds with an access token. Example:
{
    "access_token": "ACCESS_TOKEN",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "REFRESH_TOKEN"
}
Example Usage (Python)
import requests

# Step 1: Authorization Request
auth_url = 'https://passport.alephexpress.com/api/v3/oauth2/authorize'
auth_params = {
    'response_type': 'code',
    'client_id': 'CLIENT_ID',
    'redirect_uri': 'REDIRECT_URI',
    'scope': 'SCOPE',
    'state': 'STATE'
}
response = requests.get(auth_url, params=auth_params)
authorization_code = input("Enter authorization code: ")

# Step 2: Access Token Request
token_url = 'https://passport.alephexpress.com/api/v3/oauth2/token'
token_params = {
    'grant_type': 'authorization_code',
    'code': authorization_code,
    'redirect_uri': 'REDIRECT_URI',
    'client_id': 'CLIENT_ID',
    'client_secret': 'CLIENT_SECRET'
}
token_response = requests.post(token_url, data=token_params)
access_token = token_response.json()['access_token']

# Step 3: Use the access token to make API requests
# Example:
api_url = 'https://store-api.alephexpress.com/api/v3/brand/create'
headers = {'Authorization': 'Bearer ' + access_token}
response = requests.get(api_url, headers=headers)
print(response.json())

This example demonstrates how to obtain an access token and use it to make authenticated requests to the API.
Remember to replace placeholders like CLIENT_ID, REDIRECT_URI, SCOPE, and CLIENT_SECRET with actual values provided by the service.