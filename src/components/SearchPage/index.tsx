// import { NavLists } from 'data/NavLists';
// import { Dialog, Combobox, Transition } from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';
// import { HiSearch } from 'react-icons/hi';
// import { useRouter } from 'next/navigation';
import { FiCommand } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

// type Page = {
//     name: string;
//     href: string;
// };

const SearchPage = () => {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [query, setQuery] = useState<string>('');
    const [ThemeSound] = useSound('/static/sounds/open.mp3');

    const toggleIcon = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                setIsOpen((prevState) => !prevState);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // const filteredNavigation = query
    //     ? NavLists.pages.filter((page: Page) =>
    //         page.name.toLowerCase().includes(query.toLowerCase())
    //     )
    //     : NavLists.pages;

    // const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setQuery(event.target.value);
    // };

    // const handleNavigation = (page: Page) => {
    //     setIsOpen(false);
    //     router.push(page.href);
    // };

    return (
        <>
            <motion.button
                className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-1 ring-zinc-400 transition-all duration-200 ease-in-out hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800"
                type="button"
                aria-label="Command palette"
                animate={{ rotate: isOpen ? 360 : 0 }}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                onClick={() => {
                    toggleIcon();
                    ThemeSound();
                }}
            >
                <FiCommand />
            </motion.button>

                

        </>
    );
};

export default SearchPage;
