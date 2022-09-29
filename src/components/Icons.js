import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";

export default function Icons() {
  return (
    <div className="icons">
      <img alt="facebook" src={facebook} className="social-icon" />
      <img alt="instagram" src={instagram} className="social-icon" />
      <img alt="linkedin" src={linkedin} className="social-icon" />
      <img alt="github" src={github} className="social-icon" />
    </div>
  );
}
