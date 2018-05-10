# API Design

## Table of Contents

* [Reference](#reference)
* [Error handling](#error-handling)
* [Session management](#session-management)
* [HTTP Status Codes](#http-status-codes)

### Reference

What's outlined below is mostly learnings from following the following online tutorials and blogs:

* [RealWorld Project - Designing a robust JSON API](https://thinkster.io/tutorials/design-a-robust-json-api)
* [HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html)
* [JSON Web Tokens with Angular](https://blog.angular-university.io/angular-jwt/)

### Error handling

Response format same across all end points.
Special response format for validation errors (includes field names as keys):

```json
{
  "errors": {
    "body": ["can't be empty"]
  }
}
```

All codes are listed [here](#http-status-codes).

### Session management

_Documentation mostly focused on using JWTs._

* The key property of JWTs is that in order to confirm if they are valid we only need to look at the token itself. So the application server doesn't need to store in-memory token. So app server can be completely stateless.

* A JWT is made of 3 parts: the Header, the Payload and the Signature.

* A JWT is not encrypted.

* A JWT Payload is a JS object, usually with user info. _Important_ not to put in the Payload any user information that an attacker could leverage directly. Suggested payload:

```json
{
  "iss": "Identifier of our Authentication Server (issuing entity)",
  "iat": 1504699136,
  "sub": "github|353454354354353453",
  "exp": 1504699256
}
```

Note:
"iat": timestamp of creation of the JWT in seconds since Epoch,
"exp": token expiration timestamp

* JWT Headers have info about what type of algorithm was used for the signature.

* JWT Signatures:

  * HS256 (SHA-256 Hash-Based Message Authentication Code)

    `signature = SHA256(base64url(header,payload,secret_key))`

    Problem with this is:

    * This requires all servers to have a copy of the secret_key
    * The secret_key can be brute forced if weak
    * Hard to rotate secret keys

  * RS256 (RSA-SHA256) (RECOMMENDED)

    `signature = RSA(SHA256(base64url(header,payload))`

    Advantages:

    * Separation between creation and verification of tokens
    * Simplified key rotation

### HTTP Status Codes

| Code | Type                  | Description                                                                             |
| ---- | --------------------- | --------------------------------------------------------------------------------------- |
| 400  | Bad Request           | The request could not be understood by the server due to malformed syntax               |
| 401  | Unauthorized requests | When a request requires authentication but it isn't provided                            |
| 403  | Forbidden requests    | When a request may be valid but the user doesn't have permissions to perform the action |
| 404  | Not found requests    | When a resource can't be found to fulfill the request                                   |
