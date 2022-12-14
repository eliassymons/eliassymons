import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";

export default function Icons() {
  return (
    <div className="icons">
      <a
        href="https://www.linkedin.com/in/elias-symons-aa99123b"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin" src={linkedin} className="social-icon" />
      </a>
      <a href="https://github.com/eliassymons" target="_blank" rel="noreferrer">
        <img alt="github" src={github} className="social-icon" />
      </a>
    </div>
  );
}
