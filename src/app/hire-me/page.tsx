'use client';
import { motion } from 'framer-motion';
import { FaRegPaperPlane, FaGithub, FaLinkedin, FaCode, FaDatabase, FaCloud, FaHandshake } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

const HireMe = () => {

    const freelancePlatforms = [
        {
            name: "Upwork",
            description: "Find me on Upwork to collaborate on exciting projects.",
            url: "https://www.upwork.com/freelancers/~your-upwork-id",
        },
        {
            name: "Fiverr",
            description: "Let&apos;s make magic happen on Fiverr. Check my services here.",
            url: "https://www.fiverr.com/your-fiverr-id",
        },
        {
            name: "Freelancer",
            description: "Collaborate with me on Freelancer for top-notch projects.",
            url: "https://www.freelancer.com/u/your-freelancer-id",
        },
        {
            name: "Toptal",
            description: "Explore opportunities with me on Toptal for high-end projects.",
            url: "https://www.toptal.com/resume/your-toptal-id",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-10">
            {/* Heading Section */}
            <motion.h1
                className="text-6xl md:text-7xl font-extrabold text-gray-800 dark:text-white text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="relative inline-block">
                    <RoughNotation
                        type="highlight"
                        color="#fa1a70"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                    >
                        Hire Me
                    </RoughNotation>
                </div>
            </motion.h1>

            {/* Introduction Section */}
            <motion.div
                className="text-xl text-gray-600 dark:text-gray-300 text-center mt-4 px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative inline-block">
                    <RoughNotation
                        type="bracket"
                        brackets={['left', 'right']}
                        color="#fa1a70"
                        show={true}
                        animationDelay={300}
                        animationDuration={2500}
                    >
                        👋 Hello! I&apos;m Rajan Sharma, a passionate and dedicated full-stack developer with over 3 years of experience in building robust and scalable web applications. I focus on delivering high-quality solutions using the latest technologies, ensuring both performance and security.
                    </RoughNotation>
                </div>
            </motion.div>

            {/* Freelance Platforms Section */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold dark:text-white mb-10">
                    <motion.span
                        className="bg-clip-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="relative inline-block">
                            <RoughNotation
                                type="underline"
                                color="#fa1a70"
                                show={true}
                                animationDelay={300}
                                animationDuration={2500}
                            >
                            Find Me on Freelance Platforms
                            </RoughNotation>
                        </div>
                    </motion.span>
                </h2>

                {/* Freelance Platforms Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {freelancePlatforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 ease-out"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <FaHandshake className="text-4xl text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{platform.name}</h3>
                            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{platform.description}</p>
                            <a
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-all"
                            >
                                Visit Profile
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                className="mt-12 text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
                }}
            >
                {/* Skills Title */}
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    <div className="relative inline-block">
                        <RoughNotation
                            type="underline"
                            color="#fa1a70"
                            show={true}
                            animationDelay={300}
                            animationDuration={2500}
                        >
                        Skills & Expertise
                        </RoughNotation>
                    </div>
                </h2>

                {/* Skills Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {/* Frontend */}
                    <motion.div
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative inline-block">
                            <RoughNotation
                                type="underline"
                                color="#f59e0b"
                                show={true}
                                animationDelay={500}
                                animationDuration={1500}
                            >
                                <FaCode className="text-4xl text-yellow-500 mb-4" />
                            </RoughNotation>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">ReactJS, Next.js, Redux, HTML5, CSS3, JavaScript, TypeScript</p>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative inline-block">
                            <RoughNotation
                                type="strike-through"
                                color="#f59e0b"
                                show={true}
                                animationDelay={700}
                                animationDuration={2000}
                            >
                                <FaGithub className="text-4xl text-yellow-500 mb-4" />
                            </RoughNotation>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">PHP (Laravel, Symfony), Node.js, Express</p>
                    </motion.div>

                    {/* Database */}
                    <motion.div
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative inline-block">
                            <RoughNotation
                                type="box"
                                color="#fa1a70"
                                show={true}
                                animationDelay={900}
                                animationDuration={1500}
                            >
                                <FaDatabase className="text-4xl text-yellow-500 mb-4" />
                            </RoughNotation>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Database</h3>
                        <p className="text-gray-600 dark:text-gray-300">MySQL, PostgreSQL, MongoDB</p>
                    </motion.div>

                    {/* Cloud */}
                    <motion.div
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative inline-block">
                            <RoughNotation
                                type="circle"
                                color="#f59e0b"
                                show={true}
                                animationDelay={1100}
                                animationDuration={2500}
                            >
                                <FaCloud className="text-4xl text-yellow-500 mb-4" />
                            </RoughNotation>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Cloud & DevOps</h3>
                        <p className="text-gray-600 dark:text-gray-300">Docker, AWS, Heroku, CI/CD</p>
                    </motion.div>
                </div>
            </motion.div>


            {/* Projects Section */}
            <motion.div
                className="mt-16 w-full max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    <div className="relative inline-block">
                        <RoughNotation
                            type="underline"
                            color="#fa1a70"
                            show={true}
                            animationDelay={500}
                            animationDuration={2500}
                        >
                            Notable Projects
                        </RoughNotation>
                    </div>
                </h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {/* Portfolio */}
                    <motion.a
                        href="https://github.com/rajansharmax/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Portfolio</h3>
                        <p className="text-gray-600 dark:text-gray-300">A personal portfolio showcasing my skills and work.</p>
                    </motion.a>

                    {/* Project 2 */}
                    <motion.a
                        href="https://github.com/rajansharmax/NextStoreOS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">NextStore</h3>
                        <p className="text-gray-600 dark:text-gray-300"> 🪽 An open, easy, fast, NextJs Ecommerce.</p>
                    </motion.a>

                    <motion.a
                        href="https://github.com/rajansharmax/Trackly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Trackly Up</h3>
                        <p className="text-gray-600 dark:text-gray-300">🚀 Trackly is a smart and simple project board designed to help you track progress, stay organized, and ensure tasks get done.</p>
                    </motion.a>
                    <motion.a
                        href="https://github.com/rajansharmax/Social-Scheduler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Social Scheduler</h3>
                        <p className="text-gray-600 dark:text-gray-300">🚀 A powerful and user-friendly tool to schedule and manage your social media posts across multiple platforms. Built with React, Node.js, and MongoDB.</p>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    <div className="relative inline-block">
                        <RoughNotation
                            type="underline"
                            color="#fa1a70"
                            show={true}
                            animationDelay={1000}
                            animationDuration={2500}
                        >
                            Let&apos;s Connect!
                        </RoughNotation>
                    </div>
                </h2>

                <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/rajansharmax/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-blue-500 dark:text-blue-300 hover:text-blue-700"
                    >
                        <FaLinkedin />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/rajansharmax/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-gray-800 dark:text-gray-300 hover:text-gray-600"
                    >
                        <FaGithub />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:rajansharmaa46@gmail.com"
                        className="text-3xl text-gray-800 dark:text-gray-300 hover:text-gray-600"
                    >
                        <FaRegPaperPlane />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HireMe;