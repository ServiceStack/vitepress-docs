---
slug: javascript-client
title: JavaScript Client
---

Whilst you can use any of the multitude of Ajax libraries to consume ServiceStack's pure JSON REST APIs, leveraging
the [integrated TypeScript](/typescript-add-servicestack-reference) support still offers the best development UX 
for calling ServiceStack's JSON APIs in JavaScript where you can use the TypeScript `JsonServiceClient` with 
[TypeScript Add ServiceStack Reference](/typescript-add-servicestack-reference#typescript-serviceclient)
DTO's to get the same productive end-to-end Typed APIs available in ServiceStack's Typed .NET Clients, e.g:

```ts
let client = new JsonServiceClient(baseUrl);

client.get(new Hello({ Name: 'World' }))
  .then(r => console.log(r.Result));
```

### Using JavaScript Typed DTOs in Web Apps

To get started quickly you can use the `init` [mix gist](/mix-tool) to create an empty .NET 5 project:

    $ mkdir ProjectName && cd ProjectName
    $ x mix init

That uses the built-in `@servicestack/client` library's `JsonServiceClient` in a dependency-free Web Page:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/init.png)

With a single command you can update your App's TypeScript DTOs, compile them to JavaScript & move them to `/wwwroot`:

    $ npm run dtos

To use them in your Web Page create a basic UMD loader and include the UMD `@servicestack/client` library & `dtos.js`:

```html
<script>
  var exports = { __esModule:true }, module = { exports:exports }
  function require(name) { return exports[name] || window[name] }
</script>
<script src="/js/servicestack-client.js"></script>
<script src="/dtos.js"></script>
```

We can then import the library and DTO types in the global namespace to use them directly:

```js
Object.assign(window, exports) //import

var client = new JsonServiceClient()
client.get(new Hello({ name: name }))
    .then(function(r) {
        console.log(r.result)
    })
```

### Rich intelli-sense support

Even pure HTML/JS Apps that don't use TypeScript or any external dependencies will still benefit from the Server 
generated `dtos.ts` and `servicestack-client.d.ts` definitions as Smart IDEs like 
[Rider](https://www.jetbrains.com/rider/) can make use of them to provide a rich productive development UX
on both the built-in `/js/servicestack-client.js` library:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/init-rider-ts-client.png)

As well as your App's server generated DTOs:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/init-rider-ts-dto.png)

Including their typed partial constructors:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/init-rider-ts-dto-props.png)

So even simple Apps without complex bundling solutions or external dependencies can still benefit from a rich typed authoring 
experience without any additional build time or tooling complexity.

### CDN Resources

An CDN alternative to using the `@servicestack/client` built into `ServiceStack.dll` is to reference it from unpkg.com:

 - [https://unpkg.com/@servicestack/client](https://unpkg.com/@servicestack/client)

If needed for IDE intelli-sense, the TypeScript definition for the `@servicestack/client` is available from:

 - [https://unpkg.com/@servicestack/client/dist/index.d.ts](https://unpkg.com/@servicestack/client/dist/index.d.ts)

The npm-free [Vue and React lite Templates](/templates-lite) are some examples that makes use of the stand-alone `@servicestack/client` libraries.

### Using TypeScript JsonServiceClient in npm projects

The [/@servicestack/client](https://www.npmjs.com/package/@servicestack/client) follows the recommended guidance for TypeScript modules which doesn't 
bundle any TypeScript `.ts` source files, just the generated [index.js](https://unpkg.com/@servicestack/client) and 
[index.d.ts](https://unpkg.com/@servicestack/client@1.0.31/dist/index.d.ts) Type definitions which can be imported the same way in both JavaScript and TypeScript npm projects as any other module, e.g:

```js
import { JsonServiceClient } from "@servicestack/client";
```

Which can then be used with the generated DTOs from your API at [/types/typescript](https://techstacks.io/types/typescript) that can either be downloaded
and saved to a local file e.g. `dtos.ts` or preferably downloaded using the [x dotnet tool](/dotnet-tool)
to download the DTOs of a remote ServiceStack API with:

    $ npm install -g @servicestack/cli


    $ dotnet tool install --global x 
    $ x typescript http://yourdomain.org

For JavaScript projects that haven't configured transpilation of TypeScript, you'll need to use TypeScript to generate the `dtos.js` JavaScript version
which can be used instead:

    $ tsc dtos.ts 

Use the [--module compiler flag](https://www.typescriptlang.org/docs/handbook/compiler-options.html) if needing to generate a specific module version, e.g:

    $ tsc -m ES6 dtos.ts

The generated `dtos.js` can then be used with the `JsonServiceClient` to provide a succinct Typed API:

```js
import { GetConfig } from './dtos';

let client = new JsonServiceClient('/');

let response = await client.get(new GetConfig());
```

#### Updating DTOs

To update your generated DTOs when your server API changes, run `x typescript` or its shorter `x ts` alias without any arguments:

    $ x ts

Which will update to the latest version of `dtos.ts`. This can be easily automated with an [npm script][5], e.g:

```json
{
  "scripts": {
    "dtos": "cd path/to/dtos && x ts && tsc -m ES6 dtos.ts",
    }
}
```

Which will let you update and compile the dtos with:

    $ npm run dtos

The [TechStacks][6] (Vue/Nuxt) and [React Native Mobile App][7] (React) are examples of JavaScript-only projects using the TypeScript `JsonServiceClient` in this way.

### jQuery JsonServiceClient

We also provide our older jQuery JsonServiceClient which mimics the [.NET Clients](/clients-overview) in functionality that we make use of in our [Redis Admin UI](http://www.servicestack.net/RedisAdminUI/AjaxClient/) and suitable for use when needing to support older browsers without W3C's fetch or a polyfill:

  - [JsonServiceClient.js](https://github.com/ServiceStack/ServiceStack/blob/v5.4/lib/js/JsonServiceClient.js) - Pure JavaScript client
  - [JsonServiceClient.closure.js](https://github.com/ServiceStack/ServiceStack/blob/v5.4/lib/js/JsonServiceClient.closure.js) - a [Google Closure](https://developers.google.com/closure/) enabled version of the client allowing compilation and bundling within a Closure project

Although most dynamic languages like JavaScript already include support for HTTP and JSON where in most cases it's easier to just use the libraries already provided. Here are a couple of examples from [Backbones Todos](http://todos.netcore.io) and [Redis StackOverflow](http://redisstackoverflow.netcore.io) that uses jQuery to talk to back-end ServiceStack JSON services:

### Using jQuery Ajax APIs:

```javascript
$.getJSON("http://localhost/Backbone.Todo/todos", function(todos) {
    alert(todos.length == 1);
});

$.post("questions", { 
  UserId: authUser.Id, Title: title, Content: body, Tags: dtoTags 
}, refresh);
```

## JSV Service Client

In our pursuit to provide the fastest end-to-end communication we've also developed a JsvServiceClient in JavaScript that uses the [fast JSV Format](https://github.com/ServiceStackV3/mythz_blog/blob/master/pages/176.md):  

  - [JsvServiceClient.js](https://github.com/ServiceStack/ServiceStack/blob/v5.4.1/lib/js/JSV.js)

JSV is marginally faster than **safe JSON** in modern browsers (marginally slower than Eval) but because of the poor JS and String Performance in IE7/8 it performs over **20x** slower than IE's native `eval()`.
