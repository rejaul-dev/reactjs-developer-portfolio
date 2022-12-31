import Lottie from "lottie-react";
import React from "react";
import programmer from "../../Lotties/developer.json";

function Analytics() {
  return (
    <div className="w-full h-1/2 bg-primary py-16 px-4">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center pt-16">
          <p className="text-secondary uppercase font-bold">
            Rejaul Karim Rabbi
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-secondary py-2">
            Full Stack Developer
          </h1>
          <p className="md:text-mg text-sm">
            I thrive on tackling new challenges and learning new technologies.
          </p>
          <button className="btn btn-outline btn-success w-[200px] rounded-md my-6 py-3 ">
            Download Resume
          </button>
        </div>
        <div className="">
          <Lottie animationData={programmer} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
