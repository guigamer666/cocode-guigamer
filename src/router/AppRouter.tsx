import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CodePasterHistoricoPage } from '../pages/CodePasterHistoricoPage';
import { CodePasterPage } from '../pages/CodePasterPage';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CodePasterPage />} />
          <Route path="historico" element={<CodePasterHistoricoPage />} />
          <Route path="/*" element={<CodePasterPage />} />
        </Routes>
      </div>
    </>
  );
};
