import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl font-extrabold text-white uppercase">
          {" "}
          My Skills
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="container grid md:grid-cols-2 gap-6 p-4">
        <div className="px-4 py-12  rounded-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 ">
          <h2  className="mb-4 text-xl font-extrabold text-white uppercase">
            Technology
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>HTML5</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>CSS3</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Bootstrap</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Javascript</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>React</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>MongoDB</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Express Js</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Node Js</span>
            </li>
          </ul>
        </div>
        <div className="px-4 py-12 rounded-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 ">
          <h2 className="mb-4 text-xl font-extrabold text-white uppercase">
            Tools
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Vs Code</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Vercel</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Netlify</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Codepen</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Github</span>
            </li>

            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Chrome Dev Tool</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaAngleRight className="text-success" />
              <span>Figma</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
