import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>

        <h1 className="hero-title">
          Nisha <span className="highlight">Mudaliar</span>
        </h1>

        <h2 className="hero-subtitle">
          MERN Stack Developer
        </h2>

        <p className="hero-description">
          Passionate Full Stack Developer skilled in React, Node.js,
          Express, and MongoDB. I enjoy building responsive,
          scalable, and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;