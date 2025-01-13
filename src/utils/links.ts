import { routes } from "./routes";
import { LinkTitles } from "./linkTitles";
import { Link } from "./types";

export const Links: Record<string, Link> = {
    [routes.home]: { href: routes.home, title: LinkTitles.home },
    [routes.blog]: { href: routes.blog, title: LinkTitles.blog },
    [routes.snippets]: { href: routes.snippets, title: LinkTitles.snippets },
    [routes.hireMe]: { href: routes.hireMe, title: LinkTitles.hireMe },
    [routes.projects]: { href: routes.projects, title: LinkTitles.projects },
    [routes.about]: { href: routes.about, title: LinkTitles.about },
    [routes.guestbook]: { href: routes.guestbook, title: LinkTitles.guestbook },
    [routes.tags]: { href: routes.tags, title: LinkTitles.tags },
    [routes.uses]: { href: routes.uses, title: LinkTitles.uses },
    [routes.now]: { href: routes.now, title: LinkTitles.now },
    [routes.stats]: { href: routes.stats, title: LinkTitles.stats },
    [routes.activity]: { href: routes.activity, title: LinkTitles.activity },
    [routes.recommends]: { href: routes.recommends, title: LinkTitles.recommends },
    [routes.journey]: { href: routes.journey, title: LinkTitles.journey },
    [routes.quotes]: { href: routes.quotes, title: LinkTitles.quotes },
    [routes.tweets]: { href: routes.tweets, title: LinkTitles.tweets },
    [routes.rss]: { href: routes.rss, title: LinkTitles.rss },
    [routes.resume]: { href: routes.resume, title: LinkTitles.resume },
    [routes.signin]: { href: routes.signin, title: LinkTitles.signin },
    [routes.instagram]: { href: routes.instagram, title: LinkTitles.instagram },
    [routes.youtube]: { href: routes.youtube, title: LinkTitles.youtube },
    [routes.reachme]: { href: routes.reachme, title: LinkTitles.reachme },
    [routes.linkedin]: { href: routes.linkedin, title: LinkTitles.linkedin },
    [routes.github]: { href: routes.github, title: LinkTitles.github },
    [routes.facebook]: { href: routes.facebook, title: LinkTitles.facebook },
    [routes.twitter]: { href: routes.twitter, title: LinkTitles.twitter },
    [routes.medium]: { href: routes.medium, title: LinkTitles.medium },
    [routes.threads]: { href: routes.threads, title: LinkTitles.threads }
};
