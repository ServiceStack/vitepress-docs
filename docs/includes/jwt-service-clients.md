
JWT first-class support for Refresh Token Cookies is implicitly enabled when configuring the `JwtAuthProvider` to use Cookies:

```csharp
Plugins.Add(new AuthFeature(() => new AuthUserSession(),
    new IAuthProvider[] {
        new JwtAuthProvider {
            UseTokenCookie = true,
        },
    }));
```

Which upon authentication will return the Refresh Token in a `ss-reftok` **Secure**, **HttpOnly** Cookie alongside
the Users stateless Authenticated UserSession in the JWT `ss-tok` Cookie.

The benefit of maintaining smart, generic Service Clients for all [Add ServiceStack Reference](/add-servicestack-reference)
languages is being able to provide a nicer (i.e. maintenance-free) development experience with all Service Clients
now including built-in support for Refresh Token Cookies where they’ll automatically fetch new JWT Bearer Tokens &
transparently Auto Retry Requests on 401 Unauthorized responses:

#### C#, F# & VB .NET Service Clients

```csharp
var client = new JsonServiceClient(baseUrl);
var authRequest = new Authenticate {
    provider = "credentials",
    UserName = userName,
    Password = password,
    RememberMe = true
};
var authResponse = client.Post(authRequest);

//client.GetTokenCookie();        // JWT Bearer Token
//client.GetRefreshTokenCookie(); // JWT Refresh Token

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
var response = client.Post(new SecureRequest { Name = "World" }); 

Inspect.printDump(response); // print API Response into human-readable format (alias: `response.PrintDump()`)
```

#### TypeScript & JS Service Client

```ts
let client = new JsonServiceClient(baseUrl);
let authRequest = new Authenticate({provider:"credentials",userName,password,rememberMe});
let authResponse = await client.post(authRequest);

// In Browser can't read "HttpOnly" Token Cookies by design, In Node.js can access client.cookies  

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
let response = await client.post(new SecureRequest({ name: "World" }));

Inspect.printDump(response); // print API Response into human-readable format
```

#### Python Service Client

```python
client = JsonServiceClient(baseUrl)
authRequest = Authenticate(
    provider="credentials", user_name=user_name, password=password, rememberMe=true)
authResponse = client.post(authRequest)

# When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
response = client.post(SecureRequest(name="World"))

#client.token_cookie         # JWT Bearer Token
#client.refresh_token_cookie # JWT Refresh Token

printdump(response) # print API Response into human-readable format
```

#### Dart Service Clients

```dart
var client = ClientFactory.create(baseUrl);
var authRequest = Authenticate(provider:"credentials", userName:userName, password:password);
var authResponse = await client.post(authRequest)

//client.getTokenCookie()        // JWT Bearer Token
//client.getRefreshTokenCookie() // JWT Refresh Token

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
var response = await client.post(SecureRequest(name:"World"));

Inspect.printDump(response); // print API Response into human-readable format
```

#### Java Service Clients

```java
JsonServiceClient client = new JsonServiceClient(baseUrl);
Authenticate authRequest = new Authenticate()
    .setProvider("credentials")
    .setUserName(userName)
    .setPassword(password)
    .setRememberMe(true));
AuthenticateResponse authResponse = client.post(authRequest);

//client.getTokenCookie();         // JWT Bearer Token
//client.getRefreshTokenCookie();  // JWT Refresh Token

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
SecureResponse response = client.post(new SecureRequest().setName("World"));

Inspect.printDump(response); // print API Response into human-readable format
```

#### Kotlin Service Clients

```kotlin
val client = new JsonServiceClient(baseUrl)
val authResponse = client.post(Authenticate().apply {
    provider = "credentials"
    userName = userName
    password = password
    rememberMe = true
})

//client.tokenCookie         // JWT Bearer Token
//client.refreshTokenCookie  // JWT Refresh Token

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
val response = client.post(SecureRequest().apply {
    name = "World"    
})

Inspect.printDump(response) // print API Response into human-readable format
```

#### Swift Service Client

```swift
let client = JsonServiceClient(baseUrl: baseUrl);
let authRequest = Authenticate()
authRequest.provider = "credentials"
authRequest.userName = userName
authRequest.password = password
authRequest.rememberMe = true
let authResponse = try client.post(authRequest)

//client.getTokenCookie()        // JWT Bearer Token
//client.getRefreshTokenCookie() // JWT Refresh Token

// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie
let request = SecureRequest()
request.name = "World"
let response = try client.post(request)

Inspect.printDump(response) // print API Response into human-readable format
```
