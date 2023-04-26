import { ReactComponent as Logo } from './images/logo.svg';
import { useState, useEffect } from 'react';

import Button from '../../shared/Button/Button';

import style from './user-card.module.scss';

const UserCard = ({ followers, tweets, id,  addFollower, removeFollower}) => {
  
  const [subscription, setSubscription] = useState(() => {
    const subscription = JSON.parse(localStorage.getItem('subscription'));
    return subscription ? subscription : false;
  });

  useEffect(() => {
    localStorage.setItem('subscription', JSON.stringify(subscription));
  }, [subscription]);

  const handleClick = () =>{
    if (subscription) {
      removeFollower(id);
      setSubscription(false);
      return;
    }
    addFollower(id);
    setSubscription(true);
  }


  return (
    <li className={style.tweetsCard}>
      <div className={style.imgBox}>
        <Logo className={style.logo} />
        <img
          className={style.logoImg}
          src={process.env.PUBLIC_URL + '/images/logo-1x.png'}
          alt="logo"
        ></img>
      </div>
      <div className={style.tweetsBox}>
        <div className={style.tweetsBoxQuantity}>
          <p className={style.tweetsQuantity}>Tweets {tweets}</p>
          <p className={style.tweetsQuantity}>followers {followers}</p>
        </div>

        <Button key={id} onClick={handleClick} className={subscription}>{(subscription && 'folowings') || (!subscription && 'follow')}</Button>
      </div>
    </li>
  );
};

export default UserCard;
