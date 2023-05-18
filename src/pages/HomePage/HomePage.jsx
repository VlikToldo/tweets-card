import { Link } from 'react-router-dom';

import ButtonNuv from '../../components/Button/ButtonNuv';

import style from './home-page.module.scss';

const HomePage = () => {
  return (
    <div className={style.btnToTweets}>
      <h1>Hello everybody</h1>
      <Link to="/tweets">
        <ButtonNuv>Go to users</ButtonNuv>
      </Link>
    </div>
  );
};

export default HomePage;
