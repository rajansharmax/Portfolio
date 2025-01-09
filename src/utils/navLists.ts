import { routes } from "./routes";
import { LinkTitles } from "./linkTitles";

export const NavLists = {
    pages: [
        { name: LinkTitles.home, href: routes.home },
        { name: LinkTitles.blog, href: routes.blog },
        { name: LinkTitles.tags, href: routes.tags },
        { name: LinkTitles.snippets, href: routes.snippets },
        { name: LinkTitles.projects, href: routes.projects },
        { name: LinkTitles.about, href: routes.about },
        { name: LinkTitles.contact, href: routes.contact },
        { name: LinkTitles.uses, href: routes.uses },
        { name: LinkTitles.now, href: routes.now },
        { name: LinkTitles.stats, href: routes.stats },
        { name: LinkTitles.activity, href: routes.activity },
        { name: LinkTitles.guestbook, href: routes.guestbook },
        { name: LinkTitles.recommends, href: routes.recommends },
        { name: LinkTitles.journey, href: routes.journey },
        { name: LinkTitles.quotes, href: routes.quotes },
        { name: LinkTitles.tweets, href: routes.tweets },
        { name: LinkTitles.rss, href: routes.rss },
        { name: LinkTitles.resume, href: routes.resume }
    ]
};
