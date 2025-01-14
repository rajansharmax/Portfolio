'use client';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';
import Link from 'next/link';
import { Link as LinkType, Links } from '@/utils';
import { useState } from 'react';

const SiteMap = () => {
    const [Items] = useState<LinkType[]>(Object.values(Links));

    return (
        <div className="min-h-screen flex flex-col items-center py-12">
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-8 tracking-tight"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="relative inline-block">
                    <RoughNotation
                        type="highlight"
                        color="#f9b400"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                    >
                        Site Map
                    </RoughNotation>
                </div>
            </motion.h1>

            {/* Links Container */}
            <motion.div
                className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {Items.map((link) => (
                    <motion.div
                        key={link.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        transition={{ duration: 0.3 }}
                    >
                        <Link href={link.href} className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                            {link.title}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SiteMap;
