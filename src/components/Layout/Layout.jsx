import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

import style from './layout.module.scss'

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <NavLink className={style.navLink} to="/">Home </NavLink> |
        <NavLink className={style.navLink} to='/tweets'> Tweets</NavLink>
      </header>
      <main className={style.main}>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;