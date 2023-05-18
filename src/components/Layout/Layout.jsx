import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

import style from './layout.module.scss'

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container} >
          <nav>
            <NavLink className={style.navLink} to="/">Home </NavLink> |
            <NavLink className={style.navLink} to='/tweets'> Tweets</NavLink>
          </nav>
        </div>
      </header>
      <main className={style.main}>
        <div className={style.container}>
          <Suspense fallback={<p>...Loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;