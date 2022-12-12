import React from "react";
import { FaCheck } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-2xl font-extrabold text-primary uppercase">
          {" "}
          My Skills
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div  className="grid md:grid-cols-2 gap-4 ">
        <div  className="w-3/4 mx-auto rounded-md">
          <div className="card bg-gray-800 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Experience in Technology</h2>
              <ul className="grid md:grid-cols-3 ">
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>HTML5</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>CSS</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Javascript</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>React</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>MongoDB</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Express JS</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Node JS</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Tailwind CSS</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4 mx-auto rounded-md">
          <div className="card bg-gray-800 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Experience in Tools</h2>
              <ul className="grid md:grid-cols-3  sm:grid-cols-2">
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>VS Code</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Github</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Git</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Netlify</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Firebase</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Vercel</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>NPM</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Tailwind CSS</p>
                </li>
                <li className="flex justify-between items-center mt-2">
                  <FaCheck className="text-xl text-success mr-2" />
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
