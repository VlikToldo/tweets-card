import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
const HomePage = lazy(()=> import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(()=> import('../pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='tweets' element={<TweetsPage/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Route>
  </Routes>
  );
}

export default App;
