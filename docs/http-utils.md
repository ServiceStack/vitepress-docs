---
slug: http-utils
title: HTTP Utils
---

The recommended way to call ServiceStack services is to use any of the [C# Service Clients](/csharp-client) which have a nice DRY and typed API optimized for this use. However when doing server programming you will often need to consume 3rd Party HTTP APIs, unfortunately the built-in way to do this in .NET doesn't make for a good development experience since it makes use of **WebRequest** - one of the legacy classes inherited from the early .NET days. WebRequest is an example of a class that's both versatile but also suffers from exposing an out-dated and unpleasant API for your application code to bind to.

### Creating a pleasant DRY API with just extension methods

Rather than taking the normal .NET approach of wrapping WebRequest inside a suite of proxy and abstraction classes, we prefer to instead encapsulate any unnecessary boilerplate behind extension methods DRYing common access patterns behind terse, readable and chained APIs without any loss of flexibility since the underlying WebRequest remains accessible whenever it's needed. 

The [PocoPower project](https://github.com/ServiceStack/ServiceStack.UseCases/tree/master/PocoPower) shows some good examples of what this looks like in Practice. Here's how you can retrieve a typed list of GitHub User Repos from GitHub's JSON REST API:

```csharp
List<GithubRepo> repos = $"https://api.github.com/users/{user}/repos"
    .GetJsonFromUrl()
    .FromJson<List<GithubRepo>>();
```

### Url Extensions

You can make use of the accompanying String Extensions to programatically construct a url as seen in this Twitter API example:

```csharp
var url = $"http://api.twitter.com/statuses/user_timeline.json?screen_name={name}";
if (sinceId != null)
    url = url.AddQueryParam("since_id", sinceId);
if (maxId != null)
    url = url.AddQueryParam("max_id", maxId);

var tweets = url.GetJsonFromUrl()
    .FromJson<List<Tweet>>();
```

In both these cases it uses `WebRequest` to make a HTTP **GET** request asking for the "application/json" Content-Type, that's preferably compressed with `gzip` or `deflate` encoding (if the remote web server supports it).

### Alternative Content-Type

In addition to `GetJsonFromUrl` there's also `GetXmlFromUrl` covering the 2 widely used content-types used for data containers:

```csharp
List<User> users = "http://example.org/xml-rpc/users"
    .GetXmlFromUrl()
    .FromXml<List<User>>();
```

For any other Content-Type you can specify it with the optional `accept` param:

```csharp
var csv = "http://example.org/users.csv"
    .GetStringFromUrl(accept:"text/csv");
```

### Customizing the WebRequest

Although most extension methods start on string urls, you can customize the HttpWebRequest used to make the request by specifying a `requestFilter`. e.g:

```csharp
var json = "http://example.org/users".GetJsonFromUrl(requestFilter:webReq =>{
    webReq.Headers["X-Api-Key"] = apiKey;
});
```

### Parsing Custom Responses

This also works for Response Filters as well where if you need access to the Response HTTP Headers as well as the body you can add a callback for the response filter:

```csharp
List<GithubRepo> repos = $"https://api.github.com/users/{user}/repos"
    .GetJsonFromUrl(responseFilter: httpRes => {
        var remaining = httpRes.Headers["X-Api-Remaining"];
    })
    .FromJson<List<GithubRepo>>();
```

### Downloading Raw Content

Use the `GetStringFromUrl` extension to download raw text:

```csharp
string csv = "http://example.org/sales.csv".GetStringFromUrl();
```

and the `GetBytesFromUrl` extension to download raw bytes:

```csharp
byte[] imgBytes = "http://example.org/photo.jpg".GetBytesFromUrl();
```

## POSTing data

Another common HTTP Request is to POST data to REST APIs. The most common way to post data to HTTP APIs is to post `x-www-form-urlencoded` key value pairs which you can do with:

```csharp
var response = "http://example.org/login"
    .PostToUrl("Username=mythz&Password=password");
```

Or using a POCO Type:

```csharp
var response = "http://example.org/login"
    .PostToUrl(new Login { Username="mythz", Password="password" });
```

An Anonymous Type:

```csharp
var response = "http://example.org/login"
    .PostToUrl(new { Username="mythz", Password="password" });
```

Or a string Dictionary:

```csharp
var login = new Dictionary<string,string> { 
    {"Username","mythz"}, {"Password","password"} };
var response = "http://example.org/login".PostToUrl(login);
```

Or a NameValueCollection:

```csharp
var login = new NameValueCollection { 
    {"Username","mythz"}, {"Password","password"} };
var response = "http://example.org/login".PostToUrl(login.ToFormUrlEncoded());
```

### POSTing JSON data

Although POST'ing other Content-Types are also easily supported. An example using JSON:

Either as any serializable JSON object:

```csharp
var response = "http://example.org/login"
    .PostJsonToUrl(new Login { Username="mythz", Password="password" });
```

Or as a raw JSON string:

```csharp
var response = "http://example.org/login"
    .PostJsonToUrl(@"{""Username"":""mythz"",""Password"":""p@ssword""}");
```

And an example of sending any other arbitrary content types:

```csharp
var response = "http://example.org/login"
  .PostStringToUrl("<User>mythz</User><Pass>p@ss</Pass>", contentType:"application/xml");
```

The above API's also apply to **PUT** or **PATCH** data as well by using the `PutToUrl` and `PatchToUrl` extension methods.

The same [HTTP Utils extension methods for Post and Put](/http-utils#posting-data) also have `Patch()` equivalents.

### PATCH Example

We use the new `Patch()` support in Gistlyn's
[GitHubServices.cs](https://github.com/ServiceStack/Gistlyn/blob/master/src/Gistlyn.ServiceInterface/GitHubServices.cs)
to update contents of existing Gists:

```csharp
var GithubApiBaseUrl = "https://api.github.com/";
var updateResponse = GithubApiBaseUrl.CombineWith("gists", gist)
    .PatchJsonToUrl(new UpdateGithubGist {
        description = request.Description,
        files = request.Files,
    }, 
    requestFilter: req => {
        req.UserAgent = "Gistlyn";
        req.Headers["Authorization"] = "token " + github.AccessTokenSecret;
    });
```

### Creating a Proxy using HTTP Utils

As the HTTP Utils offers a flexible API it becomes trivial to create a generic HTTP Proxy which you can implement with the ServiceStack Service below:

```csharp
[Route("/proxy")]
public class Proxy : IRequiresRequestStream, IReturn<string>
{
    public string Url { get; set; }
    public Stream RequestStream { get; set; }
}

public object Any(Proxy request)
{
    if (string.IsNullOrEmpty(request.Url))
        throw new ArgumentNullException("Url");

    var hasRequestBody = base.Request.Verb.HasRequestBody();
    try
    {
        var bytes = request.Url.SendBytesToUrl(
          method: base.Request.Verb,
          requestBody: hasRequestBody ? request.RequestStream.ReadFully() : null,
          contentType: hasRequestBody ? base.Request.ContentType : null,
          accept: ((IHttpRequest)base.Request).Accept,
          requestFilter: req => req.UserAgent = "Gistlyn",
          responseFilter: res => base.Request.ResponseContentType = res.ContentType);

        return bytes;
    }
    catch (WebException webEx)
    {
        var errorResponse = (HttpWebResponse)webEx.Response;
        base.Response.StatusCode = (int)errorResponse.StatusCode;
        base.Response.StatusDescription = errorResponse.StatusDescription;
        var bytes = errorResponse.GetResponseStream().ReadFully();
        return bytes;
    }
}
```

## Async HTTP Utils

Many of HTTP Utils also have async versions allowing them to participate in C#'s `async/await` workflows. The available async APIs include:

```csharp
Task<string> GetStringFromUrlAsync(...)
Task<string> PostStringToUrlAsync(...)
Task<string> PostToUrlAsync(...)
Task<string> PostJsonToUrlAsync(...)
Task<string> PostXmlToUrlAsync(...)
Task<string> PutStringToUrlAsync(...)
Task<string> PutToUrlAsync(...)
Task<string> PutJsonToUrlAsync(...)
Task<string> PutXmlToUrlAsync(...)
Task<string> DeleteFromUrlAsync(...)
Task<string> OptionsFromUrlAsync(...)
Task<string> HeadFromUrlAsync(...)
Task<string> SendStringToUrlAsync(...)
```

## Uploading Files

In the `ServiceStack.ServiceClient.Web` namespace there are more HTTP extensions available including the `UploadFile` extension methods to upload files using multi-part/formdata:

```csharp
var httpRes = "http://example.org/upload"
    .PostFileToUrl(new FileInfo("/path/to/file.xml"), "application/xml");
```

## Upload File from Stream

For finer-grain control you can use the `UploadFile` extension method which allows you to customize the `WebRequest` that's used to send the File Upload HTTP Request, e.g:

```csharp
var uploadFile = new FileInfo("path/to/file.csv");

var webReq = (HttpWebRequest)WebRequest.Create("http://example.org/upload");
webReq.Accept = MimeTypes.Json;
using (var stream = uploadFile.OpenRead())
{
    webReq.UploadFile(stream, uploadFile.Name, MimeTypes.GetMimeType(uploadFile.Name));
}
```

## Exception handling

Exception handling is another area we can DRY up using extension methods. Rather than wrapping them in our own Custom exception classes or repeating the boilerplate required to find the underlying issue on every request, we provide typed APIs over the native WebRequest **Exceptions**, providing typed DRY APIs to handle common HTTP Faults:

```csharp
try 
{
    var response = "http://example.org/fault".GetStringFromUrl();
} 
catch (Exception ex) 
{
    var knownError = ex.IsBadRequest() 
        || ex.IsNotFound() 
        || ex.IsUnauthorized() 
        || ex.IsForbidden() 
        || ex.IsInternalServerError();

    var isAnyClientError = ex.IsAny400();
    var isAnyServerError = ex.IsAny500();

    HttpStatusCode? errorStatus = ex.GetStatus();
    string errorBody = ex.GetResponseBody();
}
```

### HTTP Utils are mockable

The one disadvantage of using Extension methods is that by default they can be hard or impossible to mock which is why we've added explicit support for [support for Mocking in OrmLite](https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/MockAllApiTests.cs) and now the above HTTP Util extension methods, e.g:

```csharp
using (new HttpResultsFilter {
    StringResult = "mocked"
})
{
    //All return "mocked"
    "http://google.com".GetJsonFromUrl();
    "http://google.com".GetXmlFromUrl();
    "http://google.com".GetStringFromUrl(accept: "text/csv");
    "http://google.com".PostJsonToUrl(json: "{\"postdata\":1}");
}
```

See the [HttpUtilsMockTests.cs](https://github.com/ServiceStack/ServiceStack.Text/blob/master/tests/ServiceStack.Text.Tests/HttpUtilsMockTests.cs) for more examples showing how the HTTP Apis can be mocked.

## HTTP API Reference

The above description should give you a good idea of how to make use of the APIs, although for a more complete reference we'll post the full signatures here.

Most of the APIs are located in the [ServiceStack.Text](https://github.com/ServiceStack/ServiceStack.Text/blob/master/src/ServiceStack.Text/HttpUtils.cs) namespace:

```csharp
string GetJsonFromUrl(this string url, Action<HttpWebRequest> requestFilter=null,
  Action<HttpWebResponse> responseFilter=null)

string GetXmlFromUrl(this string url, Action<HttpWebRequest> requestFilter=null, 
  Action<HttpWebResponse> responseFilter=null)

string GetStringFromUrl(this string url, string accept = "*/*", 
  Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string PostStringToUrl(this string url, string requestBody = null,
    string contentType = null, string accept = "*/*",
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PostToUrl(this string url, string formData=null, string accept="*/*",
  Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string PostToUrl(this string url, object formData = null, string accept="*/*",
  Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string PostJsonToUrl(this string url, string json,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PostJsonToUrl(this string url, object data,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PostXmlToUrl(this string url, string xml,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PostXmlToUrl(this string url, object data,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PutStringToUrl(this string url, string requestBody = null,
    string contentType = null, string accept = "*/*",
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PutToUrl(this string url, string formData=null, string accept="*/*",
  Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string PutToUrl(this string url, object formData = null, string accept = "*/*",
  Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string PutJsonToUrl(this string url, string json,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PutJsonToUrl(this string url, object data,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PutXmlToUrl(this string url, string xml,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string PutXmlToUrl(this string url, object data,
    Action<HttpWebRequest> requestFilter = null, Action<HttpWebResponse> responseFilter = null)

string DeleteFromUrl(this string url, string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string OptionsFromUrl(this string url, string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string HeadFromUrl(this string url, string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

string SendStringToUrl(this string url, string method = null,
    string requestBody = null, string contentType = null, string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

byte[] GetBytesFromUrl(this string url, string accept = "*/*", 
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

byte[] PostBytesToUrl(this string url, byte[] requestBody = null, string contentType = null, 
    string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

byte[] PutBytesToUrl(this string url, byte[] requestBody = null, string contentType = null, 
    string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

byte[] SendBytesToUrl(this string url, string method = null,
    byte[] requestBody = null, string contentType = null, string accept = "*/*",
    Action<HttpWebRequest> requestFilter=null, Action<HttpWebResponse> responseFilter=null)

bool IsAny300(this Exception ex)
bool IsAny400(this Exception ex)
bool IsAny500(this Exception ex)
bool IsBadRequest(this Exception ex)
bool IsNotFound(this Exception ex)
bool IsUnauthorized(this Exception ex)
bool IsForbidden(this Exception ex)
bool IsInternalServerError(this Exception ex)

HttpStatusCode? GetResponseStatus(this string url)
HttpStatusCode? GetStatus(this Exception ex)
HttpStatusCode? GetStatus(this WebException webEx)
string GetResponseBody(this Exception ex)

bool HasStatus(this WebException webEx, HttpStatusCode statusCode)
```

Whilst some additional HTTP APIs can be found in the [ServiceStack.ServiceClient.Web](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Common/ServiceClient.Web/WebRequestExtensions.cs) namespace:

```csharp
HttpWebResponse GetErrorResponse(this string url)

WebResponse PostFileToUrl(this string url, FileInfo uploadFileInfo, string uploadFileMimeType,
    string accept = null, Action<HttpWebRequest> requestFilter = null)

WebResponse UploadFile(this WebRequest webRequest, FileInfo uploadFileInfo, string uploadFileMimeType)

UploadFile(this WebRequest webRequest, Stream fileStream, string fileName, string mimeType,
    string accept = null, Action<HttpWebRequest> requestFilter = null)

void UploadFile(this WebRequest webRequest, Stream fileStream, string fileName)
```

Which is located in the [ServiceStack.Text NuGet package](https://nuget.org/packages/ServiceStack.Text/)
