import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
