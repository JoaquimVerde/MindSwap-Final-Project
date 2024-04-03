// types definition
export type LinkType = {
    name: string;
    href: string;
    icon: any;
    role: string[];
    sublinks?: { name: string; href: string; icon?: any }[];
};

export type NavLinksProps = {
    links: LinkType[];
}

export type CustomComponentsArr = {
    content: React.FC[];
}
