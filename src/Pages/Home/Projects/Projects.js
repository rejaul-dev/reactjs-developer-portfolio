import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Doctor's Portal",
      descriptions: "Full Stack Web Application",
      img: "",
      live_site: "https://doctors-portal-d899f.web.app/",
      github_repo: "",
    },
    {
      id: 1,
      name: "Dev Coaching Pro",
      descriptions: "Full Stack Web Application",
      img: "",
      live_site: "",
      github_repo: "",
    },
    {
      id: 1,
      name: "Dev Coaching Pro",
      descriptions: "Full Stack Web Application",
      img: "",
      live_site: "",
      github_repo: "",
    },
  ];

  return (
    <section id="portfolio" className="mt-10">
      <div>
        <div className="mx-auto max-w-screen-sm text-center mb-4">
          <h2 className="mb-4 text-4xl font-extrabold text-white uppercase">
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
      </div>
    </section>
  );
};

export default Projects;
