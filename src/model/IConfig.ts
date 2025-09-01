export interface ITabButton {
    title: string;
    icon: string;
}

export interface ISocialLink {
    name: string;
    icon: string;
    link: string;
    customIcon: boolean;
}

export interface INavItem {
    name: string;
    link: string;
}

export interface INavSection {
    name: string;
    navItems: INavItem[];
}

export interface IConfig {
    siteTitle: string;
    avatar: string;
    hitokoto: string;
    author: string;
    tabButtons: ITabButton[];
    socialLinks: ISocialLink[];
    navSections: INavSection[];
}
