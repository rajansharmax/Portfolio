import Link from "next/link";
import siteMetadata from "data/siteMetadata";
import { socialLinks } from "@/utils";

const Footer = () => {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="mb-6 flex flex-wrap justify-center gap-4">
                    {socialLinks.map(({ icon: Icon, href, label }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </a>
                    ))}
                </div>

                <div className="mb-4 flex flex-wrap justify-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{`👨‍💻 ${siteMetadata.author}`}</span>
                    <span>{` • `}</span>
                    <span>{`© ${new Date().getFullYear()} 🗓️`}</span>
                    <span>{` • `}</span>
                    <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">
                        {`🚀 ${siteMetadata.title}`}
                    </Link>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <Link
                        href={siteMetadata.linktree}
                        className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        🌟 ME: RAJANSHARMAX 🌟
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;