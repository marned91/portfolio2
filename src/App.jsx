import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Sp2Page } from './pages/Sp2Page';
import { JsFrameworksPage } from './pages/JsFrameworksPage';
import { HolidazePage } from './pages/HolidazePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="Holidaze" element={<HolidazePage />} />
        <Route path="CART" element={<JsFrameworksPage />} />
        <Route path="ReUze" element={<Sp2Page />} />
        <Route path="*" element={<h1 className="px-6 py-16 text-center font-large text-3xl text-[#203c34]">404 · Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
