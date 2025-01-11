'use client';
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "data/siteMetadata";
import { usePathname } from 'next/navigation';
import { GoogleTagManager } from '@next/third-parties/google';
import Main from "@/components/Layout/Main";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const currentPath = usePathname();
    return (
        <>
            <GoogleTagManager gtmId={siteMetadata.analytics.googleAnalytics.googleAnalyticsId} />
            <SectionContainer>
                <div className="flex h-screen flex-col justify-between">
                    <Header currentPath={currentPath} />
                    <Main>{children}</Main>
                    <Footer />
                </div>
            </SectionContainer>
        </>
    );
};

export default LayoutWrapper;