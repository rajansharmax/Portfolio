import siteMetadata from "data/siteMetadata";
import React, { ReactNode } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface HandlebarsProps {
    email?: string;
}

interface HandlebarLinkProps {
    icon: ReactNode;
    link: string;
}

const HandlebarLink = ({ icon, link }: HandlebarLinkProps) => (
    <li className="after:last:hidden after:block after:mx-auto after:my-4 after:w-[1px] after:scale-x-75 after:h-[1rem] after:dark:bg-neutral-50 after:bg-neutral-900">
        <a href={link} target="_blank" rel="noopener noreferrer" className="after:bg-transparent">
            {icon}
        </a>
    </li>
);

const Handlebars = ({ email = siteMetadata.email }: HandlebarsProps) => {
    return (
        <div className="hidden sm:block">
            <div className="fixed right-0 grid w-[8rem] h-screen my-auto place-items-center">
                <div className="font-thin rotate-90 flex flex-col items-center">
                    <a href={`mailto:${email}`} className="font-thin tracking-wide text-sm flex items-center space-x-1">
                        <FaEnvelope className="text-xl" />
                        <span>{email}</span>
                    </a>
                </div>
            </div>

            <div className="fixed left-0 grid place-items-center h-screen my-auto w-[4rem]">
                <ul>
                    <HandlebarLink icon={<FaGithub className="text-xl" />} link={siteMetadata.github} />
                    <HandlebarLink icon={<FaInstagram className="text-xl" />} link={siteMetadata.instagram} />
                    <HandlebarLink icon={<FaTwitter className="text-xl" />} link={siteMetadata.twitter} />
                    <HandlebarLink icon={<FaLinkedin className="text-xl" />} link={siteMetadata.linkedin} />
                    <HandlebarLink icon={<FaFacebook className="text-xl" />} link={siteMetadata.facebook} />
                    <HandlebarLink icon={<FaYoutube className="text-xl" />} link={siteMetadata.youtube} />
                    <HandlebarLink icon={<FaWhatsapp className="text-xl" />} link={siteMetadata.whatsapp} />
                </ul>
            </div>
        </div>
    );
};

export default Handlebars;
