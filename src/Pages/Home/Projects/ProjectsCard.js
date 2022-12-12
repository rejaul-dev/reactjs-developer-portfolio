import React from "react";

const ProjectsCard = ({ project }) => {
  const { name, descriptions, img, live_site, github_client, github_server } =
    project;
  return (
    <div className="card bg-gray-800 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-400">
          {name}
          <div className="badge badge-success text-white">NEW</div>
        </h2>
        <p>{descriptions}</p>
        <div className="grid grid-cols-3 gap-2">
          <a href={live_site} target="_blank" rel="noreferrer" className="btn btn-xs btn-primary">View Live</a>
          <a href={github_client} target="_blank" rel="noreferrer" className="btn btn-xs btn-primary">Client</a>
          <a href={github_server} target="_blank" rel="noreferrer" className="btn btn-xs btn-primary">Server</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
