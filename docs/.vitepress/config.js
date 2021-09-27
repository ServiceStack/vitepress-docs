let sideBar = require('./sidebar_original.json')

module.exports = {
    title: 'ServiceStack',
    description: 'Docs',
    themeConfig: {
        repo: 'Layoric/vitepress-starter',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guide', link: '/guide', activeMatch: '^/$|^/guide/'},
            { text: 'OrmLite', link: '/ormlite', activeMatch: '^/$|^/ormlite/'},
            { text: 'Redis', link: '/redis', activeMatch: '^/$|^/redis/'},
            { text: 'Text', link: '/text', activeMatch: '^/$|^/text/'},
            { text: 'Releases', link: '/releases/', activeMatch: '^/$|^/releases/' },
        ],
        sidebar: sideBar
    },
    head: [

    ]
}