---
slug: hot-reloading
title: Hot Reloading
---

ServiceStack includes 2 Hot Reloading solutions to automatically detect file changes and reload your page on save.

### Hot Reload Static Files

If you're not developing your Website with `#Script` or are developing a Single Page App where it's mostly contained in static files
you can use the `HotReloadFeature` plugin which has added support for monitoring multiple File Search Patterns and can now be configured
to monitor a different VFS provider (defaults to WebRoot).

The new "lite" projects utilize both these features for its hot reloading support:

```csharp
if (Config.DebugMode)
{
    Plugins.Add(new HotReloadFeature {
        DefaultPattern = "*.html;*.js;*.css",
        VirtualFiles = VirtualFiles // Monitor ContentRoot to detect changes in /src
    });
}
```

Which is enabled during development in `_layout.html` by including `/js/hot-fileloader.js`:

```html
<i hidden>{% raw %}{{ '/js/hot-fileloader.js' |> ifDebugIncludeScript }}{% endraw %}</i>
```

Or if you're not using [#Script Pages](https://sharpscript.net/docs/sharp-pages) you can add the script tag:

```html
<script src="/js/hot-fileloader.js"></script>
```

#### Hot Reload Sharp Pages

The [Hot Reloading](https://sharpscript.net/docs/hot-reloading) support in Sharp Pages enables the `HotReloadFilesService`
when registering the `SharpPagesFeature`, e.g:

```csharp
Plugins.Add(new SharpPagesFeature {
    EnableHotReload = Config.DebugMode //default
});
```

This is enabled in your pages with this snippet which renders the hot reload client script during development:

```html
<i hidden>{% raw %}{{ '/js/hot-loader.js' |> ifDebugIncludeScript }}{% endraw %}</i>
```

Which starts a long poll that calls the smart `HotReloadFilesService` which recursively inspects the current tokenized 
[Sharp Pages](https://sharpscript.net/docs/sharp-pages) to find if it or any dependent layouts, partials or file includes have changed.

Sharp Page's Hot Reload feature now also monitors **Paged Based Routing Pages** and **View Pages**.

