import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => (event) => {
    event.preventDefault();
    setIsMobileOpen(false);

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate('/');
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const sectionLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce4dd] bg-[#fbfcf8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => setIsMobileOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#355e51] font-large text-lg font-bold text-white">MN</span>
          <span className="flex flex-col">
            <span className="font-buttons-nav text-sm font-semibold text-[#203c34]">Marte</span>
            <span className="text-[.65rem] uppercase tracking-[.13em] text-[#789087]">Developer · Oslo</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {sectionLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={goToSection(item.id)} className="text-sm text-[#536860] no-underline transition hover:text-[#203c34]">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-[#355e51] hover:bg-[#edf3ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#578bcf] md:hidden"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav id="mobile-navigation" className="border-t border-[#dce4dd] bg-[#fbfcf8] px-5 py-3 md:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {sectionLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={goToSection(item.id)} className="block rounded-lg px-3 py-3 text-[#355e51] no-underline hover:bg-[#edf3ee]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
