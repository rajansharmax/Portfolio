'use client';
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import SearchPage from "@/components/SearchPage";
import ThemeSwitch from "@/components/ThemeSwitch";
import DropMenu from "@/components/DropMenu";
import { NavLinks } from "@/utils";
import { sendGTMEvent } from '@next/third-parties/google';
import siteMetadata from "data/siteMetadata";
import useSound from "use-sound";

const Header = ({ currentPath }: { currentPath: string }) => {

    const [ThemeSound] = useSound('/static/sounds/link-change.mp3');

    return (
        <header className="flex items-center justify-between py-10">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                        ~
                        <Typewriter
                            options={{
                                strings: [currentPath],
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
                            onClick={() => sendGTMEvent({ event: 'buttonClicked', value: link.title })}
                            key={link.title}
                            href={link.href}
                            className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                            onClickCapture={() => ThemeSound()}
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
    );
};

export default Header;