import DefaultTheme from 'vitepress/theme'
import cleanUrlsMd from '../../includes/clean-urls.md'
import webNewCorefxMd from '../../includes/web-new-corefx.md'
import applyMdGist from '../../components/gists/apply-md.vue'
import webTroubleMd from '../../includes/web-trouble.md'
import clientLoginUis from '../../components/client-login-uis.vue'
import clientContactUis from '../../components/client-contacts-uis.vue'
import serverLoginUis from '../../components/server-login-uis.vue'
import serverContactUis from '../../components/server-contacts-uis.vue'
import apphostAuthValidation from '../../components/gists/apphost-auth-validation.vue'
import customValidatorContact from '../../components/gists/custom-validator-contact.vue'
import scriptsRazorHelpers from '../../components/gists/scripts-razor-helpers.vue'
import contactDtos from '../../components/gists/contact-dtos.vue'
import chinookData from '../../components/chinook-data.vue'
import HelloApi from "../../components/HelloApi.vue";
import ytEmbed from '../../components/yt-embed.vue';
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
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
        app.component('chinookData',chinookData)
        app.component('HelloApi',HelloApi)
        app.component('ytEmbed', ytEmbed)
        // register global components
    }
}