import Button from "react-bootstrap/Button";

export default function Hero() {
  return (
    <div className="hero" id="/home">
      <h1>
        <span className="hero-name">Elias Symons</span>
      </h1>
      <h1 className="hero-desc">Web Developer</h1>
      <Button className="btn" variant="light">
        Check out my work!
      </Button>
    </div>
  );
}
