---
slug: templates-svelte
title: Svelte Project Templates
---

[Svelte](https://svelte.dev/) is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.

[Read the introductory blog post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) to learn more.

## Svelte .NET Core Single Page App Templates

.NET 5.0 svelte v3 rollup App Project Template integrated with ServiceStack Services and built-in Routing, User Registration and Sign Up forms.

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/svelte-spa.png)](http://svelte-spa.web-templates.io/)

> Browse [source code](https://github.com/NetCoreTemplates/svelte-spa), view live demo [svelte-spa.web-templates.io](http://svelte-spa.web-templates.io) and install with [dotnet-new](https://docs.servicestack.net/dotnet-new):

```bash
$ dotnet tool install -g x
```

```bash
$ x new svelte-spa ProjectName
```

## Development workflow

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/screencasts/svelte-spa-youtube.png)](https://youtu.be/cKlFABFECnQ)

> [YouTube Demo](https://youtu.be/cKlFABFECnQ)

Run the `dev` npm script or Gulp task and leave it running in the background:

```bash
$ npm run dev
```

This initially generates a full development build of your Web App then stays running in the background to process files as they’re changed. This enables the normal dev workflow of running your ASP.NET Web App, saving changes locally which are then reloaded using ServiceStack’s built-in hot reloading. Alternatively hitting `F5` will refresh the page and view the latest changes.

Each change updates the output dev resources so even if you stop the dev task your Web App remains in a working state that’s viewable when running the ASP.NET Web App.

### Watched .NET Core builds

.NET Core projects can also benefit from Live Coding using dotnet watch which performs a “watched build” where it automatically stops, recompiles and restarts your .NET Core App when it detects source file changes. You can start a watched build from the command-line with:

```bash
$ dotnet watch run
```

### Create a production build

Run the `build` npm script or gulp task to generate a static production build of your App saved to your .NET App's `/wwwroot` folder:

```bash
$ npm run build
```

This will let you run the production build of your App that's hosted by your .NET App.

### Updating Server TypeScript DTOs

Run the `dtos` npm script or Gulp task to update your server dtos in `/src/dtos.ts`:

```bash
$ npm run dtos
```

### Deployments

When your App is ready to deploy, run the `publish` npm (or Gulp) script to package your App for deployment:

```bash
$ npm run publish
```

Which will create a production build of your App which then runs `dotnet publish -c Release` to Publish a Release build of your App in the `/bin/netcoreapp3.1/publish` folder which can then copied to remote server or an included in a Docker container to deploy your App.

## Svelte template

This project was bootstrapped with [sveltejs/template](https://github.com/sveltejs/template). To learn more about Svelte we recommend going through 
[Svelte's interactive tutorial](https://svelte.dev/tutorial/basics).
