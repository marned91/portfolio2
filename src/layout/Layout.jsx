import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Header from './Header';

export function Layout() {
  return (
    <div id="top" className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f8f4]">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
