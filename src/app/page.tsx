'use client';
import ButtonLink from "@/components/ButtonLink";
import { rajansharmax, routes } from "@/utils";
import siteMetadata from "data/siteMetadata";
import { RoughNotation } from "react-rough-notation";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText("I am a senior software developer with expertise in PHP, Laravel, Symfony, React.js, Node.js, JavaScript, jQuery, SQL, Docker, and more...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex-1 flex items-center justify-center mt-12 xl:mt-0">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Build. Code. Deliver.</h1>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6 md:space-y-0">
              <div className="relative">
                <Image
                  src={'/assets/images/rajansharmax-2.jpg'}
                  alt="RAJANSHARMAX"
                  className="rounded-lg object-cover h-[250px] w-[380px]"
                  width={380}
                  height={250}
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Hey, I&apos;m
                  <strong className="text-primary-color-500 dark:text-primary-color-dark-500">
                    <Typewriter
                      options={{
                        strings: [siteMetadata.author],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300">I started my journey as a software developer in 2022.</p>
                <p className="text-gray-600 dark:text-gray-300">Currently, I&apos;m working as a {rajansharmax.current.title} at <strong>
                  <Link href={rajansharmax.current.company.url} target="_blank" className="text-blue-500 hover:text-blue-600">
                    {rajansharmax.current.company.name}
                  </Link></strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-300">I&apos;m originally from India and currently living in <strong>Chandigarh, India</strong>.</p>
                <p className="text-gray-600 dark:text-gray-300">
                  I love <strong><a href={siteMetadata.siteUrl} target="_blank" className="text-blue-500 hover:text-blue-600">connecting</a></strong> with fellow tech enthusiasts. When I&apos;m not working, you&apos;ll find me exploring new technologies, working on personal projects, or solving problems.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Bio</h2>
            <div className="border-t-2 border-gray-300 dark:border-gray-700 mt-4 pt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-gray-600 dark:text-gray-300"
              >
                I am a senior software developer with expertise in PHP, Laravel, Symfony, React.js, Node.js, JavaScript, jQuery, SQL, Docker, and more. I&apos;m proficient in LAMP & MAMP stacks and skilled in databases like MySQL, SQL Server, PostgreSQL, and Git.
              </motion.p>

              <div className="mt-4">
                <button
                  onClick={handleCopyBio}
                  className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                  {copied ? 'Bio Copied!' : 'Copy Bio'}
                </button>
                <Link
                  href={rajansharmax.resume}
                  download
                  target="_blank"
                  className="inline-flex items-center ml-4 text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between xl:gap-12">
        <div className="flex-1 pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I am{" "}
            <span className="text-primary-color-500 dark:text-primary-color-dark-500">
              <Typewriter
                options={{
                  strings: [siteMetadata.author],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
            {`Welcome to my digital space! As a full-stack developer with expertise in all web technologies, I specialize in crafting seamless and scalable applications. From front-end to back-end, I build solutions that are efficient, secure, and tailored to meet your business needs. Whether it's creating stunning user interfaces or developing robust APIs, I bring your ideas to life with the latest technologies.`}
          </h2>
          <div className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
            <p>
              Explore my work and see how I can help you create impactful web applications that deliver results. Let&apos;s collaborate to turn your vision into reality!
              <RoughNotation
                animate
                type="box"
                show
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                Delivering end-to-end solutions with cutting-edge web technologies.
              </RoughNotation>
            </p>
            <div className="mt-8 text-slate-600 dark:text-slate-400">
              <span className="text-sm">Press</span>{" "}
              <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">⌘</span>{" "}
              <span className="text-sm">+ </span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">K</span>{" "}
              <span className="text-sm">to start</span>
            </div>
          </div>
        </div>
        <div className="flex-2 flex items-center justify-center mt-8 xl:mt-0">
          <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 xl:grid-cols-1">
            <ButtonLink
              href={routes.projects}
              icon={
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 -rotate-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </motion.svg>
              }
              label="What I built"
              gradientClass="from-pink-600 to-purple-600"
              hoverColor="text-amber-400"
              textColor="text-gray-900 dark:text-gray-100"
            />
            <ButtonLink
              href={routes.blog}
              icon={
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 -rotate-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </motion.svg>
              }
              label="Read my story"
              gradientClass="from-fuchsia-600 to-emerald-600"
              hoverColor="text-indigo-400"
              textColor="text-gray-900 dark:text-gray-100"
            />
            <ButtonLink
              href={routes.resume}
              icon={
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 -rotate-6 text-fuchsia-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </motion.svg>
              }
              label="Hire me!"
              gradientClass="from-pink-600 to-purple-600"
              hoverColor="text-primary-400"
              textColor="text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
