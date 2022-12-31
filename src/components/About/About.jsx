import Lottie from "lottie-react";
import React from "react";
import webDeveloper from "../../Lotties/software-developer.json";

const About = () => {
  return (
    <div className="w-full bg-primary py-16 px-4">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
        <div className="w-[80%] mx-auto">
          <Lottie animationData={webDeveloper} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-secondary py-2">
            About me
          </h1>
          <p className="md:text-mg text-sm">
            I am a full-stack developer with experience in the MERN stack
            (MongoDB, Express, React, and Node.js), I have a strong foundation
            in modern web development technologies. I am skilled in creating
            visually appealing and user-friendly web applications and have a
            passion for building scalable and efficient back-end systems.
            <p />
            <br />
            <p>
              I am currently seeking an intern or full-time position where I can
              utilize my skills and continue learning and growing as a
              developer. I am comfortable working with both front-end and
              back-end technologies and have a strong understanding of
              responsive design and user experience.
            </p>
            <br />
            <p>
              I am excited to bring my skills and expertise to new challenges
              and am available for both intern and full-time opportunities. I am
              open to connecting and discussing potential projects. Thank you
              for taking the time to review my profile.
            </p>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
