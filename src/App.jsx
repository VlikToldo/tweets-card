import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
