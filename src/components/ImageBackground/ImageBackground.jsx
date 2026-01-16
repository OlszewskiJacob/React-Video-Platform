import "./ImageBackground.css";

export default function ImageBackground({ state, image, preview }) {
  const getBgImage = () => {

    if (!image && !preview) return "none";
    
    if (state === "gif" && preview) return `url(${preview})`;
    if (state === "loading") return "none";
    
    return `url(${image})`;
  };

  return (
    <div 
      className={`hero-bg-layer ${state}`} 
      style={{ "--hero-img": getBgImage() }}
    />
  );
}