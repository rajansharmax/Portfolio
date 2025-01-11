import LayoutWrapper from "@/components/Layout/LayoutWrapper";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return(<>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    </>);
};

export default BaseLayout;