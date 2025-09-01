import type { IConfig } from './model/IConfig'

export const config: IConfig = {
    siteTitle: 'Zako~',
    avatar: 'https://avatars.githubusercontent.com/u/85998341?v=4',
    hitokoto: '#HitokotoEnable#',
    author: '重铬酸钠',
    tabButtons: [
        { title: 'Home', icon: 'fa-solid fa-house' },
        { title: 'Navigation', icon: 'fa-solid fa-compass' }
    ],
    socialLinks: [
        { name: 'Telegram', icon: 'fa-brands fa-telegram', link: 'https://t.me/SodiumDichromate', customIcon: false },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:sthenight@outlook.com', customIcon: false },
        { name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/sTheNight', customIcon: false },
        { name: 'Bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/255841070', customIcon: false }
    ],
    navSections: [
        {
            name: '个人站点',
            navItems: [
                { name: '博客', link: 'https://blog.izako.cc/', description: '个人博客，不常更新内容' },
                { name: 'Alist', link: 'https://alist.izako.cc/', description: '使用 OpenList 搭建的个人网盘' },
                { name: '主页', link: 'https://izako.cc/', description: '本站点' }
            ]
        },
        {
            name: '个人项目',
            navItems: [
                { name: '个人主页', link: 'https://github.com/sTheNight/MyNewHomePage', description: '基于 Vue 3 开发的个人主页项目' },
                { name: '航天模拟器汉化包', link: 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang/', description: '一个航天模拟器的汉化包' },
                { name: 'SFS 安装器', link: 'https://installer.sfs.izako.cc/', description: '基于 .Net 开发的航天模拟器的安装器' }
            ]
        }
    ]
}