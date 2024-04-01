// types definition
export type LinkType = {
    name: string;
    href: string;
    icon?: any;
    sublinks?: { name: string; href: string; icon?: any }[];
};

export type NavLinksProps = {
    links: LinkType[];
}