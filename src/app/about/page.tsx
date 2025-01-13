import { AiOutlineTwitter } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';
import siteMetadata from 'data/siteMetadata';
import { education, experienceData, rajansharmax } from '@/utils';
import { calculateExperienceDuration } from '@/helper';
import FeaturedProjects from '@/components/FeaturedProjects';

const About = () => {
    const company = rajansharmax.current.company.name;

    return (
        <div className="py-8">
            <div className="text-center pt-6 pb-8">
                <h1
                    className="text-4xl font-extrabold leading-tight tracking-wide sm:text-5xl sm:leading-none"
                    style={{
                        background: 'linear-gradient(135deg, #ff7eb3 0%, #f90830 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    About Me
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 xl:col-span-4">
                    <div className="sticky top-16">
                        <div className="flex flex-col items-center xl:items-center">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4">
                                <Image
                                    src={rajansharmax.avatar}
                                    alt="Rajan Kumar's Avatar"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="rounded-full object-cover border-4 border-white shadow-lg"
                                    placeholder="blur"
                                    blurDataURL={"/static/images/SVG-placeholder.png"}
                                />
                            </div>
                            <h3 className="text-2xl font-bold">{rajansharmax.name}</h3>
                            <p className="text-md text-gray-700 dark:text-gray-300">{rajansharmax.occupation}</p>
                            <p className="text-md text-gray-700 dark:text-gray-300">{company}</p>
                            <div className="mt-4">
                                <a
                                    href={siteMetadata.urls.twitterDirectMessage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-8 py-3 rounded-full border-2 border-blue-400 bg-transparent text-blue-400 font-medium text-lg transition-all hover:bg-blue-400 hover:text-white"
                                >
                                    <AiOutlineTwitter className="mr-2" />
                                    Say Hi!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-8 space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                        <RoughNotation
                            type="box"
                            color="#FF6347"
                            animationDelay={300}
                            animationDuration={3000}
                            show={true}
                        >
                            Hi there! I’m currently immersed in crafting innovative web applications and building efficient data pipelines at{' '}
                            <Link
                                href={rajansharmax.current.company.url}
                                target="_blank"
                                rel="referer"
                                aria-label={rajansharmax.current.company.name}
                                className="text-blue-300 hover:text-white transition-colors"
                            >
                                {rajansharmax.current.company.name}
                            </Link>
                        </RoughNotation>
                        . My passion lies in developing high-impact digital experiences, and I thrive on tackling intricate technical challenges to create intuitive user interfaces and powerful backend systems that drive business success.
                    </p>
                    <div>
                        <RoughNotation
                            type="highlight"
                            color="#FF6347"
                            animationDelay={1500}
                            animationDuration={2000}
                            show={true}
                        >
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-6">Education</h2>
                        </RoughNotation>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 p-6"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{edu.field}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-500">{edu.university || edu.school}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-500">{edu.year}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-500">{edu.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <FeaturedProjects />

                </div>
                <div className="col-span-12">
                    <div>
                        <RoughNotation
                            type="underline"
                            color="#FFD700"
                            strokeWidth={2}
                            animationDelay={500}
                            animationDuration={2000}
                            show={true}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Experience</h2>
                        </RoughNotation>
                        {experienceData.map((experience, index) => (
                            <div key={index} className="mt-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{experience.title}</h3>
                                <p className="text-md text-gray-600 dark:text-gray-300">
                                    <a
                                        href={experience.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-white"
                                    >
                                        {experience.company}
                                    </a>
                                    , {experience.location}
                                </p>
                                <p className="italic text-sm text-gray-500 dark:text-gray-400">
                                    {experience.range} (
                                    {calculateExperienceDuration(
                                        new Date(experience.startDate),
                                        new Date(experience.endDate)
                                    )}
                                    )
                                </p>
                                <p>{experience.text1}</p>
                                <p>{experience.text2}</p>
                                <p>{experience.text3}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <RoughNotation
                            type="highlight"
                            color="#f90830"
                            animationDelay={500}
                            animationDuration={2000}
                            show={true}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Hire Me</h2>
                        </RoughNotation>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                            I&apos;m always open to exciting opportunities and collaborations. If you have a project in mind or want to work with me, feel free to reach out!
                        </p>
                        <div className="mt-4">
                            <a
                                href={'mailto:' + rajansharmax.email}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full border-2 border-yellow-400 bg-transparent text-yellow-400 font-medium text-lg transition-all hover:bg-yellow-400 hover:text-white"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
