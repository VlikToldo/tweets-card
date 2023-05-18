import { ReactComponent as Logo } from './images/logo.svg';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import boyImg from './images/boy.png';
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
      </div>
      <div className={style.avatar}>
        <img className={style.avatarImg}
            src={boyImg}
            alt="logo"
          />
      </div>
      <div className={style.tweetsBox}>
        <div className={style.tweetsBoxQuantity}>
          <p className={style.tweetsQuantity}>{tweets} Tweets</p>
          <p className={style.tweetsQuantity}>{formattedNumber(followers)} followers</p>
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
