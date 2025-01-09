import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    gradientClass: string;
    hoverColor: string;
    textColor: string;
}

const ButtonLink = ({ href, icon, label, gradientClass, hoverColor, textColor }: ButtonLinkProps) => {
    return (
        <div className="my-2">
            <div className="group relative">
                <div className={`animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r ${gradientClass} opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200`}></div>
                <Link href={href}>
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                        <span className="flex items-center space-x-5">
                            {icon}
                            <span className={`pr-6 ${textColor}`}>{label}</span>
                        </span>
                        <span className={`pl-6 ${hoverColor} transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100`}>
                            &rarr;
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ButtonLink;