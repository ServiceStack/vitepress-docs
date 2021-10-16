import DefaultTheme from 'vitepress/theme'
import cleanUrlsMd from './../includes/clean-urls.md'
import webNewCorefxMd from '../includes/web-new-corefx.md'
import webTroubleMd from '../includes/web-trouble.md'

import clientLoginUis from '../../src/components/client-login-uis.vue'
import clientContactUis from '../../src/components/client-contacts-uis.vue'
import serverLoginUis from '../../src/components/server-login-uis.vue'
import serverContactUis from '../../src/components/server-contacts-uis.vue'
import HelloApi from "../../src/components/HelloApi.vue";
import ytEmbed from '../../src/components/yt-embed.vue';
import nugetPackage from '../../src/components/nuget-ref.vue';
import './custom.css'

import Layout from './Layout.vue';

export default {
    ...DefaultTheme,
    Layout: Layout,
    enhanceApp: ({ app }) => {
        app.component('cleanUrlsMd',cleanUrlsMd)
        app.component('webNewCorefxMd',webNewCorefxMd)
        app.component('webTroubleMd',webTroubleMd)
        app.component('clientLoginUis',clientLoginUis)
        app.component('clientContactUis',clientContactUis)
        app.component('serverLoginUis',serverLoginUis)
        app.component('serverContactUis',serverContactUis)
        app.component('HelloApi',HelloApi)
        app.component('ytEmbed', ytEmbed)
        app.component('nugetPackage',nugetPackage)
    }
};