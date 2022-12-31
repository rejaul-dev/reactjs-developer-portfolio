import React from "react";

const Technology = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-accent">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Frontend</h2>
          <div className="font-medium">
            <p className="py-2 border-b mx-8 mt-8">HTML</p>
            <p className="py-2 border-b mx-8">CSS</p>
            <p className="py-2 border-b mx-8">Javascript</p>
            <p className="py-2 border-b mx-8">React</p>
          </div>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Backend</h2>
          <div className="">
            <p className="py-2 border-b mx-8 mt-8">Node Js</p>
            <p className="py-2 border-b mx-8">Express Js</p>
            <p className="py-2 border-b mx-8">MongoDB</p>
          </div>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Tools</h2>
          <div className="">
            <p className="py-2 border-b mx-8 mt-8">Vs Code</p>
            <p className="py-2 border-b mx-8">Git</p>
            <p className="py-2 border-b mx-8">GitHub</p>
            <p className="py-2 border-b mx-8">Vercel</p>
            <p className="py-2 border-b mx-8">Netlify</p>
            <p className="py-2 mx-8">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
