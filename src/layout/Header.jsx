import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-black/30 text-white">
      <nav className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold text-black font-large">
          Home
        </Link>
        <div className="flex gap-4 text-sm">
          <Link to="/CART" className="opacity-80 hover:opacity-100">
            CART
          </Link>
          <Link to="/BLUB" className="opacity-80 hover:opacity-100">
            BLUB
          </Link>
          <Link to="/ReUze" className="opacity-80 hover:opacity-100">
            ReUze
          </Link>
        </div>
      </nav>
    </header>
  );
}
