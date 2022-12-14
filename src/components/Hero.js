import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero" id="/home">
      <h1>
        <span className="hero-name">Elias Symons</span>
      </h1>
      <h1 className="hero-desc">Web Developer</h1>
      <div className="hero-tag">
        <p>Hi, I'm a Front End Developer from San Diego.</p>
        <p>
          I'm passionate about creating highly responsive websites with an
          engaging User Experience.{" "}
        </p>
      </div>

      <Button className="btn" variant="light">
        <Link
          className="scroll-link"
          activeClass="active"
          to="/projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={1000}
        >
          Check out my work!
        </Link>
      </Button>
    </div>
  );
}
