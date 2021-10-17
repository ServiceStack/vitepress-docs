let container = require('markdown-it-container')

let navIndex = require('./sidebar/index.json'), 
    navTemplates = require('./sidebar/templates.json'),
    navAutoQuery = require('./sidebar/autoquery.json'),
    navAuth = require('./sidebar/auth.json'),
    navGrpc = require('./sidebar/grpc.json')

module.exports = {
    title: 'Documentation',
    description: 'ServiceStack Docs',
    themeConfig: {
        repo: 'ServiceStack/vitepress-docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        //lastUpdated: false,
        nav: [
            { text: "What's New", link: 'https://servicestack.net/whatsnew' },
            { text: 'Project Templates', link: '/templates-overview', activeMatch: '^/(templates|dotnet-new)'},
            { text: 'AutoQuery', link: '/autoquery', activeMatch: '^/(autoquery|why-not-odata)'},
            { text: 'Security', link: '/auth', activeMatch: '(auth|sessions)' },
            { text: 'gRPC', link: '/grpc', activeMatch: '^/grpc'},
        ],
        sidebar: {
            '/templates': navTemplates,
            '/dotnet-new': navTemplates,
            '/autoquery': navAutoQuery,
            '/why-not-odata': navAutoQuery,
            '/auth': navAuth,
            '/sessions': navAuth,
            '/jwt-authprovider': navAuth,
            '/api-key-authprovider': navAuth,
            '/grpc': navGrpc,
            '/': navIndex,
        }
    },
    head: [
        ['script', { src: 'custom.js' }]
    ],
    markdown: {
        config: md => {
            md.use(container, 'nuget', { 
                render(tokens, idx) {
                    const token = tokens[idx]
                    if (token.nesting === 1) {
                        return `<div class="package-reference-box">
                        <div class="flex">
                            <div class="flex-grow pre-container" style="background:#002440">
                                <pre class="sh copy m-0 p-0 pl-2 py-1 align-middle" style="background:#002440">`
                    } else {
                        return `</pre>
                                    </div>
                                <div class="flex-shrink"><i class="svg-copy inline-block w-8 h-full" title="copy" onclick="copy(this)"></i><b></b></div>
                            </div>
                            <div class="copy-text w-full text-right h-6"></div>
                        </div>\n`
                    }
                }
            })
        }
    }
}