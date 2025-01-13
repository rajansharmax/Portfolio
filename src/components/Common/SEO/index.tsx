import siteMetadata from 'data/siteMetadata';
import { Metadata } from 'next';

interface PageSEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    keywords?: string[];
    author?: string;
    robots?: string; // e.g., "index, follow"
    canonicalUrl?: string; // Canonical URL for SEO
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export function genPageMetadata({
    title,
    description,
    image,
    url = './',
    keywords = [],
    author = siteMetadata.author,
    robots = 'index, follow',
    canonicalUrl,
    ...rest
}: PageSEOProps): Metadata {
    const defaultDescription = description || siteMetadata.description;
    const defaultImage = image || siteMetadata.socialBanner;

    return {
        title,
        description: defaultDescription,
        keywords: keywords.length > 0 ? keywords.join(', ') : siteMetadata.keywords.join(', '),
        authors: [{ name: author, url: siteMetadata.siteUrl }],
        openGraph: {
            title: `${title} | ${siteMetadata.title}`,
            description: defaultDescription,
            url: url.startsWith('http') ? url : `${siteMetadata.siteUrl}${url}`,
            siteName: siteMetadata.title,
            images: [
                {
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                    alt: `${title} - ${siteMetadata.title}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            title: `${title} | ${siteMetadata.title}`,
            description: defaultDescription,
            card: 'summary_large_image',
            images: [defaultImage],
        },
        robots,
        alternates: {
            canonical: canonicalUrl || url,
        },
        other: {
            'og:locale': 'en_US',
            'og:type': 'website',
            'og:site_name': siteMetadata.title,
        },
        ...rest,
    };
}
