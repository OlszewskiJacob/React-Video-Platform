import { PROJECT_CATEGORIES } from "./data.js";
import CategoryRow from "./components/Category/CategoryRow.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ImageBackground from "./components/ImageBackground/ImageBackground.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroState, setHeroState] = useState("static");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initialProject = PROJECT_CATEGORIES[0].projects[0];
  const [selectedProject, setSelectedProject] = useState(initialProject);

  const handleHeroMouseEnter = () => {
    const timer1 = setTimeout(() => setHeroState("loading"), 1100);
    const timer2 = setTimeout(() => setHeroState("gif"), 1400);
    window.heroTimers = [timer1, timer2];
  };

  const handleHeroMouseLeave = () => {
    if (window.heroTimers) window.heroTimers.forEach(clearTimeout);
    setHeroState("static");
  };

  useEffect(() => {
    setHeroState("static");
    return () => {
      if (window.heroTimers) window.heroTimers.forEach(clearTimeout);
    };
  }, [selectedProject]);

  function handleSelectedProject(project) {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="page-container">
      <Navbar isScrolled={isScrolled} />



      {selectedProject && (
        <ImageBackground 
          state={heroState} 
          image={selectedProject.image} 
          preview={selectedProject.preview} 
        />
      )}
      {selectedProject && (
        <Hero
          name={selectedProject.name}
          description={selectedProject.description}
          onMouseEnter={handleHeroMouseEnter}
          onMouseLeave={handleHeroMouseLeave}
          state={heroState}
        />
      )}

      {PROJECT_CATEGORIES.map((category) => {
        const sorted = [...category.projects].sort((a, b) => {
          return (
            new Date(b.dateOfCreation).getTime() -
            new Date(a.dateOfCreation).getTime()
          );
        });

        return (
          <CategoryRow
            key={category.title}
            title={category.title}
            projects={sorted}
            onProjectClick={handleSelectedProject}
          />
        );
      })}
      
    </main>
  );
}

export default App;