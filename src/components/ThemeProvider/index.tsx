'use client';
import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import siteMetadata from "data/siteMetadata";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <>
                {children}
            </>
        );
    }

    return (
        <NextThemesProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;
