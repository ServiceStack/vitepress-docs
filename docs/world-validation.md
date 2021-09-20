---
slug: world-validation
title: World Validation
---

The [World Validation App](https://github.com/NetCoreApps/Validation) covers a typical App example you'd find in most Apps, 
including **Login** and **Registration Forms** to **Sign In** and **Register** new Users who are then able to access the 
**same protected Services** to maintain their own private contact lists. 
It's a compact example that tries to cover a lot of use-cases typical in a real-world App, including maintaining a separate Data and DTO Model 
and using C# idioms like Enum's for defining a finite list of options which are re-used to populate its HTML UI.

The UI for the same App is re-implemented in **10 popular Web Development approaches**, each integrated with ServiceStack's validation.

As of this writing there **4 different server HTML** generated strategies that use HTML Form Posts to call back-end Services:

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/home.png)](https://github.com/NetCoreApps/Validation)

<h4 align="center">
  View Source on GitHub <a href="https://github.com/NetCoreApps/Validation">NetCoreApps/Validation</a> - 
  Live Demo <a href="http://validation.web-app.io">validation.web-app.io</a>
</h4>

### Server Rendered HTML UIs

 - [/server](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/server) - Sharp Pages using Server Controls
 - [/server-ts](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/server-ts) - Server HTML enhanced with TypeScript
 - [/server-jquery](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/server-jquery) - Server HTML enhanced with jQuery
 - [/server-razor](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/server-razor) - ServiceStack.Razor using Razor Helpers

### Client HTML UIs

The Client Examples use Ajax Forms and the [TypeScript JsonServiceClient](/typescript-add-servicestack-reference#typescript-serviceclient) 
to send TypeScript [dtos.ts](https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/dtos.ts) generated with [TypeScript Add ServiceStack Reference](/typescript-add-servicestack-reference):

 - [/vuetify](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/vuetify) - Vue App using Vuetify's Material Design Controls using ServiceClient Requests
 - [/client-ts](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/client-ts) - TypeScript UI using Ajax Forms and ServiceClient Requests
 - [/client-jquery](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/client-jquery) - JavaScript UI using jQuery Ajax Requests
 - [/client-razor](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/client-razor) - Client jQuery Ajax Requests rendered by Razor pages
 - [/client-vue](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/client-vue) - Vue UI using TypeScript and ServiceClient Requests
 - [/client-react](https://github.com/NetCoreApps/Validation/tree/master/world/wwwroot/client-react) - React UI using TypeScript and ServiceClient Requests

The source code for all different strategies are encapsulated within their folders above except for the Razor examples which need to
maintain their shared resources in the [/Views](https://github.com/NetCoreApps/Validation/tree/master/world/Views) folder 
(representative of friction and restrictions when working with Razor).

### Server Implementation

This is the shared backend Server implementation that all UIs are using:

All Auth Configuration is encapsulated within a "no-touch" `IConfigureAppHost` plugin that's run once on Startup:

{% include validation/services/gist94750992.html %}

All Services and Validators used in this App. Extension methods are used to DRY reusable code and a Custom
[Auto Mapping](/auto-mapping) handles conversion between the `Contact` Data Model and Contact`` DTO:

{% include validation/services/gist94751658.html %}

The dynamic App data used within ServiceStack Sharp Pages and Razor pages are maintained within Custom `ContactScripts` and `RazorHelpers`:

{% include validation/services/gist94751797.html %}

Typed Request/Response Service Contracts including Data and DTO models that utilizes Enum's:

{% include validation/services/gist94765060.html %}

Each UI implements 4 different screens which are linked from:

 - [Login Page](http://validation.web-app.io/login-links) - Sign In to ServiceStack's built-in Username/Password Credentials Auth Provider
 - [Registration Page](http://validation.web-app.io/register-links) - Calling ServiceStack's built-in `/register` Service to register a new User
 - [Contacts Page](http://validation.web-app.io/contact-links) - Contacts Form to Add a new Contact and view list of existing contacts
 - [Edit Contact Page](http://validation.web-app.io/contact-edit-links) - Edit Contact Form

### Shared Error Handling Concepts

Despite their respective differences they share the same concepts where all validation errors are populated from the Service's `ResponseStatus`
Error Response. The UI implementations takes care of binding all matching field errors next to their respective controls whilst the 
`validationSummary` or `errorResponseExcept` methods takes a list of field names that they **should not display** as they'll already be 
displayed next to their targeted control.

We'll cover just the **Login** and **Contacts** Pages since they're sufficiently different, to see what this looks like in practice:

## Login Page

The Login Page contains a standard Bootstrap Username/Password form with labels, placeholders and help text, which initially looks like:

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/login-validation.png)

What it looks like after submitting an empty form with Server Exception Errors rendered against their respective fields:

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/login-validation-failed.png)

### Server UIs

All Server Examples submits a HTML Form Post and renders full page responses:

<ul class="nav nav-pills mb-3" id="login-server" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="login-server-sharp-tab" data-toggle="pill" href="#login-server-sharp" role="tab" aria-controls="login-server-sharp" aria-selected="true">
        Sharp Pages
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-server-ts-tab" data-toggle="pill" href="#login-server-ts" role="tab" aria-controls="login-server-ts" aria-selected="false">
        Server TypeScript
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-server-jquery-tab" data-toggle="pill" href="#login-server-jquery" role="tab" aria-controls="login-server-jquery" aria-selected="false">
        Server jQuery
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-server-razor-tab" data-toggle="pill" href="#login-server-razor" role="tab" aria-controls="login-server-razor" aria-selected="true">
        Server Razor
    </a>
  </li>
</ul>
<div class="tab-content" id="login-serverContent">
  <div class="tab-pane fade show active" id="login-server-sharp" role="tabpanel" aria-labelledby="login-server-sharp-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server/login.html">/server/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/server-sharp.html %}
  </div>

  <div class="tab-pane fade" id="login-server-ts" role="tabpanel" aria-labelledby="login-server-ts-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-ts/login.html">/server-ts/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/server-ts.html %}
  </div>

  <div class="tab-pane fade" id="login-server-jquery" role="tabpanel" aria-labelledby="login-server-jquery-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-jquery/login.html">/server-jquery/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/server-jquery.html %}
  </div>

  <div class="tab-pane fade" id="login-server-razor" role="tabpanel" aria-labelledby="login-server-razor-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-razor/login.cshtml">/server-razor/login.cshtml</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/server-razor.html %}
  </div>
</div>

### About Server Implementations

Unfortunately Validation in Bootstrap doesn't lend itself to easy server rendering as it requires co-ordination with label, input and error feedback 
elements so **Sharp Pages** wraps this in a `formInput` control from `BootstrapScripts` to render both Label and Input elements together. 
For those preferring Razor, these same controls are available as `@Html` Helpers as seen in **Server Razor** which ends up having identical 
behavior and markup, albeit rendered using a different View Engine.

**Server TypeScript** shows a more fine-grained version where we show how to bind validation errors to your own custom HTML markup. 
This would normally end up being a lot more tedious to do so we've extended it with our own declarative `data-invalid` attribute to hold the 
fields error message which drastically reduces the manual binding effort required. Calling the `bootstrap()` method will scan the form for populated 
`data-invalid` attributes where it's used to render the appropriate error message adjacent to the control and toggle the appropriate error classes.

All TypeScript examples only depends on the dependency-free [@servicestack/client](https://github.com/ServiceStack/servicestack-client) which is
available as both an [npm package](https://www.npmjs.com/package/@servicestack/client) and as a stand-alone 
[servicestack-client.umd.js](https://unpkg.com/@servicestack/client/dist/servicestack-client.umd.js) script include.

The **Server jQuery** version uses the exact same markup as **Server TypeScript** but requires a dependency on jQuery and uses the
`$(document).bootstrap()` jQuery plugin from ServiceStack's built-in [ss-utils.js](/ss-utils-js).

#### Continue and ErrorView

In order to enable full-page reloads in ServiceStack's built-in Services like its `/auth` and `/register` Services we need to submit 2 additional
hidden input fields: `errorView` to tell it which page it should render on **failed requests** and `continue` to tell it where to redirect to after
**successful requests**.

### Client UIs

In contrast to full page reloads all Client UIs submit Ajax forms and bind their JSON Error Response to the UI for a more fluid and flicker-free UX:

<ul class="nav nav-pills mb-3" id="pills-server" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="login-vuetify-tab" data-toggle="pill" href="#login-vuetify" role="tab" aria-controls="login-vuetify" aria-selected="true">
        Vuetify
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-client-ts-tab" data-toggle="pill" href="#login-client-ts" role="tab" aria-controls="login-client-ts" aria-selected="false">
        Client TypeScript
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-client-jquery-tab" data-toggle="pill" href="#login-client-jquery" role="tab" aria-controls="login-client-jquery" aria-selected="false">
        Client jQuery
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-client-razor-tab" data-toggle="pill" href="#login-client-razor" role="tab" aria-controls="login-client-razor" aria-selected="true">
        Client Razor
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-client-vue-tab" data-toggle="pill" href="#login-client-vue" role="tab" aria-controls="login-client-vue" aria-selected="false">
        Client Vue
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="login-client-react-tab" data-toggle="pill" href="#login-client-react" role="tab" aria-controls="login-client-react" aria-selected="false">
        Client React
    </a>
  </li>
</ul>
<div class="tab-content" id="pills-serverContent">
  <div class="tab-pane fade show active" id="login-vuetify" role="tabpanel" aria-labelledby="login-vuetify-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server/login.html">/server/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/vuetify.html %}
  </div>

  <div class="tab-pane fade" id="login-client-ts" role="tabpanel" aria-labelledby="login-client-ts-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-ts/login.html">/client-ts/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/client-ts.html %}
  </div>

  <div class="tab-pane fade" id="login-client-jquery" role="tabpanel" aria-labelledby="login-client-jquery-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-jquery/login.html">/client-jquery/login.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/client-jquery.html %}
  </div>

  <div class="tab-pane fade" id="login-client-razor" role="tabpanel" aria-labelledby="login-client-razor-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-razor/login.cshtml">/client-razor/login.cshtml</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/client-razor.html %}
  </div>

  <div class="tab-pane fade" id="login-client-vue" role="tabpanel" aria-labelledby="login-client-vue-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-vue/login.ts">/client-vue/login.ts</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/client-vue.html %}
  </div>

  <div class="tab-pane fade" id="login-client-react" role="tabpanel" aria-labelledby="login-client-react-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-react/login.tsx">/client-react/login.tsx</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/login/client-react.html %}
  </div>

