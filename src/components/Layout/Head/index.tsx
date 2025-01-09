'use client';
import SEO from "@/components/SEO";
import seoConfig from "data/seoConfig";
import siteMetadata from "data/siteMetadata";
import { usePathname } from "next/navigation";

const Head = () => {
    const currentPath = usePathname();
    const defaultSEO = {
        title: `Default Title - ${siteMetadata.author}`,
        description: "Default description for pages without specific SEO settings.",
    };

    const seo = seoConfig[currentPath] || defaultSEO;

    return (
        <>
            <SEO title={seo.title} description={seo.description} />
        </>
    );
};

export default Head;