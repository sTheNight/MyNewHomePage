import type { IConfig } from './model/IConfig'

export const config: IConfig = {
    siteTitle: 'Zako~',
    avatar: 'https://avatars.githubusercontent.com/u/85998341?v=4',
    // 此处填入 #HitokotoEnable# 会启用一言 API，否则会直接显示你定义的内容
    // 一言 API 的 Get 参数请去 /src/utils/function.ts 中修改（默认调用文学与哲学一言）
    // 截至 2025/9/2 一言 API 貌似不太稳定
    hitokoto: '#HitokotoEnable#',
    author: '重铬酸钠',
    // 若想增添新的 TabButton 需要自行新增一个 Vue 视图组件并在 /src/App.vue 中引入
    // 图标调用 Fontawesome，需传入 Fontawesome 的图标类名，详细请去 https://fontawesome.com/icons 查找
    // 暂不支持自定义图标
    tabButtons: [
        { title: 'Home', icon: 'fa-solid fa-house' },
        { title: 'Navigation', icon: 'fa-solid fa-compass' }
    ],
    // name 作为 Tooltip 显示
    // 图标调用 Fontawesome，需传入 Fontawesome 的图标类名，详细请去 https://fontawesome.com/icons 查找
    // customIcon 为 true 则表示使用自定义图标，此时 icon 可以传入一个 HTML 标签
    socialLinks: [
        { name: 'Telegram', icon: 'fa-brands fa-telegram', link: 'https://t.me/SodiumDichromate', customIcon: false },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:sthenight@outlook.com', customIcon: false },
        { name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/sTheNight', customIcon: false },
        { name: 'Bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/255841070', customIcon: false }
    ],
    // 单个 NavItem 中，有 name、link、description 三个属性以及一个可选的 iconLink 属性
    // 当 iconLink 存在时会显示你自定义的图标，否则会取 name 的第一个字符作为图标
    // iconLink 仅支持传入一个图片链接
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