import "./ProjectCard.css";

export default function ProjectCard({ name, image, onClick }) {
  return (
    <li onClick={onClick} className="project-item">
      <img src={image} alt={name}></img>
    </li>
  );
}