</div>

### About Client Implementations

**Vuetify** is a Vue App which uses the popular [Vuetify Material Design UI](https://vuetifyjs.com/en/) which is in contrast to all other UIs which use Bootstrap. 
It also uses the `JsonServiceClient` to send a JSON `Authenticate` Request whereas all other UIs sends HTML Form `x-www-form-urlencoded` Key/Value Pairs.

**Client TypeScript** only needs to render the initial Bootstrap Form Markup as `bootstrapForm()` takes care of submitting the Ajax Request and binding
any validation errors to the form. The `data-validation-summary` placeholder is used to render any other error summary messages except for the `userName` 
or `password` fields.

**Client jQuery** uses the exact same markup but uses `$('form').bootstrapForm()` jQuery plugin to handle the form Ajax request and any error binding.

**Client Razor** adopts the same jQuery implementation but is rendered using MVC Razor instead of **Sharp Pages**.

## Contacts Page

The Contacts Page is representative of a more complex page that utilizes a variety of different form controls where the same page is also responsible
for rendering the list of existing contacts:

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/contacts-validation.png)

Here's an example of what a partially submitted invalid form looks like:

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/contacts-validation-failed.png)

### Server UIs

<ul class="nav nav-pills mb-3" id="contacts-server" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="contacts-server-sharp-tab" data-toggle="pill" href="#contacts-server-sharp" role="tab" aria-controls="contacts-server-sharp" aria-selected="true">
        Sharp Pages
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-server-ts-tab" data-toggle="pill" href="#contacts-server-ts" role="tab" aria-controls="contacts-server-ts" aria-selected="false">
        Server TypeScript
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-server-jquery-tab" data-toggle="pill" href="#contacts-server-jquery" role="tab" aria-controls="contacts-server-jquery" aria-selected="false">
        Server jQuery
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-server-razor-tab" data-toggle="pill" href="#contacts-server-razor" role="tab" aria-controls="contacts-server-razor" aria-selected="true">
        Server Razor
    </a>
  </li>
