import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#203c34] text-[#eaf0eb]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <Link to="/" className="font-buttons-nav text-sm font-semibold text-white no-underline">Marte</Link>
          <p className="mb-0 mt-1 text-xs text-[#b8c9bf]">Frontend developer · Oslo, Norway</p>
        </div>
        <p className="order-3 m-0 text-xs text-[#b8c9bf] sm:order-none">© {year} Marte</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/marte-n-18aab5101/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-[#eaf0eb] transition hover:text-white"><FaLinkedin aria-hidden="true" /></a>
          <a href="https://github.com/marned91" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-[#eaf0eb] transition hover:text-white"><FaGithub aria-hidden="true" /></a>
          <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Back to top" className="text-[#eaf0eb] transition hover:text-white"><FaArrowUp aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
