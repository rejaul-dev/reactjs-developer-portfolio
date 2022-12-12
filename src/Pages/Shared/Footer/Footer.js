import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../../../assets/profile/rejaul.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-accent">
      <div className="">
        <img
          alt=""
          className="w-16 h-16 border rounded-full dark:bg-gray-500 dark:border-gray-700"
          src={profile}
        />
        <p className="font-bold text-xl">Rejaul Karim Rabbi</p>
        <p> Petaling Jaya, Selangor, Malaysia</p>
      </div>
      <div className="grid grid-flow-col gap-4">
        <a href="https://github.com/rejaul-karim10" target="_blank" rel="noreferrer">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/rejaul-karim-rabbi/" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