</ul>
<div class="tab-content" id="contacts-serverContent">
  <div class="tab-pane fade show active" id="contacts-server-sharp" role="tabpanel" aria-labelledby="contacts-server-sharp-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server/contacts/index.html">/server/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/server-sharp.html %}
  </div>

  <div class="tab-pane fade" id="contacts-server-ts" role="tabpanel" aria-labelledby="contacts-server-ts-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-ts/contacts/index.html">/server-ts/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/server-ts.html %}
  </div>

  <div class="tab-pane fade" id="contacts-server-jquery" role="tabpanel" aria-labelledby="contacts-server-jquery-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-jquery/contacts/index.html">/server-jquery/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/server-jquery.html %}
  </div>

  <div class="tab-pane fade" id="contacts-server-razor" role="tabpanel" aria-labelledby="contacts-server-razor-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-razor/contacts/default.cshtml">/server-razor/contacts/default.cshtml</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/server-razor.html %}
  </div>
</div>

### About Server Implementations

Both the Contacts UIs and Contacts Services are protected resources which uses a **partial** to protect its pages. 
Normally `redirectIfNotAuthenticated` wouldn't require a URL, but one is needed here so it knows the right login page it should redirect to.

#### Sharp Pages

In **Sharp Pages** our wrist-friendly server controls are back as we start to see more of its features. The arguments of the left of the `formInput` 
are for HTML attributes you want rendered on the input control whilst the arguments on the right (or 2nd argument) are to enlist the controls 
other "high-level features" like `values` which is used to populate a list of radio and checkboxes or `formSelect` options. The `inline` 
argument tells the control to render multiple controls in-line whilst you can use `help` to render some help text as an aside.

