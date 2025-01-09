// data/seoConfig.ts
type SEOConfig = {
    [path: string]: {
        title: string;
        description: string;
    };
};

const seoConfig: SEOConfig = {
    "/": {
        title: "Home - My Website",
        description: "Welcome to my website, explore my portfolio and activities.",
    },
    "/about": {
        title: "About Me - My Website",
        description: "Learn more about me and my journey.",
    },
    "/contact": {
        title: "Contact - My Website",
        description: "Get in touch with me for collaborations or inquiries.",
    },
    "/activities": {
        title: "Activities - My Website",
        description: "Explore my activities and latest updates.",
    },
};

export default seoConfig;
