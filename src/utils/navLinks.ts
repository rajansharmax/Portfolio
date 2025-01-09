import { routes } from "./routes";
import { LinkTitles } from "./linkTitles";
import { Link } from "./types";

export const NavLinks: Link[] = [
    { href: routes.home, title: LinkTitles.home },
    { href: routes.blog, title: LinkTitles.blog },
    { href: routes.snippets, title: LinkTitles.snippets },
    { href: routes.projects, title: LinkTitles.projects },
    { href: routes.about, title: LinkTitles.about },
    { href: routes.guestbook, title: LinkTitles.guestbook },
];
