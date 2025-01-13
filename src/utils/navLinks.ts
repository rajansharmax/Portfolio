import { routes } from "./routes";
import { LinkTitles } from "./linkTitles";
import { Link } from "./types";
import { Links } from "./links";

export const NavLinks: Link[] = [
    { href: routes.home, title: LinkTitles.home },
    { href: routes.blog, title: LinkTitles.blog },
    { href: routes.hireMe, title: LinkTitles.hireMe },
    { href: routes.projects, title: LinkTitles.projects },
    { href: routes.about, title: LinkTitles.about },
    { href: routes.guestbook, title: LinkTitles.guestbook },
];

export const getLinkTitle = (key: string): string => {
    const link = Links[key];
    return link ? link.title : key;
};