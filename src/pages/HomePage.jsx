import { Link } from 'react-router-dom';
import HomeImage from '../assets/portfolioHome.png';
import BlubImage from '../assets/blubScreenshot.png';
import CartImage from '../assets/cartScreenshot.png';
import ReuzeImage from '../assets/reuzeScreenshot.png';

export function HomePage() {
  const projects = [
    {
      title: 'BLUB Project',
      image: BlubImage,
      description:
        'A social media app rebuilt with Tailwind CSS for a clean, responsive, and accessible user experience.',
      link: '/BLUB',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
    },
    {
      title: 'ReUze Project',
      image: ReuzeImage,
      description:
        'A responsive auction site for buying and selling second-hand items, promoting sustainability and reuse.',
      link: '/ReUze',
      tech: ['HTML', 'Tailwind', 'JavaScript', 'API'],
    },
    {
      title: 'CART Project',
      image: CartImage,
      description:
        'A modern e-commerce store built with React and Tailwind CSS, featuring cart, checkout, and API integration.',
      link: '/CART',
      tech: ['React', 'Tailwind', 'TypeScript', 'Zustand', 'API'],
    },
  ];

  return (
    <div>
      <section className="relative w-full overflow-hidden h-[260px] sm:h-[360px] md:h-[420px]">
        <img
          src={HomeImage}
          alt="Green leafs on an offwhite background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-6 md:pl-20">
          <h1 className="bg-black/60 text-white text-xl md:text-3xl font-medium px-5 py-3 rounded-sm shadow">
            Coding, styling, creating
          </h1>
          <h1 className="bg-black/60 text-white text-xl md:text-3xl font-medium px-5 py-3 rounded-sm shadow">
            Explore my projects and code
          </h1>
        </div>
      </section>
      <section className="pb-10">
        <h2 className="font-bold text-dark text-2xl pl-5 lg:pl-14 pt-8">
          Highlighted Assignments
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto pt-5">
          {projects.map((project, idx) => (
            <Link
              to={project.link}
              key={idx}
              className="block rounded-lg border border-dark/40 p-5 shadow-xl flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="object-cover h-40 md:h-52 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h3 className="text-dark text-xl font-semibold py-2">
                {project.title}
              </h3>
              <p className="text-black/70 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-tags text-white px-2 py-0.5 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
