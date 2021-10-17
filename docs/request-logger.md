---
slug: request-logger
---
Add an In-Memory `IRequestLogger` and service with the default route at `/requestlogs` which maintains a live log of the most recent requests (and their responses). Supports multiple config options incl. Rolling-size capacity, error and session tracking, hidden request bodies for sensitive services, etc.

```cs
Plugins.Add(new RequestLogsFeature());
```

### CSV Request Logger

One of the areas where ServiceStack's [CSV Support](/csv-format) shines is being able to store daily Request Logs in a plain-text structured format, that way they could be immediately inspectable with a text editor or for even better inspection, opened in a spreadsheet and benefit from its filterable, movable, resizable and sortable columns.

To enable CSV Request Logging you just need to register the `RequestLogsFeature` and configure it to use the
[CsvRequestLogger](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/CsvRequestLogger.cs):

```csharp
Plugins.Add(new RequestLogsFeature {
    RequestLogger = new CsvRequestLogger(),
});
```

This will register the CSV Request logger with the following overridable defaults:

```csharp
Plugins.Add(new RequestLogsFeature {
    RequestLogger = new CsvRequestLogger(
        files: new FileSystemVirtualFiles(HostContext.Config.WebHostPhysicalPath),
        requestLogsPattern: "requestlogs/{year}-{month}/{year}-{month}-{day}.csv",
        errorLogsPattern: "requestlogs/{year}-{month}/{year}-{month}-{day}-errors.csv",
        appendEvery: TimeSpan.FromSeconds(1)
    ),
});
```

Where Request Logs are flushed every **1 second** using a background Timer to a daily log maintained in
the logical date format structure above. As it would be useful to be able to inspect any errors in isolation, 
errors are also written to a separate `YYYY-MM-DD-errors.csv` format, in addition to the main Request logs.

### [Custom CSV AutoQuery Data implementation](/autoquery-service#custom-autoquery-data-implementation)

The AutoQuery Service example shows you can quickly create an AutoQuery Data Service that lets you inspect your CSV Request and Error Logs with AutoQuery, which in addition to the rich querying benefits also gives you access to an instant UI in [AutoQuery Viewer](https://github.com/ServiceStack/Admin) to be able to [View your Request Logs](/autoquery-service#view-request-logs-in-autoquery-viewerhttpsgithubcomservicestackadmin).

## Rollbar Request Logger

The [iayos.ServiceStack.RollbarPlugin](https://github.com/daleholborow/iayos.ServiceStack.RollbarPlugin) integrates with [Rollbar](https://rollbar.com) real-time error monitoring solution which has a free tier to log up to 5,000 requests per month.

### Install

To use `RollbarLoggerPlugin` install the [iayos.ServiceStack.RollbarPlugin](https://www.nuget.org/packages/iayos.ServiceStack.RollbarPlugin) NuGet package:

::: nuget
`<PackageReference Include="iayos.ServiceStack.RollbarPlugin" Version="0.0.1" />`
:::

Sign Up for a new account on [Rollbar](https://rollbar.com). Then register `RollbarLoggerPlugin` with the your API Key:

```csharp
Plugins.Add(new RollbarLoggerPlugin
{
    ApiKey = rollbarApiKey,
    //..
}
```

Please see the [iayos.ServiceStack.RollbarPlugin](https://github.com/daleholborow/iayos.ServiceStack.RollbarPlugin) project for additional customization options.

## Redis Request Logger

The HTTP Request logs can also be configured to persist to a distributed [Redis](https://redis.io) data store instead by configuring the `RequestLogsFeature` plugin to use the `RedisRequestLogger`. Persisting logs in redis will allow them to survive and be view-able across App Domain restarts.

### Install

To use `RedisRequestLogger` first install the **ServiceStack.Server** NuGet package:

::: nuget
`<PackageReference Include="ServiceStack.Server" Version="5.*" />`
:::

Then configure `RequestLogsFeature` to use the `RedisRequestLogger` which can make use of your existing `IRedisClientsManager` registered IOC dependency, e.g:

```csharp
Plugins.Add(new RequestLogsFeature {
    RequestLogger = new RedisRequestLogger(
	    container.Resolve<IRedisClientsManager>(), capacity:1000)
});
```

::: info Tip
The optional `capacity` configures Redis Request Logger as a rolling log where it will only keep the most recent 1000 entries
:::

### Configuration

Like other ServiceStack [Plugins](/plugins) the `RequestLogsFeature` has a number of configuration options that can be specified at registration to customize Request Logging:

<table class="table">
<thead>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>
</thead>
<tr>
    <td>AtRestPath</td>
    <td>string</td>
    <td>RequestLogs service Route, default is `/requestlogs`</td>
</tr>
<tr>
    <td>EnableSessionTracking</td>
    <td>bool</td>
    <td>Turn On/Off Session Tracking</td>
</tr>
<tr>
    <td>EnableRequestBodyTracking</td>
    <td>bool</td>
    <td>Turn On/Off Logging of Raw Request Body, default is Off</td>
</tr>
<tr>
    <td>EnableResponseTracking</td>
    <td>bool</td>
    <td>Turn On/Off Tracking of Responses</td>
</tr>
<tr>
    <td>EnableErrorTracking</td>
    <td>bool</td>
    <td>Turn On/Off Tracking of Exceptions</td>
</tr>
<tr>
    <td>Capacity</td>
    <td>int?</td>
    <td>Size of InMemoryRollingRequestLogger circular buffer</td>
</tr>
<tr>
    <td>RequiredRoles</td>
    <td>string[]</td>
    <td>Limit access to /requestlogs service to these roles</td>
</tr>
<tr>
    <td>RequestLogger</td>
    <td>IRequest
        Logger</td>
    <td>Change the RequestLogger provider. Default is InMemoryRollingRequestLogger</td>
</tr>
<tr>
    <td>ExcludeRequestDtoTypes</td>
    <td>Type[]</td>
    <td>Don't log requests of these types. By default RequestLog's are excluded</td>
</tr>
<tr>
    <td>HideRequestBody
        ForRequestDtoTypes</td>
    <td>Type[]</td>
    <td>Don't log request bodys for services with sensitive information. By default Auth and Registration requests are hidden.</td>
</tr>
</table>

### Usage

The `IRequestLogger` is a great way to introspect and analyze your service requests in real-time. Here's a screenshot from the [bootstrapapi.servicestack.net](http://bootstrapapi.servicestack.net) website:

![Live Screenshot](/images/plugins/request-logs-01.png)

It supports multiple queryString filters and switches so you filter out related requests for better analysis and debuggability:

![Request Logs Usage](/images/plugins/request-logs-02.png)

The [RequestLogsService](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Admin/RequestLogsService.cs) is just a simple C# service under-the-hood but is a good example of how a little bit of code can provide a lot of value in ServiceStack's by leveraging its generic, built-in features.
