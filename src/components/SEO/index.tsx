import siteMetadata from "data/siteMetadata";
import SeoCommon from "@/components/SeoCommon";

interface Props {
    title: string;
    description: string;
}
const SEO = ({title, description}: Props) => {

    const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
    const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner

    return (
        <>
            <SeoCommon
                title={title}
                description={description}
                ogType="website"
                ogImage={ogImageUrl}
                twImage={twImageUrl}
            />
        </>
    )
}

export default SEO;