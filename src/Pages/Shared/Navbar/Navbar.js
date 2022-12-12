import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav class="bg-white shadow dark:bg-gray-800">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="#home"
          class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          home
        </a>

        <a
          href="#about"
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          About
        </a>

        <a
          href="#skills"
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Skills
        </a>

        <a
          href="#portfolio"
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contact
        </a>

        <a
        className="md:mr-8 mr-4"
          href="https://www.linkedin.com/in/rejaul-karim-rabbi/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-xl" />
        </a>

        <a
          href="https://github.com/rejaul-karim10"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
