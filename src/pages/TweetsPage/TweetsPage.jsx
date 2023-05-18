import { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import UserCard from '../../components/UserCard/UserCard';
import { getUsers, updateFollowers } from '../../shared/services/api';
import ButtonLoad from '../../components/Button/ButtonNuv';
import ButtonNuv from '../../components/Button/ButtonNuv';

import style from './tweets-page.module.scss';

const TweetsPage = () => {
  const [items, setItems] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [loadButton, setLoadButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers(page);
        setShowBtn(data.length === 3);
        setItems(prevItems => {
          if (loadButton) {
            return [...prevItems, ...data];
          }
          return [...data];
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page, loadButton]);

  const addFollower = id => {
    const user = items.find(user => user.id === id);
    const newUser = { ...user, followers: user.followers + 1, subscription: true };

    const followUser = async () => {
      try {
        await updateFollowers(newUser);
        setItems(prevUsers =>
          prevUsers.map(user =>
           user.id === id ? { ...user, followers: user.followers + 1, subscription: true } : user
           )
        );
      } catch (error) {
        alert(error.message);
      }
    };
    followUser();
  };

  const removeFollower = id => {
    const user = items.find(user => user.id === id);
    const newUser = { ...user, followers: user.followers - 1, subscription: false };

    const followUser = async () => {
      try {
        await updateFollowers(newUser);
        setItems(prevUsers =>
          prevUsers.map(user =>
            user.id === id ? { ...user, followers: user.followers - 1, subscription: false } : user
          )
        );
      } catch (error) {
        alert(error.message);
      }
    };
    followUser();
  };

  const loadMore = () => {
    setLoadButton(true);
    setPage(prevPage => prevPage + 1);
  };

  const element = items.map(user => {
    return (
      <UserCard
        key={nanoid()}
        {...user}
        addFollower={addFollower}
        removeFollower={removeFollower}
      />
    );
  });

  return (
    <>
      <Link to={backLink.current}>
        <ButtonNuv>Back</ButtonNuv>
      </Link>
      <ul className={style.cardList}>{element}</ul>
      {(showBtn && <ButtonLoad onClick={loadMore}>Load more</ButtonLoad>) ||
        (!loading && <p>No more users</p>)}
    </>
  );
};

export default TweetsPage;
