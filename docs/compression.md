---
slug: compression
---

## Client/Server Request Compression

In addition to [optimized cached Server Responses](/http-caching#server-caching) you can also elect to compress HTTP Requests in any C#/.NET Service Clients by specifying the Compression Type you wish to use, e.g:

```csharp
var client = new JsonServiceClient(baseUrl) {
    RequestCompressionType = CompressionTypes.GZip,
};

var client = new JsonHttpClient(baseUrl) {
    RequestCompressionType = CompressionTypes.Deflate,
};

var response = client.Post(new Request { ... });
```

Where sending any HTTP Request containing a Request Body (e.g. POST/PUT) will send a compressed Request body
to the Server where it's now able to be transparently decompressed and deserialized into your Request DTO.

## `[CompressResponse]` Attribute

You can now selectively choose which Services should be compressed with the new `[CompressResponse]` attribute to 
compress responses for clients which support compression, which can be applied to most Response Types, e.g:

```csharp
[CompressResponse]
public class CompressedServices : Service
{
    public object Any(CompressDto request) => new CompressExamplesResponse(); 
    public object Any(CompressString request) => "foo"; 
    public object Any(CompressBytes request) => "foo".ToUtf8Bytes(); 
    public object Any(CompressStream request) => new MemoryStream("foo".ToUtf8Bytes()); 
    public object Any(CompressFile request) => new HttpResult(VirtualFileSources.GetFile("/foo"));

    public object Any(CompressAnyHttpResult request)
    {
        return new HttpResult(new CompressExamplesResponse());    // DTO
        return new HttpResult("foo", "text/plain");               // string
        return new HttpResult("foo".ToUtf8Bytes(), "text/plain"); // bytes
        //etc
    }
}
```

::: info
using `[CompressResponse]` is unnecessary when returning [cached responses](/http-caching) as ServiceStack 
automatically caches and returns the most optimal Response - typically compressed bytes for clients that 
supports compression
:::

## Static File Compression

ServiceStack can also be configured to compress static files with specific file extensions that are larger than 
specific size with the new opt-in Config options below:

```csharp
SetConfig(new HostConfig {
    CompressFilesWithExtensions = { "js", "css" },
    // (optional), only compress .js or .css files > 10k
    CompressFilesLargerThanBytes = 10 * 1024 
});
```

When more fine-grained logic is needed you can override `ShouldCompressFile()` in your AppHost to choose which
static files you want to compress on a per-file basis, e.g:

```csharp
public override bool ShouldCompressFile(IVirtualFile file)
{
    return base.ShouldCompressFile(file) || file.Name == "large.csv";
}
```

#### When to enable Static File Compression

It's more optimal to configure static file compression on the native Web Server that's hosting your ServiceStack 
App than in managed code. You can use [Fiddler](http://www.telerik.com/fiddler) to check if your Web Server (e.g. IIS) 
is already compressing static files in which case you won't want to configure ServiceStack to do it.

No compression is added when running ServiceStack in a self-host, which will benefit from enabling Static File Compression.

