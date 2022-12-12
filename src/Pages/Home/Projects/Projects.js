import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Doctor's Portal",
      descriptions: "Full Stack Web Application",
      img: "https://i.ibb.co/f8hg8jk/Screenshot-2022-12-12-203149.png",
      live_site: "https://doctors-portal-d899f.web.app/",
      github_client: "https://github.com/rejaul-karim10/doctors-portal-client",
      github_server:"https://github.com/rejaul-karim10/doctors-portal-server",
    },
    {
      id: 1,
      name: "Laptop Hunter",
      descriptions: "Full Stack Web Application",
      img: "https://i.ibb.co/X8d22rJ/Screenshot-2022-12-12-203351.png",
      live_site: "https://resell-used-laptop.web.app/",
      github_client: "https://github.com/rejaul-karim10/resell-used-laptop-client",
      github_server:"https://github.com/rejaul-karim10/resell-used-laptop-server"
    },
    {
      id: 1,
      name: "Cloud Kitchen",
      descriptions: "Full Stack Web Application",
      img: "https://i.ibb.co/dm3Zm4w/Screenshot-2022-12-12-202637.png",
      live_site: "https://cloud-kitchen-57804.web.app",
      github_client: "https://github.com/rejaul-karim10/cloud-kitchen",
      github_server: "https://github.com/rejaul-karim10/cloud-kitchen-server"
    },
  ];

  return (
    <section id="portfolio" className="mt-24">
      <div className="mx-auto max-w-screen-sm text-center mb-4">
        <h2 className="mb-4 text-2xl font-extrabold text-primary uppercase">
          {" "}
          My Projects
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
      {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">View More</button> */}
    </section>
  );
};

export default Projects;
