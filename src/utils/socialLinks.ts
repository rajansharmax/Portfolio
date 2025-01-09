import siteMetadata from "data/siteMetadata";
import React from "react";
import { FaEnvelope, FaGithub, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

interface SocialLink {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href: string;
    label: string;
}

export const socialLinks: SocialLink[] = [
    { icon: FaEnvelope, href: `mailto:${siteMetadata.email}`, label: "Email ✉️" },
    { icon: FaGithub, href: siteMetadata.github, label: "GitHub 🛠️" },
    { icon: FaFacebook, href: siteMetadata.facebook, label: "Facebook 🌐" },
    { icon: FaYoutube, href: siteMetadata.youtube, label: "YouTube 🎥" },
    { icon: FaLinkedin, href: siteMetadata.linkedin, label: "LinkedIn 💼" },
    { icon: FaTwitter, href: siteMetadata.twitter, label: "Twitter 🐦" },
    { icon: SiBluesky, href: siteMetadata.bluesky, label: "Bluesky 🌤️" },
    { icon: FaInstagram, href: siteMetadata.instagram, label: "Instagram 📸" },
    { icon: FaMedium, href: siteMetadata.medium, label: "Medium ✍️" },
];