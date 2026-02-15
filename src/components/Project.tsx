import React from "react";
import "../styles/Styles.css";

interface ProjectProps {
  title: string;
  image: string | null;
  date: string;
  tags: string[];
  caption: string;
  githubLink: string;
  viewMoreLink: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  // image,
  date,
  tags,
  caption,
  viewMoreLink,
}) => {
  return (
    <div
      className="project-container"
      onClick={() => (window.location.href = viewMoreLink)}
    >
      {/* {image ? <img className="project-image" src={image} /> : null} */}
      <h4>{title}</h4>
      <p>{date}</p>
      <div className="tags-container">
        {tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>

      <p className="pt-3">{caption}</p>
    </div>
  );
};

export default Project;