We also see the introduction of the `sendToGateway` method used to send the `GetContacts` Request DTO to call its Service using the 
[Service Gateway](/service-gateway), the Response of which is used to render the list of contacts on the Server. 

Another difference is that there are multiple `<form>` elements on this page to handle deleting a contact by submitting an empty form post to
`/contacts/{{Id}}/delete`.

**Sharp Pages** doesn't need to specify its own `ErrorView` or `Continue` Request params as its the default view used for `ContactServices`: 

```csharp
[DefaultView("/server/contacts")] // Render custom HTML View for HTML Requests
public class ContactServices : Service { ... }
```

This is typically all that's needed, as most real-world Apps would rarely have more than 1 HTML View per Service. 

#### Server TypeScript

With **Server TypeScript** you're starting to see the additional effort required when you need to use your own custom markup to render form controls. 

It differs with **Sharp Pages** in that instead of rendering the list of contacts on the server, it renders the `GetContacts` Response DTO
as JSON which is interpreted in the browser as a native JS Object literal which the `render()` method uses to render the list of contacts in the browser.

Deleting a contact is also handled differently where it uses the `JsonServiceClient` to send the `DeleteContact` Request DTO from the generated `dtos.ts`.
After the request completes it uses `GetContacts` to fetch an updated list of Contacts which it re-renders.

#### Server jQuery

**Server jQuery** adopts the same approach as **Server TypeScript** but renders it using jQuery and uses custom routes constructed on the client 
with jQuery's Ajax APIs to call the `ContactServices`.

#### Server Razor

