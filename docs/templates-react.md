---
slug: templates-react
title: React Project Templates
---

[React](https://reactjs.org) is a very popular JavaScript Library developed by Facebook to simplify creating complex UIs through use of 
declarative encapsulated components which can be used to build both Web and Native iOS/Android Applications with 
[React Native](https://facebook.github.io/react-native/).

## React .NET Core and .NET Framework Single Page App Templates

The templates below have been
[seamlessly integrated](https://docs.servicestack.net/templates-single-page-apps#end-to-end-typed-apis) into 
ServiceStack's [Recommended Physical Project Structure](/physical-project-structure). 

See the documentation in each project for more info on features of each template:

### [React 16 SPA Template](https://github.com/NetCoreTemplates/react-spa)

Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/react-spa.png)](https://github.com/NetCoreTemplates/react-spa)

> Live Demo: [react-spa.web-templates.io](http://react-spa.web-templates.io)

Create new React 16 Project for .NET 5.0:

    $ x new react-spa ProjectName

Create new React 16 Project for .NET Framework:

    $ x new react-spa-netfx ProjectName

### [React Desktop Apps Template](https://github.com/NetFrameworkTemplates/react-desktop-apps-netfx)

The React Desktop Template is a single VS .NET template which supports packaging your Web App into 4 different ASP.NET, Winforms, OSX Cocoa 
and cross-platform Console App Hosts:

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/react-desktop-apps-netfx.png)](https://github.com/NetFrameworkTemplates/react-desktop-apps-netfx)

> Live Demo: [react-desktop-apps-netfx.web-templates.io](http://react-desktop-apps-netfx.web-templates.io)

Create new React Project for .NET Framework:

    $ x new react-desktop-apps-netfx ProjectName

---

# React Examples

## [Gistlyn](https://github.com/ServiceStack/Gistlyn) - a C# Gist IDE powered by Roslyn

Gistlyn is the ultimate collaborative tool for trying out and exploring C# and .NET libraries on NuGet 
from a zero install - modern browser. It's ideal for use as a companion tool for trying out libraries during 
development or on the go from the comfort of your iPad by going to [gistlyn.com](http://gistlyn.com). 

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/gistlyn/home-screenshot.png)](http://gistlyn.com)
> Live Demo: [gistlyn.com](http://gistlyn.com)

## [Web, Node.js and React Native ServerEvents Apps](https://github.com/ServiceStackApps/typescript-server-events)

Using TypeScript ServerEvents Client to create real-time Web, node.js server and React Native Mobile Apps:

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/typescript-serverevents/typescript-server-events-banner.png)](https://github.com/ServiceStackApps/typescript-server-events)

## [React Chat](https://github.com/ServiceStackApps/ReactChat)

React Chat is a port of [ServiceStack Chat](https://github.com/ServiceStackApps/Chat) ES5, jQuery Server Events 
demo into a [TypeScript](http://www.typescriptlang.org/), [React](http://facebook.github.io/react/) and 
[Redux](https://github.com/reactjs/redux) App:

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/chat-react/screenshot.png)

Developed using the latest [TypeScript + Redux + JSPM + Gulp](https://github.com/ServiceStackApps/typescript-react-template/) VS.NET Template

### [Networked Time Traveller Shape Creator](https://github.com/ServiceStackApps/typescript-redux#example-9---real-time-networked-time-traveller)

A network-enhanced version of the
[stand-alone Time Traveller Shape Creator](https://github.com/ServiceStackApps/typescript-redux#example-8---time-travelling-using-state-snapshots)
that allows users to **connect to** and **watch** other users using the App in real-time similar 
to how users can use Remote Desktop to watch another computer's screen: 

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/redux-chrome-safari.png)](http://redux.servicestack.net)

> Live demo: http://redux.servicestack.net

The client code required to enable real-time communication is encapsulated within a single 
[React Connect component](https://github.com/ServiceStackApps/typescript-redux/blob/master/src/TypeScriptRedux/src/example09/Connect.tsx)
whilst the server implementation is only comprised of 
[2 simple Server Event Services](https://github.com/ServiceStackApps/typescript-redux/blob/master/src/TypeScriptRedux/Global.asax.cs)
that lets users publish their actions to a channel or send a direct message to another User.

## [Redis React](https://github.com/ServiceStackApps/RedisReact)

Redis React is a simple user-friendly UI for browsing data in Redis servers that leverages 
the navigation and deep-linking benefits of a Web-based UI, the productivity and responsiveness of the 
[React framework](http://facebook.github.io/react/) 
and deep Integration possible from a Native App.

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/redis-react/home.png)](http://redisreact.servicestack.net/#/)

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/redis-react/home.png)](http://redisreact.servicestack.net/#/)

> Downloads for [Windows, OSX, Linux and Web](https://github.com/ServiceStackApps/RedisReact#download)

## [React Chat Desktop](https://github.com/ServiceStackApps/ReactChatApps)

A port of 
[React Chat](https://github.com/ServiceStackApps/Chat-React)
built with the new 
[React Desktop Apps](https://github.com/ServiceStackApps/ReactDesktopApps)
VS.NET template and packaged into a native Desktop App for Windows and OSX.
It takes advantage of 
[Server Events](https://github.com/ServiceStack/ServiceStack/wiki/Server-Events) to enable synchronized 
real-time control of multiple Windows Apps:

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/react-desktop-apps/dancing-windows.png)](https://youtu.be/-9kVqdPbqOM)

> Downloads for [Windows, OSX, Linux and Web](https://github.com/ServiceStackApps/ReactChatApps#downloads)

## [React Desktop Apps](https://github.com/ServiceStackApps/ReactDesktopApps)

React Desktop Apps take advantage of the adaptability, navigation and deep-linking benefits of a Web-based UI, the productivity and responsiveness of the 
[React framework](https://facebook.github.io/react/),
the performance, rich features and functionality contained in 
[ServiceStack](https://github.com/ServiceStack/ServiceStack/wiki) and the .NET Framework combined with the native experience and OS Integration possible from a Native Desktop App - all within a single VS .NET template!

[![React Desktop Apps](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/gap/react-desktop-splash.png)](https://github.com/ServiceStackApps/ReactDesktopApps)

> Downloads for [Windows, OSX, Linux and Web](https://github.com/ServiceStackApps/ReactDesktopApps#downloads)
