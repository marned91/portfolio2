import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';
import LogoHeader from '../assets/portfolioLogoDark.png';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { to: '/CART', label: 'CART' },
    { to: '/BLUB', label: 'BLUB' },
    { to: '/ReUze', label: 'ReUze' },
  ];

  const activeClass = 'underline decoration-dark/60 decoration-2';
  const linkBase = 'text-dark px-3 py-1';

  return (
    <header className="w-[95%] mx-auto bg-white border-b border-black/50">
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <Link to="/" className="flex items-center" aria-label="Home">
          <img src={LogoHeader} alt="Portfolio logo" className="h-8 w-auto" />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 font-buttons-nav">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                className="flex items-center p-2 transition duration-300 ease-out hover:scale-120"
              >
                <FaHome className="text-dark text-2xl" aria-hidden="true" />
              </NavLink>
            </li>

            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? activeClass : 'text-dark hover:underline'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMobileOpen((s) => !s)}
            aria-label="Open mobile menu"
            aria-expanded={isMobileOpen}
            className="p-2 -m-2"
          >
            <FaBars className="text-dark text-2xl" aria-hidden="true" />
          </button>

          <Link to="/" onClick={() => setIsMobileOpen(false)} aria-label="Home">
            <img src={LogoHeader} alt="Portfolio logo" className="h-8 w-auto" />
          </Link>

          <Link to="/" className="p-2 -m-2" aria-label="Home">
            <FaHome className="text-dark text-2xl" aria-hidden="true" />
          </Link>
        </div>

        {isMobileOpen && (
          <nav
            className="mt-3 pt-3 border-t border-black/10"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `block w-full text-left px-3 py-2 ${linkBase} ${
                        isActive ? activeClass : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
