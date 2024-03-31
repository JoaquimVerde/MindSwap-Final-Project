// types definition
export type LinkType = {
    name: string;
    href: string;
    sublinks?: { name: string; href: string }[];
};

export type NavLinksProps = {
    links: LinkType[];
}