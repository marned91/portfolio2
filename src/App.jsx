import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Sp2Page } from './pages/Sp2Page';
import { JsFrameworksPage } from './pages/JsFrameworksPage';
import { CssFrameWorksPage } from './pages/CssFrameworksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="CART" element={<JsFrameworksPage />} />
        <Route path="BLUB" element={<CssFrameWorksPage />} />
        <Route path="ReUze" element={<Sp2Page />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-3xl font-large pt-10">
              404 Not Found
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
