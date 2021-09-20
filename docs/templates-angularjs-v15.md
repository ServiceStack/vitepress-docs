---
title: AngularJS v1.5 VS.NET Project Template
slug: templates-angularjs-v15
---

The simple HelloWorld AngularJS application that is provided in the template calls the `/hello/{Name}` route and displays the result in 
the `<p>` below. 

![](https://github.com/ServiceStack/ServiceStackVS/raw/master/Images/angularjs_hello_app.png)

This template uses NuGet to manage JavaScript dependencies like Angular, unlike the AngularJS App template which uses NPM and Gulp.

## Common Template Project Structure

Starting a new application using a ServiceStackVS template will give you 4 new projects.

- Host project
- Service Interface project
- Service Model project
- Unit Testing project

![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/angularjs_solution.png)

The Host project contains an `AppHost` which has been configured with the `RazorFormat` plugin as well as hosting all the required 
JavaScript packages like AngularJS, Bootstrap and jQuery. It is setup initially with a single `_Layout.cshtml` using the default 
Bootstrap template and a `default.cshtml` which contains the HelloWorld demo. The Single Page Application (SPA) templates use a plain 
`default.html` in which these Razor views aren't used.

![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/angularjs_main_project.png)

The Host project has dependencies on the Service Model and Service Interface projects. These are the projects that contain your 
request/response DTOs, validators and filters. This structure is trying to encourage have your data structures and services in 
separate projects make testing and reuse easier.

![](https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/angularjs_other_projects.png)

The Unit Testing project, also as a dependency on these projects as it tests them in isolation of the main Host project. In the template, 
we are using the `BasicAppHost` to mock the AppHost we are using in the Host project. The example unit test is using NUit to setup and 
run the tests.
