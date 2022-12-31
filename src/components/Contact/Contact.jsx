import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-[1080px] h-80 mx-auto py-[80px]">
        <div className="">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-secondary ">Get In touch With Me!</h1>
        <p className="md:text-mg text-sm mt-4">Contact me to discuss potential job openings or <br /> to learn more about my professional goals and interests.</p>
          <label
            htmlFor="contactModal"
            className="btn btn-outline btn-success w-[200px] rounded-md my-6 py-3"
          >
            Say Hello
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
