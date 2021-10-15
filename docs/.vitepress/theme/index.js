import DefaultTheme from 'vitepress/theme'
import cleanUrlsMd from './../includes/clean-urls.md'
import webNewCorefxMd from '../includes/web-new-corefx.md'
import webTroubleMd from '../includes/web-trouble.md'

import applyMdGist from '../../src/components/gists/apply-md.vue'
import clientLoginUis from '../../src/components/client-login-uis.vue'
import clientContactUis from '../../src/components/client-contacts-uis.vue'
import serverLoginUis from '../../src/components/server-login-uis.vue'
import serverContactUis from '../../src/components/server-contacts-uis.vue'
import apphostAuthValidation from '../../src/components/gists/apphost-auth-validation.vue'
import customValidatorContact from '../../src/components/gists/custom-validator-contact.vue'
import scriptsRazorHelpers from '../../src/components/gists/scripts-razor-helpers.vue'
import contactDtos from '../../src/components/gists/contact-dtos.vue'
import HelloApi from "../../src/components/HelloApi.vue";
import ytEmbed from '../../src/components/yt-embed.vue';
import './custom.css'

DefaultTheme.enhanceApp = ({ app }) => {
    app.component('cleanUrlsMd',cleanUrlsMd)
    app.component('webNewCorefxMd',webNewCorefxMd)
    app.component('applyMdGist',applyMdGist)
    app.component('webTroubleMd',webTroubleMd)
    app.component('clientLoginUis',clientLoginUis)
    app.component('clientContactUis',clientContactUis)
    app.component('serverLoginUis',serverLoginUis)
    app.component('serverContactUis',serverContactUis)
    app.component('apphostAuthValidation',apphostAuthValidation)
    app.component('customValidatorContact',customValidatorContact)
    app.component('scriptsRazorHelpers',scriptsRazorHelpers)
    app.component('contactDtos',contactDtos)
    app.component('HelloApi',HelloApi)
    app.component('ytEmbed', ytEmbed)
}

export default DefaultTheme;