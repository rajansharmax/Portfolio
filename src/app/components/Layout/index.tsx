import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default BaseLayout;
