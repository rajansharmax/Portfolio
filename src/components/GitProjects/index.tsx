'use client';
import { RoughNotation } from "react-rough-notation";
import { AiFillStar, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
}

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
}

const GitProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/rajansharmax/repos');
                const data: GitHubRepo[] = await response.json();

                const filteredProjects: Project[] = data.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo) => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url,
                    stargazers_count: repo.stargazers_count,
                }));

                setProjects(filteredProjects);
            } catch (error) {
                console.error("Error fetching GitHub repos:", error);
            }
        };

        fetchProjects();
    }, []);

    if (!projects || projects.length === 0) {
        return (
            <div className="space-y-8 px-4 sm:px-8 md:px-16 lg:px-24 py-8">
                <motion.h1
                    className="text-4xl font-extrabold text-gradient bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <RoughNotation
                        type="highlight"
                        color="#f9a825"
                        show={true}
                        animationDelay={300}
                        animationDuration={3000}
                    >
                        Work. Hobby. Open Source.
                    </RoughNotation>
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I love building <strong>side projects</strong>. Here you can navigate to all{" "}
                    <strong>{projects.length} projects</strong> that I have built.
                </motion.p>
            </div>
        );
    }

    return (
        <div className="space-y-8 py-8">
            <h1 className="text-5xl font-extrabold text-gradient bg-clip-text">
                <RoughNotation
                    type="highlight"
                    color="#f9a825"
                    show={true}
                    animationDelay={300}
                    animationDuration={3000}
                >
                    Work. Hobby. Open Source.
                </RoughNotation>
            </h1>

            <motion.p
                className="text-xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                I love building <strong>side projects</strong>. Here you can navigate to all{" "}
                <strong>{projects.length} projects</strong> that I have built.
            </motion.p>

            <motion.h2
                className="text-3xl font-semibold text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                Featured Projects
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                }}
            >
                {projects.map((project) => (
                    <motion.a
                        key={project.id}
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out p-6 flex flex-col justify-between h-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                                <motion.p
                                    className="text-2xl font-semibold hover:text-yellow-500 transition-colors duration-300"
                                    whileHover={{ color: "#f9a825" }}
                                >
                                    {project.name}
                                </motion.p>
                                <AiOutlineLink className="text-2xl transition-colors duration-300" />
                            </div>
                            <motion.p
                                className="text-gray-600 dark:text-gray-300 flex-grow mb-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.description || "No description provided"}
                            </motion.p>
                            <motion.div
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <AiFillStar className="text-yellow-500" />
                                <span>{project.stargazers_count || 0} Stars</span>
                            </motion.div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default GitProjects;
