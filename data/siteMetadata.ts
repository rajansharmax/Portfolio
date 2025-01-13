import { keywords } from "./seoKeywords";

export const siteMetadata = {
    title: "Rajan Sharma - Senior Full Stack Developer",
    author: "Rajan Sharma",
    username: "rajansharmax",
    headerTitle: "Rajan Sharma",
    description: "Rajan Sharma - Senior Full Stack Developer specializing in PHP, React.js, Node.js, Docker, and more. Building scalable and efficient web applications.",
    keywords: keywords,
    language: "en-us",
    theme: "system",
    siteUrl: "https://rajansharmax.vercel.app",
    siteRepo: "https://github.com/rajansharmax/Portfolio",
    siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
    socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.png`,
    mastodon: "https://mastodon.social/@rajansharmax",
    email: "rajansharmaa46@gmail.com",
    phone: "+91 9023232046",
    github: "https://github.com/rajansharmax",
    x: "https://twitter.com/rajansharmax",
    twitter: "https://twitter.com/rajansharmax",
    facebook: "https://facebook.com/rajansharmax",
    youtube: "https://youtube.com/@rajansharmax",
    linkedin: "https://www.linkedin.com/in/rajansharmax/",
    threads: "https://www.threads.net/@rajansharmax",
    instagram: "https://www.instagram.com/rajansharma.x/",
    medium: "https://medium.com/@rajansharmax",
    bluesky: "https://bsky.app/rajansharmax",
    whatsapp: "https://wa.me/+919023232046",
    linktree: "https://linktr.ee/rajansharmax",
    twitterId: "1676099412546793473",
    locale: "en-US",
    stickyNav: false,
    defaultTheme: 'system',
    company: {
        name: "BitBrew Labs",
        url: "https://bitbrewlabs.vercel.app",
        image: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
        address: "Chandigarh, India",
        phone: "+91 9023232046",
        email: "rajansharmaa46@gmail.com",
        website: "https://bitbrewlabs.vercel.app", // https://bitbrewlabs.com
        linkedin: "https://www.linkedin.com/company/bitbrew-labs/",
        github: "https://github.com/bitbrewlabs",
        facebook: "https://www.facebook.com/bitbrewlabs",
        twitter: "https://twitter.com/bitbrewlabs",
        youtube: "https://youtube.com/@bitbrewlabs",
        instagram: "https://www.instagram.com/bitbrewlabs/",
        medium: "https://medium.com/@bitbrewlabs",
        threads: "https://www.threads.net/@bitbrewlabs",
        bluesky: "https://bsky.app/bitbrewlabs",
        whatsapp: "https://wa.me/+919023232046",
        linktree: "https://linktr.ee/bitbrewlabs",
        twitterId: "1676099412546793473",
        locale: "en-US",
    },
    urls: {
        twitterDirectMessage: "https://twitter.com/messages/compose?recipient_id=1676099412546793473&text=Hey Rajan",
        whatsAppDirectMessage: "https://api.whatsapp.com/send?phone=9023232046&text=Hello+rajan",
    },
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
        umamiAnalytics: {
            // We use an env variable for this site to avoid other users cloning our analytics ID
            umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
            // You may also need to overwrite the script if you're storing data in the US - ex:
            // src: 'https://us.umami.is/script.js'
            // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
        },
        // plausibleAnalytics: {
        //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
        // If you are hosting your own Plausible.
        //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
        // },
        // simpleAnalytics: {},
        // posthogAnalytics: {
        //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        googleAnalytics: {
            googleAnalyticsId: 'GTM-NQX8SHJ4',
        },
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
        // Please add your .env file and modify it according to your selection
        provider: "buttondown",
    },
    comments: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: "giscus", // supported providers: giscus, utterances, disqus
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
            mapping: "pathname", // supported options: pathname, url, title
            reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: "0",
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: "light",
            // theme when dark mode
            darkTheme: "transparent_dark",
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: "",
            // This corresponds to the `data-lang="en"` in giscus's configurations
            lang: "en",
        },
    },
    search: {
        provider: "kbar", // kbar or algolia
        kbarConfig: {
            searchDocumentsPath: `${process.env.BASE_PATH || ""}/search.json`, // path to load documents to search
        },
        // provider: 'algolia',
        // algoliaConfig: {
        //   // The application ID provided by Algolia
        //   appId: 'R2IYF7ETH7',
        //   // Public API key: it is safe to commit it
        //   apiKey: '599cec31baffa4868cae4e79f180729b',
        //   indexName: 'docsearch',
        // },
    },
};

export default siteMetadata;
