import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from 'react-icons/fa6';
import BlubImage from '../assets/blubScreenshot.png';
import CartImage from '../assets/cartScreenshot.png';
import ReuzeImage from '../assets/reuzeScreenshot.png';

const projects = [
  {
    title: 'CART',
    image: CartImage,
    description:
      'A responsive storefront built with React and TypeScript, with product discovery, cart state, and a complete checkout flow.',
    link: '/CART',
    technologies: ['React', 'TypeScript', 'Zustand', 'API'],
  },
  {
    title: 'ReUze',
    image: ReuzeImage,
    description:
      'An auction platform for second-hand goods, designed to make browsing, listing items, and placing bids straightforward.',
    link: '/ReUze',
    technologies: ['JavaScript', 'Tailwind CSS', 'API'],
  },
  {
    title: 'BLUB',
    image: BlubImage,
    description:
      'A social application with profiles, post creation, and a searchable feed, rebuilt with a responsive interface.',
    link: '/BLUB',
    technologies: ['JavaScript', 'Tailwind CSS', 'API'],
  },
];

const toolkit = [
  'JavaScript',
  'React',
  'TypeScript',
  'Node.js',
  'HTML & CSS',
  'Tailwind CSS',
  'REST APIs',
  'Vitest',
  'Playwright',
];

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function HomePage() {
  return (
    <div className="portfolio-home">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Frontend developer · Oslo, Norway</p>
            <h1>I build web experiences with care for the people using them.</h1>
            <p className="hero-lede">
              I’m a developer, Tech Owner, and project lead at Nettbureau. I work
              across JavaScript, React, and TypeScript, bringing a customer
              perspective shaped by my earlier work in CRM.
            </p>
            <div className="hero-actions">
              <a
                href="#projects"
                onClick={(event) => scrollToSection(event, 'projects')}
                className="button button-primary"
              >
                Explore my work <FaArrowDown aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="https://github.com/marned91" target="_blank" rel="noreferrer">
                Visit my GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href="https://github.com/marned91" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/marte-n-18aab5101/" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>

          <aside className="current-role-card" aria-label="Current role">
            <div className="role-card-topline">
              <span className="role-card-label">Currently</span>
              <span className="role-card-period">2025 — now</span>
            </div>
            <div className="role-card-mark" aria-hidden="true">N</div>
            <p className="role-company">Nettbureau</p>
            <h2>Developer, Tech Owner &amp; Project Lead</h2>
            <p>
              Building and improving form experiences across markets, and helping
              teams move development projects from idea to delivery.
            </p>
            <div className="role-card-tags">
              <span>JavaScript</span><span>React</span><span>TypeScript</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="intro-strip" aria-label="Approach">
        <p>Thoughtful interfaces</p><span aria-hidden="true">/</span>
        <p>Maintainable code</p><span aria-hidden="true">/</span>
        <p>Useful details</p>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2>From understanding users to building for them.</h2>
        </div>
        <div className="about-content">
          <p>
            Before moving into development, I worked as a CRM Manager at
            Jottacloud, focusing on the customer journey and working closely with
            marketing, developers, and customers. That experience led me to
            frontend development, where I can turn user needs into working
            interfaces.
          </p>
          <p>
            I completed Noroff’s two-year Frontend Development program in 2025.
            My background in creativity, innovation, and business development
            still shapes how I approach product decisions and collaboration.
          </p>
          <div className="about-facts">
            <div><span>Based in</span><strong>Oslo, Norway</strong></div>
            <div><span>Working with</span><strong>Frontend &amp; product teams</strong></div>
            <div><span>Education</span><strong>Frontend Development, Noroff</strong></div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="content-section">
          <div className="section-heading section-heading-light">
            <p className="eyebrow">Experience</p>
            <h2>What I bring to a team.</h2>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <p className="experience-date">2025 — now</p>
              <div>
                <h3>Developer, Tech Owner &amp; Project Lead</h3>
                <p className="experience-company">Nettbureau</p>
                <p>
                  Develop form experiences and user flows with JavaScript and
                  React, contribute to backend work with TypeScript and Node.js,
                  and coordinate cross-team development projects.
                </p>
              </div>
            </article>
            <article className="experience-item">
              <p className="experience-date">2018 — 2023</p>
              <div>
                <h3>CRM Manager</h3>
                <p className="experience-company">Jottacloud</p>
                <p>
                  Led customer journey work, gathered user insight, and worked
                  across marketing, development, and customer teams to improve
                  the experience for existing users.
                </p>
              </div>
            </article>
            <article className="experience-item">
              <p className="experience-date">2023 — 2025</p>
              <div>
                <h3>Support Consultant, part-time</h3>
                <p className="experience-company">Jottacloud</p>
                <p>
                  Helped customers across products and platforms, building a
                  practical understanding of user needs and troubleshooting.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>Work I can share.</h2>
          </div>
          <p className="section-note">
            These projects are from my Noroff studies. My professional work is
            described separately because the code and products belong to my employer.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link to={project.link} key={project.title} className="project-card">
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} project interface`} />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-card-content">
                <p className="project-context">Noroff · Study project</p>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section toolkit-section" id="toolkit">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h2>Tools I use to make ideas real.</h2>
        </div>
        <div className="toolkit-list">
          {toolkit.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make something useful.</h2>
          <p>I’m always happy to connect with people building thoughtful digital products.</p>
          <a className="button button-light" href="https://github.com/marned91" target="_blank" rel="noreferrer">
            Find me on GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