**Server Razor** is very similar to **Sharp Pages** but implemented using Razor. In many cases the built-in script methods in Sharp Pages have
Razor equivalents, either in the base `ViewPage<T>` class like `RedirectIfNotAuthenticated()` or as a `@Html` helper.

### Client UIs

<ul class="nav nav-pills mb-3" id="contacts-server" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="contacts-vuetify-tab" data-toggle="pill" href="#contacts-vuetify" role="tab" aria-controls="contacts-vuetify" aria-selected="true">
        Vuetify
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-client-ts-tab" data-toggle="pill" href="#contacts-client-ts" role="tab" aria-controls="contacts-client-ts" aria-selected="false">
        Client TypeScript
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-client-jquery-tab" data-toggle="pill" href="#contacts-client-jquery" role="tab" aria-controls="contacts-client-jquery" aria-selected="false">
        Client jQuery
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-client-razor-tab" data-toggle="pill" href="#contacts-client-razor" role="tab" aria-controls="contacts-client-razor" aria-selected="true">
        Client Razor
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-client-vue-tab" data-toggle="pill" href="#contacts-client-vue" role="tab" aria-controls="contacts-client-vue" aria-selected="false">
        Client Vue
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contacts-client-react-tab" data-toggle="pill" href="#contacts-client-react" role="tab" aria-controls="contacts-client-react" aria-selected="false">
        Client React
    </a>
  </li>
</ul>
<div class="tab-content" id="contacts-serverContent">
  <div class="tab-pane fade show active" id="contacts-vuetify" role="tabpanel" aria-labelledby="contacts-vuetify-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server/contacts/index.html">/server/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/vuetify.html %}
  </div>

  <div class="tab-pane fade" id="contacts-client-ts" role="tabpanel" aria-labelledby="contacts-client-ts-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-ts/contacts/index.html">/client-ts/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/client-ts.html %}
  </div>

  <div class="tab-pane fade" id="contacts-client-jquery" role="tabpanel" aria-labelledby="contacts-client-jquery-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-jquery/contacts/index.html">/client-jquery/contacts/index.html</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/client-jquery.html %}
  </div>

  <div class="tab-pane fade" id="contacts-client-razor" role="tabpanel" aria-labelledby="contacts-client-razor-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-razor/contacts/default.cshtml">/client-razor/contacts/default.cshtml</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/client-razor.html %}
  </div>

  <div class="tab-pane fade" id="contacts-client-vue" role="tabpanel" aria-labelledby="contacts-client-vue-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-vue/contacts/index.ts">/client-vue/contacts/index.ts</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/client-vue.html %}
  </div>

  <div class="tab-pane fade" id="contacts-client-react" role="tabpanel" aria-labelledby="contacts-client-react-tab">
    <div class="float-right">
        <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/client-react/contacts/index.tsx">/client-react/contacts/index.tsx</a>
    </div>
    <h3>Source Code and References</h3>
    {% include validation/contacts/client-react.html %}
  </div>

</div>

### About Client Implementations

**Vuetify** ends up being larger than other implementations as it also handles Edit Contacts functionality which is a separate page in other UIs.
It also includes additional functionality like client-side validation enabled in each control using its `:rules` attribute. One thing
that remains consistent is the way to call ServiceStack Services and handle errors by assigning it to `this.responseStatus` which the reactive
`errorResponse` method uses to bind to each control.

The remaining client implementations show that whilst the server controls require the least code, if you need custom markup it's much easier 
to render the initial markup once, then use `bootstrapForm()` to bind any validation errors and handle the ajax form submissions. It's especially 
valuable when you need to update a form where the same markup can be populated by just assigning the `model` property as done in the 
[Edit Contact Pages](http://validation.web-app.io/contact-edit-links):

```ts
const form = document.querySelector("form")!;
bootstrapForm(form,{
    model: CONTACT,
    success: function () {
        location.href = '/client-ts/contacts/';
    }
});
```

The amount of code can be even further reduced when using an SPA framework that allows easy componentization as seen in the 
[Vue Form Validation](#vue-lite-project-template-features) and [React Form Validation](#react-lite-project-template-features) examples.
