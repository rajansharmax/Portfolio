import Link from 'next/link';
import { FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

const projects = [
    {
        name: "Portfolio Template",
        description: "A customizable Next.js portfolio template to showcase your work and skills.",
        icon: <FaGithub className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project1"
    },
    {
        name: "NextStore",
        description: "An eCommerce application built with Next.js featuring modern design and functionality.",
        icon: <FaCode className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project2"
    },
    {
        name: "Trackly Up",
        description: "A task-tracking web app with real-time updates using WebSocket and an intuitive UI.",
        icon: <FaLaptopCode className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project3"
    },
    {
        name: "Social Scheduler",
        description: "A tool for scheduling social media posts, with features to optimize posting times.",
        icon: <FaLaptopCode className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project4"
    },
    {
        name: "NodeJS Boilerplate",
        description: "A starter template for Node.js projects with pre-configured best practices.",
        icon: <FaLaptopCode className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project5"
    },
    {
        name: "Docker Boilerplate",
        description: "A ready-to-use Docker configuration for PHP and React/Next.js projects.",
        icon: <FaLaptopCode className="h-8 w-8 text-gray-900 dark:text-white" />,
        link: "https://github.com/rajansharmax/project6"
    }
];

const FeaturedProjects = () => {
    return (
        <div>
            <RoughNotation
                type="underline"
                color="#FFD700"
                strokeWidth={2}
                animationDelay={500}
                animationDuration={2000}
                show={true}
            >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Featured Projects</h2>
            </RoughNotation>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                Check out some of my latest projects that showcase my skills and creativity in web development:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-800 duration-300">
                        <div className="flex items-center mb-4">
                            {project.icon}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{project.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <Link
                                href={project.link}
                                target="_blank"
                                className="text-blue-400 hover:text-white transition-colors duration-300"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedProjects;