import React from "react";

const ContactModal = () => {
  return (
    <>
      
      <input type="checkbox" id="contactModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-secondary">
          <label
            htmlFor="contactModal"
            className="btn btn-sm btn-circle btn-primary hover:btn-success absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold text-primary">Get in touch!</h3>
          <p className="md:text-mg text-sm text-primary mt-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="mt-4">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-secondary w-full mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-secondary w-full mb-4"
              />
              <textarea
                className="textarea textarea-secondary w-full mb-4"
                placeholder="Write Message...."
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="btn btn-primary w-full cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
