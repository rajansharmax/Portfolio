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
    [LinkTitles.resume]: { href: routes.resume, title: LinkTitles.resume },
    [LinkTitles.signin]: { href: routes.signin, title: LinkTitles.signin },
    [LinkTitles.instagram]: { href: routes.instagram, title: LinkTitles.instagram },
    [LinkTitles.youtube]: { href: routes.youtube, title: LinkTitles.youtube },
    [LinkTitles.reachme]: { href: routes.reachme, title: LinkTitles.reachme },
    [LinkTitles.linkedin]: { href: routes.linkedin, title: LinkTitles.linkedin },
    [LinkTitles.github]: { href: routes.github, title: LinkTitles.github },
    [LinkTitles.facebook]: { href: routes.facebook, title: LinkTitles.facebook },
    [LinkTitles.twitter]: { href: routes.twitter, title: LinkTitles.twitter },
    [LinkTitles.medium]: { href: routes.medium, title: LinkTitles.medium },
    [LinkTitles.threads]: { href: routes.threads, title: LinkTitles.threads }
};
