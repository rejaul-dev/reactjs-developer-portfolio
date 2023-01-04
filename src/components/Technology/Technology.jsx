import React from "react";
import ReactIcon from "../../assets/React-icon.png";
import JavascriptIcon from "../../assets/JavaScript-logo.png";
import CssIcon from "../../assets/css.png";
import HtmlIcon from "../../assets/Html.png";

const Technology = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-accent">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* front end card */}
          <h2 className="text-2xl font-bold text-center py-2">Frontend</h2>
          <div className="font-medium p-10">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full">
                <img src={HtmlIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">HTML</p>
              </div>
            </div>
            
            <div className="flex items-center mt-4 ">
              <div className="bg-white p-2 rounded-full">
                <img src={CssIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">CSS</p>
              </div>
            </div>
            

            <div className="flex items-center mt-4 ">
              <div className="bg-yellow-300 p-2 rounded-full">
                <img src={JavascriptIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">Javascript</p>
              </div>
            </div>

            <div className="flex items-center mt-4 ">
              <div className="bg-accent p-2 rounded-full">
                <img src={ReactIcon} className="h-8" alt="" />
              </div>
              <p className="py-2 border-b mx-8">React</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* front end card */}
          <h2 className="text-2xl font-bold text-center py-2">Backend</h2>
          <div className="font-medium p-10">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full">
                <img src={HtmlIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">HTML</p>
              </div>
            </div>
            
            <div className="flex items-center mt-4 ">
              <div className="bg-white p-2 rounded-full">
                <img src={CssIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">CSS</p>
              </div>
            </div>
            

            <div className="flex items-center mt-4 ">
              <div className="bg-yellow-300 p-2 rounded-full">
                <img src={JavascriptIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">Javascript</p>
              </div>
            </div>

            <div className="flex items-center mt-4 ">
              <div className="bg-accent p-2 rounded-full">
                <img src={ReactIcon} className="h-8" alt="" />
              </div>
              <p className="py-2 border-b mx-8">React</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Tools</h2>
          <div className="font-medium p-10">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full">
                <img src={HtmlIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">Git</p>
              </div>
            </div>
            
            <div className="flex items-center mt-4 ">
              <div className="bg-white p-2 rounded-full">
                <img src={CssIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">Github</p>
              </div>
            </div>
            

            <div className="flex items-center mt-4 ">
              <div className="bg-yellow-300 p-2 rounded-full">
                <img src={JavascriptIcon} className="h-8" alt="" />
              </div>
              <div>
                <p className="py-2 border-b mx-8">Netlify</p>
              </div>
            </div>

            <div className="flex items-center mt-4 ">
              <div className="bg-accent p-2 rounded-full">
                <img src={ReactIcon} className="h-8" alt="" />
              </div>
              <p className="py-2 border-b mx-8">Vercel</p>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Technology;
