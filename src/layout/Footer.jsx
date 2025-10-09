import LogoFooter from '../assets/portfolioLogoWhite.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
          <a href="/" className="shrink-0" aria-label="Home">
            <img
              src={LogoFooter}
              alt="Portfolio logo"
              className="h-8 w-auto md:h-7"
            />
          </a>
          <p className="order-3 text-center text-xs opacity-90 md:order-none md:text-sm md:justify-self-center">
            &copy; {year} Marte N. All rights reserved.
          </p>
          <div className="order-2 flex items-center gap-4 md:order-none">
            <a
              href="https://www.linkedin.com/in/marte-n-18aab5101/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit me on LinkedIn"
              className="inline-flex items-center justify-center text-white transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <FaLinkedin className="text-[30px]" />
            </a>
            <a
              href="https://github.com/marned91"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit me on GitHub"
              className="inline-flex items-center justify-center text-white transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <FaGithub className="text-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
