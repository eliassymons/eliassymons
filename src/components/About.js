export default function About() {
  return (
    <div className="about" id="/about">
      <div className="about-info">
        <h2>About me</h2>
        <div className="about-desc">
          <p>
            After graduating with a degree in Piano Performance and Composition
            in 2015, I taught piano and scored music for commercials, short
            films, runway shows, and feature films. Check out some of my work{" "}
            <a
              href="https://www.imdb.com/name/nm7650734/?ref_=nv_sr_srsg_0"
              className="imdb-link"
            >
              here.
            </a>
          </p>
          <p>
            Then, after several years of teaching, I decided it was time for a
            change. I wanted to pursue a career that was challenging and allowed
            me to express my creativity. Learning full stack development, with a
            focus on the front end, started as a hobby and quickly became a
            passion.
          </p>{" "}
          <p>
            Over the last couple of years I've worked as an independent
            contractor, providing web development services to various clients.
            Working with React, Bootstrap, and SASS I've created dynamically
            rendered and visually appealing sites. I feel confident that my
            skills make me an asset as a fullstack or front-end developer.
          </p>
        </div>
      </div>
    </div>
  );
}
