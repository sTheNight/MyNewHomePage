import type { IConfig } from './model/IConfig'

export const config : IConfig = {
    siteTitle: 'Zako~',
    avatar: 'https://avatars.githubusercontent.com/u/85998341?v=4',
    hitokoto: '#HitokotoEnable#',
    author: '重铬酸钠',
    tabButtons: [
        { title: 'Home', icon: 'fa-solid fa-house' },
        { title: 'Page2', icon: 'fa-solid fa-file' }
    ],
    socialLinks: [
        { name: 'Telegram', icon: 'fa-brands fa-telegram', link: 'https://t.me/SodiumDichromate', customIcon: false },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:sthenight@outlook.com', customIcon: false },
        { name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/sTheNight', customIcon: false },
        { name: 'Bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/255841070', customIcon: false }
    ],
    navSections:[
        {
            name: '个人站点',
            navItems: [
                { name: '博客', link: 'https://blog.izako.cc/' },
                { name: 'Alist', link: 'https://alist.izako.cc/' },
                { name: '主页', link: 'https://izako.cc/' }
            ]
        },
        {
            name: '个人项目',
            navItems: [
                { name: '个人主页', link: 'https://github.com/sTheNight/MyNewHomePage' },
                { name: '航天模拟器汉化包', link: 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang/' },
                { name: 'SFS 安装器', link: 'https://installer.sfs.izako.cc/' }
            ]
        }
    ]
}