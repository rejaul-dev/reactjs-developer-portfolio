import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-primary border-b border-b-gray-500">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between py-4">
          <h1>Fighter Coder.</h1>
          <ul className="flex justify-between">
            <li className="mr-4 md:text-md btn btn-xs text-xs">Home</li>
            <li className="mr-4 md:text-md btn btn-xs text-xs">About</li>
            <li className="mr-4 md:text-md btn btn-xs text-xs">Skills</li>
            <li className="mr-4 md:text-md btn btn-xs text-xs">Projects</li>
            <li className="mr-4 md:text-md btn btn-xs text-xs">Blog</li>
            <li className="mr-4 md:text-md btn btn-xs text-xs">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
