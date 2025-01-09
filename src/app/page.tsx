'use client';
import ButtonLink from "@/components/ButtonLink";
import { routes } from "@/utils";
import siteMetadata from "data/siteMetadata";
import { RoughNotation } from "react-rough-notation";
import Typewriter from 'typewriter-effect'

const App = () => {
  return (
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
      <div className="flex-2 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-8 py-12">
          <ButtonLink
            href={routes.projects}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 -rotate-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            }
            label="What I built"
            gradientClass="from-pink-600 to-purple-600"
            hoverColor="text-amber-400"
            textColor="text-gray-900 dark:text-gray-100"
          />
          <ButtonLink
            href={routes.blog}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 -rotate-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            label="Read my story"
            gradientClass="from-fuchsia-600 to-emerald-600"
            hoverColor="text-indigo-400"
            textColor="text-gray-900 dark:text-gray-100"
          />
          <ButtonLink
            href={routes.resume}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 -rotate-6 text-fuchsia-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            }
            label="Hire me!"
            gradientClass="from-pink-600 to-purple-600"
            hoverColor="text-primary-400"
            textColor="text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
