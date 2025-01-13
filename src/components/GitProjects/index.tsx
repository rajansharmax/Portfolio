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
    tags: string[];
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
                    tags: repo.tags || [],
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
            <div className="space-y-12 pb-10">
                <motion.h1
                    className="text-4xl md:text-6xl sm:text-6xl xs:text-4xl font-extrabold text-gradient bg-clip-text text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <RoughNotation
                        type="highlight"
                        color="#f9a825"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                    >
                        Work. Hobby. Open Source.
                    </RoughNotation>
                </motion.h1>

                <motion.div
                    className="relative text-xl text-gray-600 dark:text-gray-300 text-center"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative inline-block">
                        <RoughNotation
                            type="bracket"
                            brackets={["left", "right"]}
                            color="#fa1a70"
                            show={true}
                            animationDelay={300}
                            animationDuration={2500}
                            strokeWidth={2}
                        >
                            <span className="relative z-10">
                                I love building <strong>side projects</strong>. Here you can navigate to all{" "}
                                <strong>{projects.length} projects</strong> that I have built.
                            </span>
                        </RoughNotation>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="space-y-12 pb-10">
            <h1
                className="text-4xl md:text-6xl sm:text-6xl xs:text-4xl font-extrabold text-gradient bg-clip-text text-center"
            >
                <RoughNotation
                    type="highlight"
                    color="#f9a825"
                    show={true}
                    animationDelay={300}
                    animationDuration={2500}
                >
                    Work. Hobby. Open Source.
                </RoughNotation>
            </h1>

            <motion.div
                className="relative text-xl text-gray-600 dark:text-gray-300 text-center"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative inline-block">
                    <RoughNotation
                        type="bracket"
                        brackets={["left", "right"]}
                        color="#fa1a70"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                        strokeWidth={2} // optional for better visibility
                    >
                        <span className="relative z-10">
                            I love building <strong>side projects</strong>. Here you can navigate to all{" "}
                            <strong>{projects.length} projects</strong> that I have built.
                        </span>
                    </RoughNotation>
                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between h-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Project Header */}
                            <div className="flex items-center justify-between mb-4">
                                <motion.h3
                                    className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-yellow-500 transition-colors duration-300"
                                    whileHover={{ color: "#f9a825" }}
                                >
                                    {project.name}
                                </motion.h3>
                                <AiOutlineLink className="text-2xl text-gray-500 hover:text-yellow-500 transition-colors duration-300" />
                            </div>

                            {/* Project Description */}
                            <motion.p
                                className="text-gray-600 dark:text-gray-300 flex-grow mb-4 text-sm"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.description || "No description provided."}
                            </motion.p>

                            {/* Stars Count */}
                            <motion.div
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-auto"
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
