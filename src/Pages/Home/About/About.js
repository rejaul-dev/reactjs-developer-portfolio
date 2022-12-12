const About = () => {
  return (
    <section id="about" className="h-[500px]">
      <div className="mx-auto max-w-screen-sm text-center pt-32">
        <h2 className="text-2xl text-primary font-extrabold uppercase">
          {" "}
          About Me
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        I have been working with React and found it to be a rewarding experience. I enjoy setting up the environment to create components using React. I am also familiar with web packs and other build tools.
        </p>
      </div>
    </section>
  );
};

export default About;
