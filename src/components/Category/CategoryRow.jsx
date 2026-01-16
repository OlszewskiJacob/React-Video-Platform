import { useState } from "react";
import "./CategoryRow.css";

export default function CategoryRow({ title, projects, onProjectClick }) {
  const [offset, setOffset] = useState(0);

 
  const displayProjects = Array.from({ length: 12 }, (_, i) => {
    return projects[i % projects.length];
  });

  const handleTileClick = (project, index) => {
  const tileWidth = 320; 
  const visibleTiles = 4; 
  const currentViewStart = Math.abs(offset) / tileWidth;
  const currentViewEnd = currentViewStart + visibleTiles - 1;


  if (index >= currentViewEnd && index < 11) {
    setOffset(prev => prev - tileWidth);
  } else if (index <= currentViewStart && offset < 0) {
    setOffset(prev => prev + tileWidth);
  }


  setTimeout(() => {
    onProjectClick(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
};
  return (
    <section className="category-section">
      <h2 className="category-title">{title}</h2>
      <div className="slider-wrapper">
        <ul 
          className="category-row" 
          style={{ transform: `translateX(${offset}px)` }}
        >
          {displayProjects.map((project, index) => (
            <li
              key={index}
              className="project-tile"
              onClick={() => handleTileClick(project, index)}
            >
              <img src={project.image} alt={project.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}