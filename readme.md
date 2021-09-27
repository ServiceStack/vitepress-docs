# Experiments with Vitepress

## Converting from a large Jekyl site
Going to make some notes about the problems I hit converting a large Jekyl site to use Vitepress.

## Common errors and fixes

Liquid is a lot more forgiving, for better or worse, so there are quite a few things that Vitepress will error on where Liquid templates won't have an issue.

::: v-pre
- `Illegal tag name. Use '&lt;' to print '<'`, `<`,`>` within HTML should be encded will fail the build (provide error example)
- "`[vite:vue]` Duplicate attribute" will likely occur due to a `{% include` statement`
 - This can be replaced with a Vue component containing the same content.
- The use of `{% capture X %}{% include myfile.md %}{%endcapture%}` to process markdown using `| markdownify` can be simplified to importing the markdown file in the `<script setup>` like any other module and using it as a custom element.

```html
<div class='markdown-body'>
{% capture contentMd %}{% include mycontent.md %}{% endcapture %}
{{ contentMd | markdownify }}
</div>
```
Replace with
```html
// at top of file
<script setup>
import mycontent from './path/mycontent.md';
</script>

<mycontent></mycontent>
```

- `Cannot read property 'X' of undefined` happens when you haven't code fenced or escaped double curly brace. `{% raw %}{{test}}{% endraw %}` within code fences should be removed as they will be rendered in vitepress.
- Assets should be relative links as recommended in official docs, so change `![](/myimage.png)` to a relative path. This is because vitepress handles assets.


## Vue 3 and class components
At the time of writing the API and packages to support [Vue 3 class components is not stable](https://github.com/vuejs/vue-class-component/issues/406), sticking with standard Vue 3 components for this template. Vue creator also not backing class components due to [`Typing Complexity`](https://github.com/vuejs/rfcs/pull/17#issuecomment-494242121).



