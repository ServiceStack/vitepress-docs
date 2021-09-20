---
title: Empty Web and SelfHost Starting Project Templates
slug: templates-empty-starting
---

If you prefer starting from an Empty slate you can use the `web` template to create the minimal configuration for a Web Application whilst the `selfhost` template can be used to develop Self-Hosting Console Apps. Both templates still follow our recommended [physical project layout](/physical-project-structure) but are configured with the minimum number of dependencies, e.g. the `selfhost` Console App just has a dependency on [Microsoft.AspNetCore.Server.Kestrel and ServiceStack](https://github.com/NetCoreTemplates/selfhost/blob/f11b25e80752d1fee96ac904a8df07fb150ee746/MyApp/MyApp.csproj#L11-L12), in contrast most templates have a dependency on the all-encompassing `Microsoft.AspNetCore.All` meta package.

<table class="table">
<tr>
    <th>.NET 5.0</th>
    <th>.NET Framework</th>
    <th>Empty Project Templates</th>
</tr>
<tr>
    <td><a href="https://github.com/NetCoreTemplates/web">web</a></td>
    <td><a href="https://github.com/NetFrameworkTemplates/web-netfx">web-netfx</a></td>
    <td align="center">
        <h3>Empty Web Template</h3>
        <a href="http://web.web-templates.io"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/web.png" width="500" /></a>
        <p><a href="http://web.web-templates.io">web.web-templates.io</a></p>
    </td>
</tr>
<tr>
    <td><a href="https://github.com/NetCoreTemplates/selfhost">selfhost</a></td>
    <td><a href="https://github.com/NetFrameworkTemplates/selfhost-netfx">selfhost-netfx</a></td>
    <td align="center">
        <h3>Empty SelfHost Console App Template</h3>
        <a href="http://selfhost.web-templates.io"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/selfhost.png" width="500" /></a>
        <p><a href="http://selfhost.web-templates.io">selfhost.web-templates.io</a></p>
    </td>
</tr>
</table>


### Windows Service Template

You can use [winservice-netfx](https://github.com/NetFrameworkTemplates/winservice-netfx) to create a Windows Service but as this requires Visual Studio it's faster to continue creating new Windows Service projects within VS.NET using the **ServiceStack Windows Service Empty** Project Template.
