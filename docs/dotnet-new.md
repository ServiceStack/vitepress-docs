---
slug: dotnet-new
title: Create new Projects with 'x new'
---
<script setup>
import webnewtable from './.vitepress/includes/web-new-netcore.md';
import corefxtable from './.vitepress/includes/web-new-corefx.md';
import netfxtable from './.vitepress/includes/web-new-netfx.md';
import webTrouble from './.vitepress/includes/web-trouble.md';
</script>

All ServiceStack Projects can be created using the .NET Core [x dotnet tool](https://www.nuget.org/packages/x):

```bash
$ dotnet tool install --global x 
```

If you had a previous version installed, update with:

```bash
$ dotnet tool update -g x
```

All features from the cross-platform `x` dotnet tool are also available from the [.NET Core Windows Desktop app](/netcore-windows-desktop) tool:

```bash
$ dotnet tool install --global app 
```

#### Usage

To view a list of projects run:

```bash
$ x new
```

Where it will display all repositories in [.NET Core](https://github.com/NetCoreTemplates), 
[.NET Framework](https://github.com/NetFrameworkTemplates) and 
[ASP.NET Core Framework](https://github.com/NetFrameworkCoreTemplates) GitHub Orgs:

<webnewtable />

<corefxtable />

<netfxtable />

#### Usage

```bash
$ x new `<template>` `<name>`
```

For example to create a new **Vue Single Page App**, run:

```bash
$ x new vue-spa ProjectName
```

Alternatively you can write new project files directly into an empty repository using the Directory Name as the ProjectName:

```bash
$ git clone https://github.com/<User>/<ProjectName>.git
$ cd <ProjectName>
$ x new vue-spa
```

Or download a customized project template from our Getting Started Page:

#### [servicestack.net/start](https://servicestack.net/start)

## Modernized Project Templates

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/spa-templates-overview.png)

The ASP.NET Core Project Templates have been upgraded to use the latest external dependencies and have all been rewritten to take advantage
of the ServiceStack Features added in this release, namely:

 - **[Modular Startup](/modular-startup)** - ASP.NET Core Apps can take advantage of the modularity benefits and extensibility of `mix` features
 - **[Navigation Items](/navigation)** - Simplified maintenance and dynamic navigation items rendering using Navigation controls
 - **Auth Enabled** - Integrated Auth including dynamic menu, protected pages, auth redirect flow inc. Forbidden pages
 - **[SVG](/svg)** - Pre-configured to use `svg/` folder, ready to drop in your App's assets and go
 - **[Optimal Library Bundles](/html-css-and-javascript-minification)** - CSS/JS bundles are split into optimal hashed library and frequently changing App bundles
 - **SSL** - As it's recommended for Web Apps to use SSL, all templates now use `https://localhost:5001` and 
 configured to use Same Site Cookies by default

### Auth Enabled Project Templates

Most Project Templates are now integrated with Credentials Auth and Facebook, Google and Facebook 3rd Party OAuth providers, complete with
protected Pages and Services and auth redirect flow to Sign In and Forbidden pages. 

#### vue-spa

Vue CLI Bootstrap App

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-spa.png)](https://github.com/NetCoreTemplates/vue-spa)

```bash
$ x new vue-spa ProjectName                # .NET 5
$ x new vue-spa-netfx ProjectName          # Classic ASP.NET on .NET Framework
```

#### react-spa

React Create App CLI Bootstrap App

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/react-spa.png)](https://github.com/NetCoreTemplates/react-spa)

```bash
$ x new react-spa ProjectName              # .NET 5
$ x new react-spa-netfx ProjectName        # Classic ASP.NET on .NET Framework
```

#### svelte-spa

Svelte SPA App with Bootstrap

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/svelte-spa.png)](https://github.com/NetCoreTemplates/svelte-spa)

```bash
$ x new /svelte-spa ProjectName            # .NET 5
```

#### angular-spa

Angular 12 CLI Bootstrap App

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/angular-spa.png)](https://github.com/NetCoreTemplates/angular-spa)

```bash
$ x new angular-spa ProjectName            # .NET 5
$ x new angular-spa-netfx ProjectName      # Classic ASP.NET on .NET Framework
```

#### mvcauth

.NET 5.0 MVC Website integrated with ServiceStack Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcauth.png)](https://github.com/NetCoreTemplates/mvcauth)

```bash
$ x new mvcauth ProjectName                # .NET 5
```

#### mvcidentity

.NET 5.0 MVC Website integrated with ServiceStack using MVC Identity Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentity.png)](https://github.com/NetCoreTemplates/mvcidentity)

```bash
$ x new mvcidentity ProjectName            # .NET 5
```

#### mvcidentityserver

.NET 5.0 MVC Website integrated with ServiceStack using IdentityServer4 Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentityserver.png)](https://github.com/NetCoreTemplates/mvcidentityserver)

```bash
$ x new mvcidentityserver ProjectName      # .NET 5
```

#### react-lite

ASP.NET Core Simple + lite (npm-free) React SPA using TypeScript

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/react-lite.png)](https://github.com/NetCoreTemplates/react-lite)

```bash
$ x new react-lite ProjectName             # .NET 5
$ x new react-lite-corefx ProjectName      # ASP.NET Core on .NET Framework
```

#### vue-lite

ASP.NET Core Simple + lite (npm-free) Vue SPA using TypeScript

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-lite.png)](https://github.com/NetCoreTemplates/vue-lite)

```bash
$ x new vue-lite ProjectName               # .NET 5
$ x new vue-lite-corefx ProjectName        # ASP.NET Core on .NET Framework
```

#### vue-nuxt

Nuxt.js SPA App with Bootstrap

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-nuxt.png)](https://github.com/NetCoreTemplates/vue-nuxt)

```bash
$ x new vue-nuxt ProjectName               # .NET 5
$ x new vue-nuxt-netfx ProjectName         # Classic ASP.NET on .NET Framework
```

#### script

`#Script` Pages Bootstrap Website

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/script.png)](https://github.com/NetCoreTemplates/script)

```bash
$ x new script ProjectName                 # .NET 5
$ x new script-corefx ProjectName          # ASP.NET Core on .NET Framework
$ x new script-netfx ProjectName           # Classic ASP.NET on .NET Framework
```

#### razor

ServiceStack.Razor Bootstrap Website

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/razor.png)](https://github.com/NetCoreTemplates/razor)

```bash
$ x new razor ProjectName                  # .NET 5
$ x new razor-corefx ProjectName           # ASP.NET Core on .NET Framework
$ x new razor-netfx ProjectName            # Classic ASP.NET on .NET Framework
```

### Create Customized Projects with mix

All new projects can be further customized with [mix](/mix-tool) dotnet tool to mix in additional "layered" features.

## Why a new project template system?

It's not often that a tool causes enough friction that it ends up requiring less effort to develop a replacement than 
it is to continue using the tool. But this has been our experience with maintaining our VS.NET Templates in the 
[ServiceStackVS](https://github.com/ServiceStack/ServiceStackVS) VS.NET Extension which has been the biggest time sink of all our
3rd Party Integrations where the iteration time to check in a change, wait for CI build, uninstall/re-install the VS.NET extension 
and create and test new projects is measured in hours not minutes. To top off the poor development experience we've now appeared to have 
reached the limits of the number of Project Templates we can bundle in our 5MB **ServiceStackVS.vsix** VS.NET Extension as a 
number of Customers have reported seeing VS.NET warning messages that ServiceStackVS is taking too long to load.

Given all the scenarios ServiceStack can be used in, we needed a quicker way to create, update and test our growing **47 starting project templates**. 
In the age of simple command-line dev tools like git and .NET Core's light weight text/human friendly projects, maintaining and creating 
new .NET project templates still feels archaic & legacy requiring packaging projects as binary blobs in NuGet packages which become stale 
the moment they're created.

## How it works

### GitHub powered Project Templates

Especially for SPA projects which need to be frequently updated, the existing .NET Project Templates system is a stale solution that doesn't offer 
much benefit over maintaining individual GitHub projects, which is exactly what the `dotnet-new` npm tool and now `x new` .NET Core are designed around.

Inside [dotnet-new](/dotnet-new) and `x new` is an easier way to create and share any kind of project templates which are easier for developers
to create, test, maintain and install. So if you're looking for a simpler way to be able to create and maintain your own value-added project templates 
with additional bespoke customizations, functionality, dependencies and configuration, using `x new` is a great way to maintain and share them.

Using GitHub for maintaining project templates yields us a lot of natural benefits:

 - Uses the same familiar development workflow to create and update Project Templates
 - Git commit history provides a public audit trail of changes
 - Publish new versions of project templates by creating a new GitHub release
 - Compare changes between Project Templates using GitHub's compare changes viewer
 - Browse and Restore Previous Project Releases
 - End users can raise issues with individual project templates and send PR contributions

A quick way to get started is to fork one of the existing [.NET Project Templates](https://github.com/NetCoreTemplates/) like the [web](https://github.com/NetCoreTemplates/web) or [empty](https://github.com/NetCoreTemplates/empty) templates.

### Always up to date

Importantly end users will always be able to view the latest list of project templates and create projects using the latest available version, 
even if using older versions of the tools as they query GitHub's public APIs to list all currently available projects that for installation
will use the latest published release (or **master** if there are no published releases), which if available, downloads, caches and 
creates new projects from the latest published `.zip` release.

### Just regular Projects

Best of all creating and testing projects are now much easier since project templates are just working projects following a simple naming convention
that when a new project is created with:

```bash
$ x new <template> ProjectName
```

### Install directly from your GitHub repo

To create projects from your own GitHub projects use its qualified `user/repo` name, e.g:

```bash
$ x new <user>/<repo> ProjectName
```

Replaces all occurrences in all text files, file and directory names, where:

 - `My_App` is replaced with `Project_Name`
 - `MyApp` is replaced with `ProjectName`
 - `My App` is replaced with `Project Name`
 - `my-app` is replaced with `project-name`
 - `myapp` is replaced with `projectname`
 - `my_app` is replaced with `project_name`

The tool installer then inspects the project contents and depending on what it finds will:

 - Restore the .NET `.sln` if it exists
 - Install npm packages if `package.json` exists
 - Install libman packages if `libman.json` exists

That after installation is complete, results in newly created projects being all setup and ready to run.

### Available project templates

One missing detail is how it finds which GitHub repo should be installed from the `<template>` name. 

This can be configured with the `APP_SOURCE_TEMPLATES` Environment variable to configure the `x` tool to use your own GitHub organizations instead, e.g:

```
APP_SOURCE_TEMPLATES=NetCoreTemplates;NetFrameworkTemplates;NetFrameworkCoreTemplates
```

Optionally you can display a friendly name next to each Organization name, e.g:

```
APP_SOURCE_TEMPLATES=NetCoreTemplates .NET Core C# Templates;
```

`x new` will then use the first GitHub Repo that matches the `<template>` name from all your GitHub Sources, so this
does require that all repos have unique names across all your configured GitHub Sources.

These are the only sources `x new` looks at to create ServiceStack projects, which by default is configured to use 
[NetCoreTemplates](https://github.com/NetCoreTemplates), [NetFrameworkTemplates](https://github.com/NetFrameworkTemplates) and 
[NetFrameworkCoreTemplates](https://github.com/NetFrameworkCoreTemplates) GitHub Organizations, whose repos will be listed when running:

```bash
$ x new
```

<webTrouble></webTrouble>
