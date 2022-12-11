import React from "react";

const HeroBanner = () => {
  return (
    <section class="bg-gray-900 ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <span class="text-sm font-medium text-green-400 text-gradient-to-r from-pink-500 to-orange-600">
            React Js Developer | MERN Stack Developer
          </span>
          <h2 class="mb-4 text-3xl uppercase font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-pink-500">
            Rejaul Karim Rabbi
          </h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-500 dark:focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
