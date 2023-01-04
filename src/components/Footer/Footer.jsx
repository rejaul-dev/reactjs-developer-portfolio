import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-4">
      <div className="max-w-[1080px] mx-auto p-4">
        <ul className="flex">
          <li className=" mr-2 text-[12px] text-success">Medium</li>
          <li className=" mr-2 text-[12px] text-success">LinkedIn</li>
          <li className="text-[12px] text-success">GitHub</li>
        </ul>
        <a href="/" className="text-[12px] text-white hover:text-success">Designed and built by Rejaul Karim </a>
      </div>
    </div>
  );
};

export default Footer;
