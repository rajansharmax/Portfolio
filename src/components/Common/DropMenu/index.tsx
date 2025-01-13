import { Fragment, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import {
    CodeIcon,
    HomeIcon,
    Pencil1Icon,
    DiscIcon,
    HamburgerMenuIcon,
    FrameIcon,
    LaptopIcon,
    BarChartIcon,
    DrawingPinIcon,
    Link2Icon,
    QuoteIcon,
    CalendarIcon,
    PersonIcon,
    ArchiveIcon,
    TwitterLogoIcon,
    RocketIcon,
    ChatBubbleIcon,
    EnterIcon,
    MagicWandIcon,
} from '@radix-ui/react-icons';
import useSound from 'use-sound';
import Link from 'next/link';
import { routes } from '@/utils';
import { FaYoutube } from 'react-icons/fa';

export default function DropMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIcon = () => setIsOpen(!isOpen);

    const [ThemeSound] = useSound('/static/sounds/page-change.mp3');

    const menuItems = [
        { href: routes.home, label: 'Home', icon: <HomeIcon /> },
        { href: routes.blog, label: 'Blog', icon: <Pencil1Icon /> },
        { href: routes.hireMe, label: 'Hire Me', icon: <MagicWandIcon /> },
        { href: routes.snippets, label: 'Snippets', icon: <CodeIcon /> },
        { href: routes.projects, label: 'Projects', icon: <ArchiveIcon /> },
        { href: routes.about, label: 'About', icon: <PersonIcon /> },
        { href: routes.contact, label: 'Contact', icon: <Link2Icon /> },
        { href: routes.tags, label: 'Tags', icon: <FrameIcon /> },
        { href: routes.guestbook, label: 'Guestbook', icon: <ChatBubbleIcon /> },
        { href: routes.uses, label: 'Uses', icon: <LaptopIcon /> },
        { href: routes.now, label: 'Now', icon: <DiscIcon /> },
        { href: routes.stats, label: 'Stats', icon: <BarChartIcon /> },
        { href: routes.journey, label: 'Journey', icon: <RocketIcon /> },
        { href: routes.recommends, label: 'Recommends', icon: <DrawingPinIcon /> },
        { href: routes.quotes, label: 'Quotes', icon: <QuoteIcon /> },
        { href: routes.activity, label: 'Activity', icon: <CalendarIcon /> },
        { href: routes.tweets, label: 'Tweets', icon: <TwitterLogoIcon /> },
        { href: routes.instagram, label: 'Instagram', icon: <EnterIcon /> },
        { href: routes.youtube, label: 'Youtube', icon: <FaYoutube /> },
        // { href: routes.linkedin, label: 'Linkedin', icon: <FaLinkedin /> },
        // { href: routes.github, label: 'Github', icon: <FaGithub /> },
        // { href: routes.facebook, label: 'Facebook', icon: <FaFacebook /> },
        // { href: routes.twitter, label: 'Twitter', icon: <FaTwitter /> },
        // { href: routes.medium, label: 'Medium', icon: <FaMedium /> },
        // { href: routes.threads, label: 'Threads', icon: <EnterIcon /> },
    ];

    return (
        <Menu as="div" className="relative z-10 inline-block text-left">
            <div>
                <MenuButton
                    className="ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
                    onClick={toggleIcon}
                >
                    <motion.div
                        className="flex h-8 w-8 items-center justify-center p-2"
                        whileTap={{ scale: 0.5 }}
                        transition={{ duration: 0.1, ease: 'easeIn' }}
                        aria-label="Toggle List Menu"
                    >
                        <HamburgerMenuIcon className="h-4 w-4" />
                    </motion.div>
                </MenuButton>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                afterEnter={() => {
                    toggleIcon();
                    ThemeSound();
                }}
                afterLeave={() => {
                    toggleIcon();
                    ThemeSound();
                }}
            >
                <MenuItems className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800">
                    <div className="py-1">
                        {menuItems.map(({ href, label, icon }, index) => (
                            <MenuItem key={index}>
                                {({ active }) => (
                                    <Link href={href}>
                                        <div
                                            className={classNames(
                                                active
                                                    ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                                                    : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            <div className="flex flex-row">
                                                {icon && <span className="mr-4 mt-0.5">{icon}</span>}
                                                {label}
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </MenuItem>
                        ))}
                    </div>

                    <div className="py-1">
                        <MenuItem>
                            {({ active }) => (
                                <Link href={routes.signin}>
                                    <div
                                        className={classNames(
                                            active
                                                ? 'cursor-pointer bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                                                : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                                            'block cursor-pointer px-4 py-2 text-sm'
                                        )}
                                    >
                                        <div className="flex flex-row">
                                            <EnterIcon />
                                            <div className="ml-4">Sign In</div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </MenuItem>
                    </div>
                </MenuItems>
            </Transition>
        </Menu>

    );
}
