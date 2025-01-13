import Link from 'next/link'

interface LinkProps {
    href?: string,
    children: React.ReactNode
}

const CustomLink = ({ href, ...rest }: LinkProps) => {
    const isInternalLink = href && href.startsWith('/')
    const isAnchorLink = href && href.startsWith('#')

    if (isInternalLink) {
        return (
            <Link href={href} legacyBehavior>
                <a {...rest} />
            </Link>
        )
    }

    if (isAnchorLink) {
        return <a href={href} {...rest} />
    }

    return (
        <a
            className="special-underline-new no-underline hover:text-gray-100 dark:hover:text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
        />
    )
}

export default CustomLink
