'use client';
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "data/siteMetadata";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Typewriter from 'typewriter-effect'
import SearchPage from "@/components/SearchPage";
import ThemeSwitch from "@/components/ThemeSwitch";
import DropMenu from "@/components/DropMenu";
import { NavLinks } from "@/utils";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const currentPath = usePathname();
    return (<>
        <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
                <header className="flex items-center justify-between py-10">
                    <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                            <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                                {`~${currentPath}`}{' '}
                                <Typewriter
                                    options={{
                                        strings: [],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center text-base leading-5">
                        <div className="hidden sm:block">
                            {NavLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <SearchPage />
                        <ThemeSwitch />
                        <DropMenu />
                    </div>
                </header>
                <main className="mb-auto">{children}</main>
            </div>
        </SectionContainer>
    </>);
}

export default LayoutWrapper;