---
slug: templates-nuxt
title: Nuxt Project Templates
---

[Nuxt.js](https://nuxtjs.org) is an exciting opinionated structured framework for rapidly developing Web Applications in a single unified solution pre-configured with Vue's high-quality components that abstracts away the complex build systems of Webpack powered JS Apps.

If you've been intimidated with amount of complexity and knowledge required to develop an App using one of the major JS frameworks, we highly recommend evaluating Nuxt.js. Nuxt is an opinionated framework that integrates the most popular Vue components together in a pre-configured solution. It's like developing within guard rails where it lets you develop entire websites using just [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html) placed in a [conventional file and directory structure](https://nuxtjs.org/guide/routing) where Nuxt will take care of managing the routing and abstracts away the build configuration to generate optimal production builds where it employs advanced packaging techniques like automatic code splitting, link prefetching, SPA navigation of statically-generated cacheable assets and integrated support for ES6/7 transpilation, linting and js/css bundling and minification.

Its watched builds enables Hot Module Replacement to enable the optimal development experience where it you will be able to see changes in real-time without needing to manually build or refresh pages. The Nuxt templates are also configured to support [.NET Core's watched builds](/templates-websites#watched-net-core-builds) which automatically detects changes to your .NET Core App and re-compiles and restarts them with the new changes. 

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-nuxt.png)](https://github.com/NetCoreTemplates/vue-nuxt)

### ServiceStack Integration

Whilst Nuxt and ServiceStack are 2 different frameworks, we've combined them in a single seamlessly integrated .NET Core project. ServiceStack shines here where as the [TypeScript JsonServiceClient](/typescript-add-servicestack-reference#typescript-serviceclient) utilizes ServiceStack's [pre-defined Routes](/routing#pre-defined-routes) we can proxy all JSON API requests to our .NET Core App with a single config in [nuxt.config.js](https://github.com/NetCoreTemplates/vue-nuxt/blob/master/MyApp/nuxt.config.js) and an additional entry to proxy links to any configured [OAuth Providers](/authentication-and-authorization#oauth-providers):

```js
  proxy: {
    '/json': 'http://localhost:5000/',
    '/auth': 'http://localhost:5000/',
  },
```

This lets us use Nuxt's Web Dev Server during development to take advantage of its incremental compilation, Live Reloading and instant UI updates. 

### Nuxt Templates 

There are 2 variants of Nuxt templates available for both .NET Core and .NET Framework:

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-nuxt.png)](https://github.com/NetCoreTemplates/vue-nuxt)

#### .NET Core

  - [vue-nuxt](https://github.com/NetCoreTemplates/vue-nuxt) - Vue + Nuxt
  - [vuetify-nuxt](https://github.com/NetCoreTemplates/vuetify-nuxt) - Vue + Nuxt + Vuetify

#### .NET Framework

  - [vue-nuxt-netfx](https://github.com/NetFrameworkTemplates/vue-nuxt-netfx) - Vue + Nuxt
  - [vuetify-nuxt-netfx](https://github.com/NetFrameworkTemplates/vuetify-nuxt-netfx) - Vue + Nuxt + Vuetify

### Getting Started 

To experience App development with Nuxt.js, create a new Nuxt Project using [x new](/web-new):

```bash
$ x new vue-nuxt ProjectName
```

Download npm and .NET Core dependencies:

```bash
$ npm install
$ dotnet restore
```

### Dev Workflow

Start a [watched .NET Core build](/templates-websites#watched-net-core-builds) in the background from the command-line with:

```bash
$ dotnet watch run
```

In a new terminal window start a watched Nuxt dev server build with:

```bash
$ npm run dev
```

Then open `http://localhost:3000` in your browser to view your App served directly from Nuxt's dev server which will proxy all Server requests to ServiceStack Server running on `http://localhost:5000`. Any changes you make to your front-end will be automatically re-compiled and reloaded by the watched `Nuxt` build whilst any changes to your Server app will be automatically be rebuilt and restarted by the watched `dotnet` process.

### Update DTOs

Whilst Nuxt is a JavaScript (ES 6/7) App it still benefits from ServiceStack's [TypeScript Add Reference feature](/typescript-add-servicestack-reference) where you can generate typed DTOs with the `dtos` npm script:

```bash
$ npm run dtos
```

This will update the Servers `dtos.ts` and generate its corresponding `dtos.js` which can be natively imported as seen in 
[gateway.js](https://github.com/NetCoreTemplates/vue-nuxt/blob/master/MyApp/src/shared/gateway.js#L3). Despite the App not being built with TypeScript, developing using a "TypeScript-aware" IDE like VS Code will still be able to utilize the generated `dtos.ts` to provide a rich intelli-sense experience.

### Generate Static Production Build

Most of the time during development you'll be viewing your App through Nuxt's dev server to take advantage of it's instant UI updates. At any time you can also view a production build of your App with:

```bash
$ npm run build
```

This will generate a static encapsulated production build of your App in .NET Core's `/wwwroot` which you can view served from your ServiceStack Server App directly at:

 - [http://localhost:5000](http://localhost:5000)


### Publishing App for Deployment

To create a complete client and server build of your App run:

```bash
$ npm run publish
```

This publishes your App to `bin/Release/netcoreapp3.1/publish` that can then be deployed like any normal .NET Core App.

### Host static content on Netlify's CDN for free

One of the advantages of using Nuxt is that it generates a front-end UI with static `.html` files for all pages. This allows the static content of your Web App to be cleanly decoupled from your back-end your Server App and hosted independently on a CDN. Netlify makes this effortless where you can [Sign In with your GitHub account](https://app.netlify.com/signup) and get it to create a new Site from a GitHub repository where you can tell it to host the static content in your .NET Core Apps `/wwwroot` folder on its CDN. It also synchronizes updates with every check-in so it automatically updates whenever you check-in a new version of your .NET Core project. 

Netlify has built first-class support for hosting Single Page Apps like Nuxt where it lets you check-in a [simple _redirects file](https://www.netlify.com/docs/redirects/) with all routes you want to be served by your .NET Core App and it will transparently proxy any API requests to your back-end server without needing to enable CORS. So the same .NET Core App that runs locally will be able to run without code changes when deployed despite having all its bandwidth intensive content served directly from Netlify's CDN. This opens up a nice scalability option for your App Servers, maximizing their efficiency as .NET Core Apps just ends up serving dynamic JSON API requests.
