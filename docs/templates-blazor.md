---
title: Blazor Project Template
slug: templates-blazor
---

## Blazor Web Assembly Template

[Sebastian Faltoni](https://github.com/nukedbit) from the ServiceStack community is maintaining a .NET 5.0 [Blazor WASM Template](https://github.com/nukedbit/blazor-wasm-servicestack)

A New ServiceStack + Blazor WASM templates can be created with:

```bash
$ x new nukedbit/blazor-wasm-servicestack ProjectName
```

### Executing in a Standalone Desktop app

For an even better integrated Desktop App Experience you can also use ServiceStack's [app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop) to run your Blazor Desktop Apps as a Chromium Desktop App:

```bash
$ dotnet tool update -g app
$ x new nukedbit/blazor-wasm-servicestack Acme
$ cd Acme\Acme
$ dotnet public -c Release
$ cd bin\Release\net5.0\publish
$ app Acme.dll
```

![](https://raw.githubusercontent.com/nukedbit/blazor-wasm-servicestack/master/blazor-wasm-servicestack.png)

## Blazor Service Client

As we track Blazor's progress we've created an official API for creating C#/.NET Service Client instances with:

```csharp
var client = BlazorClient.Create(baseUrl);
```

Which returns a `JsonHttpClient` stripped of features that are known not to work in Blazor, we'll keep it updated as Blazor gains support for additional features.

This API also lets you modify the MessageHandler all Blazor client instances are configured with:

```csharp
BlazorClient.MessageHandler = new HttpClientHandler { ... };
```
