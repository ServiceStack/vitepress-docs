let navIndex = require('./sidebar/index.json'), 
    navTemplates = require('./sidebar/templates.json'),
    navAutoQuery = require('./sidebar/autoquery.json'),
    navAuth = require('./sidebar/auth.json'),
    navGrpc = require('./sidebar/grpc.json')

module.exports = {
    title: 'ServiceStack',
    description: 'Docs',
    themeConfig: {
        repo: 'ServiceStack/vitepress-docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
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
    ]
}