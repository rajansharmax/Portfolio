'use client';
import siteMetadata from "data/siteMetadata";
import { usePathname } from "next/navigation";
import Head from 'next/head';

interface OgImage {
    url: string;
}

interface Props {
    title: string;
    description: string;
    ogType: string;
    ogImage: OgImage[] | string;
    twImage: string;
    canonicalUrl?: string;
}

const SeoCommon = ({ title, description, ogType, ogImage, twImage, canonicalUrl }: Props) => {
    const path = usePathname();

    const renderOgImages = () => {
        if (Array.isArray(ogImage)) {
            return ogImage.map(({ url }) => (
                <meta property="og:image" content={url} key={url} />
            ));
        }
        if (typeof ogImage === "string") {
            return <meta property="og:image" content={ogImage} key={ogImage} />;
        }
        return null;
    };

    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={canonicalUrl || `${siteMetadata.siteUrl}${path}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {renderOgImages()}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={siteMetadata.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
            <link
                rel="canonical"
                href={canonicalUrl || `${siteMetadata.siteUrl}${path}`}
            />
        </Head>
    );
};

export default SeoCommon;
