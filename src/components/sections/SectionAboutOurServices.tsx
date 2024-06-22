import Link from 'next/link'
import React from 'react'

export const SectionAboutOurServices = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            I'm a beginner at web developpement
          </h2>
          <p className="mb-4 font-light">
            On this project i learned the importance of planing things in
            advance, i had a hard time thinking the architecture of the website
            and how to do my components. to be honest, i'm not satisfied by the
            result, i don't like the code of my components who lack reusability,
            and the responsive is lacking at time.
          </p>
          <p className="mb-4 font-medium">
            That said, i had fun and i will probably continue to upgrade it over
            time.
          </p>
          <Link
            href="https://github.com/Qcucchiara/NextCoin-brief-7"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            My Git-hub
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
