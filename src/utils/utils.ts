import { NavLinks } from "./navLinks";
import { Link } from "./types";

/**
 * Get a single link by its title
 * @param title - Title of the link to find
 * @returns The matching link or undefined
 */
export const getLinkByTitle = (title: string): Link | undefined => {
    return NavLinks.find((link) => link.title === title);
};

/**
 * Get a single link by its href
 * @param href - Href of the link to find
 * @returns The matching link or undefined
 */
export const getLinkByHref = (href: string): Link | undefined => {
    return NavLinks.find((link) => link.href === href);
};

/**
 * Generate a list of link titles
 * @returns An array of all link titles
 */
export const getAllLinkTitles = (): string[] => {
    return NavLinks.map((link) => link.title);
};

/**
 * Check if a specific title exists in the navigation links
 * @param title - Title to check for
 * @returns True if the title exists, false otherwise
 */
export const isTitleInLinks = (title: string): boolean => {
    return NavLinks.some((link) => link.title === title);
};
