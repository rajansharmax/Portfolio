import LayoutWrapper from "@/components/LayoutWrapper";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return(<>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    </>);
};

export default BaseLayout;