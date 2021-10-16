---
title: VS.NET Project Templates
slug: templates-overview
---

ServiceStack has its strong foundations as a Web and MQ Services framework whose [easy and versatile HTML support](http://razor.servicestack.net/) makes it the ideal services framework to create Backend Systems and Web APIs, Websites, Single Page Apps, Windows Services, Self-Hosting Console Apps and Rich OSX and Winforms Desktop Apps.

## x new

All ServiceStack Project Templates can be found and installed using the [x new](/web-new) .NET Core tool that can be installed with:

```bash
$ dotnet tool install --global x 
```

Then run `x new` to view the list of available project templates:

```bash
$ x new
```

To upgrade to the latest version, run:

```bash
$ dotnet tool update -g x
```

## VS.NET Templates

A limited selection of .NET Framework project templates can also be created inside VS.NET using the 
[ServiceStackVS VS.NET Extension](/templates-overview#servicestackvs-vsnet-extension)

![ServiceStack VS.NET Templates Dialog](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/new-projects-dialog.png)

 - [ServiceStack ASP.NET Empty](/create-your-first-webservice)
 - [ServiceStack ASP.NET MVC4](https://github.com/ServiceStackApps/SocialBootstrapApi)
 - [ServiceStack ASP.NET Razor with Bootstrap](https://github.com/ServiceStackApps/EmailContacts)
 - [ServiceStack ASP.NET Sharp Pages with Bootstrap](https://sharpscript.net/docs/sharp-pages)
 - [Self Host Empty](/self-hosting)
 - [Self Host with Razor](http://razor.servicestack.net/#runs-everywhere)
 - [Windows Service Empty](/templates-windows-service)
 - [ASP.NET Empty](/templates-aspnet-empty)
 - [AngularJS 1.5 App](/templates-angularjs-v15)

### Visual Studio 2019

The latest **ServiceStackVS** from v2+ includes support for Visual Studio 2019:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/vs2019-install-vue.gif)

### Visual Studio 2015 or 2013

If you're still using VS.NET 2015 or 2013 you can use the earlier VS.NET ServiceStackVS extension:

 - [ServiceStackVS.vsix](https://github.com/ServiceStack/ServiceStackVS/raw/master/dist/2018/ServiceStackVS.vsix)


## Available Project Templates

ServiceStack is available in a number of popular starting configurations below:

### Webpack-powered Single Page App Templates

All [VS.NET Single Page App templates](/templates-single-page-apps) are powered by [Webpack](https://webpack.js.org) which handles the development, testing and production builds of your Web App. See the [Webpack Template Docs](/templates-single-page-apps) for an overview for how to utilize the templates features.

The [ServiceStackVS VS.NET extension](#servicestackvs-vsnet-extension) contains a pre-configured Single Page App VS.NET template for each of the popular JavaScript frameworks:

 - Angular App
 - Aurelia App
 - React App
 - React Desktop Apps
 - Vue App
 - AngularJS 1.5 Lite App

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/spa-templates-overview.png)](/templates-single-page-apps)


### [Vue SPA Template](https://github.com/NetCoreTemplates/vue-spa)

<iframe width="896" height="525" src="https://www.youtube.com/embed/4HphWPrKwb0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

> YouTube: [https://youtu.be/4HphWPrKwb0](https://youtu.be/4HphWPrKwb0)

### [AWS Lambda Template](https://github.com/NetCoreTemplates/aws-lambda)

This project lets you create a .NET 5 empty ServiceStack web project ready for deployment as a AWS Lambda Function wired with API GateWay and packaged via a Docker image.

<iframe width="896" height="525" src="https://www.youtube.com/embed/8mpGNTsSlvE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

> YouTube: [https://youtu.be/8mpGNTsSlvE](https://youtu.be/8mpGNTsSlvE)

### Website Templates

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/web.png)

[Website Templates](/templates-websites) contain popular starting Templates for creating Server HTML Generated Websites and HTTP APIs with ServiceStack.

### Empty Starting Templates

[Empty Web and Self Hosting Console and Windows Service Templates](/templates-websites).

### ASP.NET Core Web Apps on .NET Framework

Popular starting templates for creating [ASP.NET Core templates on the .NET Framework](/templates-corefx).

### Desktop Templates

[Desktop Templates](/templates-desktop) for packaging your ServiceStack Web App into different Native Desktop UIs.

## ServiceStackVS VS.NET Extension

[ServiceStackVS](https://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7) supports Visual Studio 2017, 2015 and 2013 and can be installed from within VS.NET:

### Install ServiceStackVS 

Install the ServiceStackVS VS.NET Extension by going to `Tools > Extensions and Updates...`

[![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/tools_extensions.png)](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/tools_extensions.png)

Then searching the Visual Studio Gallery for **ServiceStack**

[![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/search_download.png)](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/search_download.png)

Optionally it can be downloaded and installed from the [VS.NET Gallery](http://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7)

[![VS.NET Gallery Download](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/servicestackvs/vsgallery-download.png)](http://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7)

## Example Projects

The Example projects below contain a working demo including further documentation about each of their templates they were built with:

### TypeScript React VS.NET Template

[TypeScript React Template](https://github.com/ServiceStackApps/typescript-react-template/) incorporates today's best-in-class 
technologies for developing rich, complex JavaScript Apps within VS.NET and encapsulated within ServiceStack's new
[TypeScript React VS.NET Template](https://github.com/ServiceStackApps/typescript-react-template/)
providing an instant integrated client and .NET server solution where you'll be immediately productive 
out-of-the-box whilst enabling an optimal iterative development experience with pre-configured Gulp tasks 
that takes care of effortlessly packaging, bundling and deploying your next App. 

### React Desktop Apps

[React Desktop Apps](https://github.com/ServiceStackApps/ReactDesktopApps) take advantage of the adaptability, navigation and deep-linking benefits of a Web-based UI, the productivity and responsiveness of the 
[React framework](https://facebook.github.io/react/),
the performance, rich features and functionality contained in 
[ServiceStack](https://github.com/ServiceStack/ServiceStack/wiki) and the .NET Framework combined with the native experience and OS Integration possible from a Native Desktop App - all within a single VS .NET template!

### React App Template

The [ReactJS App VS.NET Template](https://github.com/ServiceStackApps/ReactChat) enables an optimal iterative dev experience for creating optimized Single Page React.js Apps. It shares the same approach for developing modern Single Page Apps in VS.NET as the [AngularJS App Template](https://github.com/ServiceStack/ServiceStackVS/blob/master/docs/angular-spa.md) by leveraging the node.js ecosystem for managing all aspects of Client App development and using the best-in-class libraries.

### AngularJS App Template

The [AngularJS App](https://github.com/ServiceStack/ServiceStackVS/blob/master/docs/angular-spa.md) template in [ServiceStackVS](/create-your-first-webservice) provides a modern opinionated web technology stack for developing rich Single Page Apps with [AngularJS](https://angularjs.org) and ServiceStack.

### [Integrated HTML, CSS and JavaScript Minifiers](/html-css-and-javascript-minification)

For normal server-generated websites that don't leverage Webpack to bundle their outputs you can take advantage of ServiceStack's integrated and non-invasive minification features to effortlessly enable [HTML, CSS and JavaScript minification to your existing Website](/html-css-and-javascript-minification).


# Community Resources

  - [Hosting an ember-cli app inside a ServiceStack (or any) MVC app](http://iwayneo.blogspot.co.uk/2014/10/hosting-ember-cli-app-inside.html) by [@wayne_douglas](https://twitter.com/wayne_douglas)
  - [ServiceStack + AngularDart - Getting Started](http://www.layoric.org/2014/01/servicestack-angulardart-getting-started.html) by [@layoric](https://twitter.com/layoric)
  - [License manager for Portable.Licensing using AngularJS and ServiceStack](https://github.com/dnauck/License.Manager) by [@dnauck](https://github.com/dnauck)
  - [StarBucks-like real-time ordering fulfillment Single Page App built with ServiceStack, AngularJS, SignalR and Redis](https://github.com/paaschpa/ordersDemo) by [@paaschpa](https://twitter.com/paaschpa) 
  - [Some thoughts in between SPA projects](http://joeriks.com/2013/05/02/some-thoughts-in-between-spa-projects/) by [@joeriks](https://twitter.com/joeriks)
  - [Zippy Tips Working With ServiceStack, Backbone.js, jQuery & Mono-Develop on Mac](http://openlandscape.net/2011/07/30/zippy-tips-working-with-servicestack-backbone-js-jquery-mono-develop-on-mac/) by [Jacques du Preez](http://openlandscape.net/about/)

## Example Single Page App Projects

  - [Meal planning per configured interval powered by AngularJS, Bower and GruntJS](https://github.com/bradgearon/whats-cookin)
  - [Backbone.js + Twitter Social Bootstrap API](https://github.com/ServiceStack/SocialBootstrapApi/)
  - [StackOverflow clone with Redis back-end](http://www.servicestack.net/RedisStackOverflow/)
  - [Redis Admin UI built with Google Closure Library](http://www.servicestack.net/RedisAdminUI/AjaxClient/)
  - [Backbone Todos with Redis back-end](http://www.servicestack.net/Backbone.Todos/)
  - [GitHub-like browser with complete remote file management over REST](http://www.servicestack.net/RestFiles/#!files)
  - [ServiceStack Docs with PushState support](http://www.servicestack.net/docs/)
  - [Angular JS View in RazorRockstars](http://razor.servicestack.net/rockstars?View=AngularJS)
