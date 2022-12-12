import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-2">
          <span className="text-sm mb-4 font-medium  text-success">
            Hello My Name is{" "}
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-white uppercase">
            Rejaul Karim Rabbi
          </h1>
          <p className="font-light text-gray-500 mb-4 sm:text-xl">
            React Js Developer
          </p>
          <a
            href="rejaul-karim.resume.pdf"
            download={"rejaul-karim.resume.pdf"}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
