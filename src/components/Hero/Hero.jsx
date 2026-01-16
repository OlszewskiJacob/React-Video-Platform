import "./Hero.css";
const callAlertNow = () => {
  alert("Empty Placeholder...");
};
const callAlertNowButBetter = () => {
  alert("Empty Placeholder #2...");
};
export default function Hero({
  name,
  description,
  onMouseEnter,
  onMouseLeave,
  state,
}) {
  return (
    <section
      id="hero"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={state}
    >
      <div className="hero-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="btn-container">
          <button onClick={callAlertNow} className="btn-play">
            Play Content
          </button>
          <button onClick={callAlertNowButBetter} className="btn-info">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
