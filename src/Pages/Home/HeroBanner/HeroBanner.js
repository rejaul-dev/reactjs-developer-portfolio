import React from "react";

const HeroBanner = () => {
  return (
    <div className="hero h-[600px]">
      <div className="text-center">
        <div className="max-w-lg">
          <p className="text-md font-bold uppercase text-success">Hello I'm</p>
          <h1 className="text-xl font-bold uppercase text-gray-400">Rejaul Karim Rabbi</h1>
          <h1 className="text-4xl font-bold uppercase text-primary">Frontend Developer</h1>
          <p className="py-2 text-gray-400 text-xl">
          Experienced in HTML, CSS Javascript, React, Express, and MongoDB
          </p>
          <a
            href="rejaul-karim.resume.pdf"
            download={"rejaul-karim.resume.pdf"}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Download Resume
          </a>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
    // <section id="home" className="h-[600px] bg-red-400">
    //   <div className="">
    //     <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-2">
    //       <span className="text-sm mb-4 font-medium  text-success">
    //         Hello, My Name is{" "}
    //       </span>
    //       <h3 className="mb-4 text-2xl font-extrabold text-primary uppercase">
    //         Rejaul Karim Rabbi<br />
    //       </h3>
    //       <h1 className="text-5xl font-extrabold text-primary uppercase">React Js Developer</h1>
    //       <p className="font-light text-gray-500 mb-4 sm:text-xl">
    //       Experienced in HTML, CSS Javascript, React, Express, and MongoDB</p>
    //       <a
    //         href="rejaul-karim.resume.pdf"
    //         download={"rejaul-karim.resume.pdf"}
    //         className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
    //       >
    //         Download Resume
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroBanner;
