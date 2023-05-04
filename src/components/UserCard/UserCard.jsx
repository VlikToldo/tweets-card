import { ReactComponent as Logo } from './images/logo.svg';
import PropTypes from 'prop-types';

import Button from '../../shared/Button/Button';

import style from './user-card.module.scss';

const UserCard = ({followers, tweets, subscription, id, addFollower, removeFollower}) => {
  const handleClick = () => {
    if (subscription) {
      removeFollower(id);
      return;
    }
    addFollower(id);
  };

  const formattedNumber = number => {
    let formattedNumber = number.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    formattedNumber = formattedNumber.replace(/,/g, ',');
    return formattedNumber;
  };

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
          <p className={style.tweetsQuantity}>
            followers {formattedNumber(followers)}
          </p>
        </div>

        <Button key={id} onClick={handleClick} subscription={subscription}>
          {(subscription && 'following') || (!subscription && 'follow')}
        </Button>
      </div>
    </li>
  );
};

export default UserCard;

UserCard.propTypes ={
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  subscription: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  addFollower: PropTypes.func.isRequired,
  removeFollower: PropTypes.func.isRequired
}
