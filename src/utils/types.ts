export type Link = {
    href: string;
    title: string;
};

export type OgImage = {
    url: string;
    width: number;
    height: number;
    alt: string;
};

export type SeoCommon = {
    title: string;
    description: string;
    ogType: string;
    ogImage: OgImage[] | string;
    twImage: string;
    canonicalUrl?: string;
};

export interface DropDownMenuList {
    href: string;
    label: string;
    icon: React.ReactNode;
}