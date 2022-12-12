import React from "react";

const ProjectsCard = ({ project }) => {
  const { name, descriptions, img, live_site, github_client, github_server } =
    project;
  return (
    <div className="card w-96 bg-gray-800 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">
          {name}
          <div className="badge badge-success text-white">NEW</div>
        </h2>
        <p>{descriptions}</p>
        <div className="grid grid-cols-3 gap-2">
          <a href={live_site} target="_blank" rel="noreferrer" className="badge badge-outline p-4">View Live</a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
