---
slug: install-servicestackvs
title: Install ServiceStackVS
---

First we want to install [ServiceStackVS Visual Studio extension](http://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7). The easiest way to do this is to look for it from within Visual Studio by going to Tools->Extensions and Updates and searching the Visual Studio Gallery as seen below.

[![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/tools_extensions.png)](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/tools_extensions.png)

[![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/search_download.png)](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/search_download.png)

Optionally it can be downloaded and installed from the [VS.NET Gallery](http://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7)

[![VS.NET Gallery Download](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/servicestackvs/vsgallery-download.png)](http://visualstudiogallery.msdn.microsoft.com/5bd40817-0986-444d-a77d-482e43a48da7)

ServiceStackVS supports both VS.NET 2012-2015.

### VS.NET 2012 Prerequisites

  - VS.NET 2012 Users must install the [Microsoft Visual Studio Shell Redistributable](http://www.microsoft.com/en-au/download/details.aspx?id=40764)
  - It's also highly recommended to [Update to the latest NuGet](http://docs.nuget.org/docs/start-here/installing-nuget). 

> Alternatively if continuing to use an older version of the **NuGet Package Manager** you will need to click on **Enable NuGet Package Restore** after creating a new project to ensure its NuGet dependencies are installed.
