let sideBar = require('./sidebar_original.json')

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
            { text: 'Guide', link: '/', activeMatch: '^/[^/]+$'},
            { text: 'OrmLite', link: '/ormlite', activeMatch: '^/ormlite/'},
            { text: 'Redis', link: '/redis', activeMatch: '^/redis/'},
            { text: 'Text', link: '/text', activeMatch: '^/text/'},
            { text: 'Releases', link: '/releases/', activeMatch: '^/release' },
        ],
        sidebar: {
            '/release': [{
                "text": "Releases",
                "children": [
                    {
                        "text": "Latest Release Notes",
                        "link": "/releases/v5.12"
                    },
                    {
                        "text": "Release Notes History",
                        "link": "/release-notes-history"
                    },
                    {
                        "text": "Pre-release MyGet Packages",
                        "link": "/myget"
                    }
                ]
            }],
            '/': sideBar,
        }
    },
    head: [
        ['script', { src: 'custom.js' }]
    ]
}