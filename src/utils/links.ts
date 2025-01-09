import { routes } from "./routes";
import { LinkTitles } from "./linkTitles";
import { Link } from "./types";

export const Links: Record<string, Link> = {
    [LinkTitles.home]: { href: routes.home, title: LinkTitles.home },
    [LinkTitles.blog]: { href: routes.blog, title: LinkTitles.blog },
    [LinkTitles.snippets]: { href: routes.snippets, title: LinkTitles.snippets },
    [LinkTitles.projects]: { href: routes.projects, title: LinkTitles.projects },
    [LinkTitles.about]: { href: routes.about, title: LinkTitles.about },
    [LinkTitles.guestbook]: { href: routes.guestbook, title: LinkTitles.guestbook },
    [LinkTitles.tags]: { href: routes.tags, title: LinkTitles.tags },
    [LinkTitles.uses]: { href: routes.uses, title: LinkTitles.uses },
    [LinkTitles.now]: { href: routes.now, title: LinkTitles.now },
    [LinkTitles.stats]: { href: routes.stats, title: LinkTitles.stats },
    [LinkTitles.activity]: { href: routes.activity, title: LinkTitles.activity },
    [LinkTitles.recommends]: { href: routes.recommends, title: LinkTitles.recommends },
    [LinkTitles.journey]: { href: routes.journey, title: LinkTitles.journey },
    [LinkTitles.quotes]: { href: routes.quotes, title: LinkTitles.quotes },
    [LinkTitles.tweets]: { href: routes.tweets, title: LinkTitles.tweets },
    [LinkTitles.rss]: { href: routes.rss, title: LinkTitles.rss },
    [LinkTitles.resume]: { href: routes.resume, title: LinkTitles.resume }
};
