---
slug: autoquery
title: AutoQuery
---

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/autoquery/autoquery-splash.png)

## AutoQuery - Instant Queryable APIs

The AutoQuery support in ServiceStack adds Auto Querying functionality akin to OData's querying support for Web Api, although we've strongly disregarded their approach which we've long considered [promotes web service anti-patterns](http://stackoverflow.com/a/9579090/85785). To explain the design goals behind AutoQuery it's important to identify and avoid the parts of OData we consider make it a poor fit for services. 

### [Why not OData](/why-not-odata)

[Why not OData](/why-not-odata) goes through what aspects make OData a poor Services technology who's Services anti-patterns violates Microsoft's own Services Design guidelines where its implementation, complexity, poor performance, tight-coupling and inhibitive versionability is reminiscent of their earlier rigid, heavy-weight SOAP/SOA frameworks that's still entrenched in a number of legacy systems - [poorly ideologised, over-engineered Services technology](http://www.infoq.com/articles/interview-servicestack) many companies are still trying to recover from.

## Introducing [AutoQuery](/autoquery-rdbms)

The solution to overcome most of OData issues is ultimately quite simple: enhance the ideal API the developer would naturally write and complete their implementation for them! This is essentially the philosophy behind AutoQuery which utilizes conventions to automate creation of intent-based self-descriptive APIs that are able to specify configurable conventions and leverage extensibility options to maximize the utility of AutoQuery services.

AutoQuerying aims to work like optional typing by making it easy to expose contract-less data services for rapid prototyping, then allowing the API to be gradually formalized by decorating Request DTO's with its supported usage, whilst allowing complete freedom in either utilizing and extending AutoQuery's built-in functionality or replacing it entirely without breaking the Service Contract.

### AutoQuery Services are ServiceStack Services

An important point worthy of highlighting is that AutoQuery Services are just normal ServiceStack Services, utilizing the same [Request Pipeline](/order-of-operations), which can be mapped to any [user-defined route](/routing), is available in all [registered formats](/formats) and can be [consumed from existing typed Service Clients](/clients-overview). 

In addition to leveraging ServiceStack's existing functionality, maximizing re-use in this way reduces the cognitive overhead required for developers who can re-use their existing knowledge in implementing, customizing, introspecting and consuming ServiceStack services. 

### [AutoQuery RDBMS](/autoquery-rdbms)

Enables the rapid development of high-performance, fully-queryable typed RDBMS data-driven services and [supports most major Relational Databases](https://github.com/ServiceStack/ServiceStack.OrmLite#8-flavours-of-ormlite-is-on-nuget)

### [AutoQuery Data](/autoquery-data) Sources

AutoQuery Data's Open Provider model supports multiple back-end data sources. The 3 data source providers available include:

 - [AutoQuery Memory](/autoquery-memory) - for querying static or dynamic in-memory .NET collections, some example uses include showing querying a flat-file **.csv** file and querying a throttled 3rd Party API with it's built-in configurable caching.
 - [AutoQuery Service](/autoquery-service) - a step higher than `MemorySource` where you can decorate the response of existing Services with AutoQuery's rich querying capabilities.
 - [AutoQuery DynamoDB](/autoquery-dynamodb) - adds rich querying capabilities over an AWS DynamoDB Table, offering a giant leap of productivity than constructing DynamoDB queries manually.

## [ServiceStack Studio](/studio)

If you're just getting started AutoQuery we also recommend using [ServiceStack Studio](/studio) Desktop App which provides an instant UI to quickly browse and query all your AutoQuery Services that provides a fast way to explore AutoQuery features and construct AutoQuery requests through a Simple UI.

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-home.png)](https://youtu.be/2FFRLxs7orU)

::: info YouTube 
[youtu.be/2FFRLxs7orU](https://youtu.be/2FFRLxs7orU)
:::

# AutoQuery Examples

### Live AutoQuery Viewer Examples

- [http://github.servicestack.net/ss_admin/](http://github.servicestack.net/ss_admin/)
- [http://northwind.netcore.io/ss_admin/](http://northwind.netcore.io/ss_admin/)
- [http://stackapis.netcore.io/ss_admin/](http://stackapis.netcore.io/ss_admin/)

## [Northwind](https://github.com/ServiceStackApps/Northwind)

Northwind database viewer, showing how to easily expose read and cached view services of an internal dataset with ServiceStack + OrmLite

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/northwind.png)](http://northwind.netcore.io)

#### Features

 - [AutoQuery](/autoquery)
   - [Northwind AutoQuery DTOs](https://github.com/ServiceStackApps/Northwind/blob/master/src/Northwind/Northwind.ServiceModel/AutoQuery.cs)
   - [OrmLite Sqlite](https://github.com/ServiceStack/ServiceStack.OrmLite#download)

## [StackApis](https://github.com/ServiceStackApps/StackApis)

AngularJS Single Page App leveraging AutoQuery in <50 lines of JavaScript + 1 AutoQuery DTO 

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/stackapis.png)](http://stackapis.netcore.io)

#### Features

 - [AutoQuery](/autoquery)
   - [StackApis AutoQuery DTO](https://github.com/ServiceStackApps/StackApis#stackapis-autoquery-service)
   - [OrmLite Sqlite](https://github.com/ServiceStack/ServiceStack.OrmLite#download)

## [AutoQuery Viewer](https://github.com/ServiceStackApps/AutoQueryViewer)

AutoQuery Viewer is a native iPad App that provides an automatic UI for browsing, inspecting and querying any publicly accessible [ServiceStack AutoQuery Service](/autoquery) from an iPad.

[![AutoQuery Viewer on AppStore](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/autoquery/autoqueryviewer-appstore.png)](https://itunes.apple.com/us/app/autoquery-viewer/id968625288?ls=1&mt=8)

#### Features

  - [TechStacks AutoQuery DTOs](https://github.com/ServiceStackApps/AutoQueryViewer#techstacks-autoquery-reqeust-dtos)  
  - [GitHub AutoQuery DTOs](https://github.com/ServiceStackApps/AutoQueryViewer#githubautoquery-request-dtos)  
  - [Stack Apis AutoQuery DTO](https://github.com/ServiceStackApps/AutoQueryViewer#stakapi-autoquery-request-dto)  

## [TechStacks Cocoa OSX Desktop App](https://github.com/ServiceStackApps/TechStacksDesktopApp)

TechStacks OSX Desktop App is built around 2 AutoQuery Services showing how much querying functionality [AutoQuery Services](/autoquery) provides for free and how easy they are to call with [ServiceStack's new support for Swift and XCode](/swift-add-servicestack-reference).

[![TechStack Desktop Search Fields](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/techstacks-desktop-field.png)](https://github.com/ServiceStackApps/TechStacksDesktopApp)
