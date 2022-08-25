/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectorFriends } from '../friends/friendsSlice';

import './Users.css';

function Users() {
  const users = useSelector(selectorFriends);
  const usersList = users && users.users;
  const navigate = useNavigate();
  // console.log(usersList);
  return (
    <div>
      <div className="users-title">
        Все пользователи
      </div>
      <div className="all-users">
        {
        usersList && usersList.map((user) => (
          <div className="user-block" key={user.id}>
            <div className="user">
              <div>
                {/* <NavLink to="/">клик</NavLink> */}
                <img
                  src={`/images/${user.ava}`}
                  alt="img"
                  className="ava-img"
                  onClick={() => navigate(`/profile/${user.id}`)}
                />
              </div>
              <div className="user-info">
                <div className="text-inf">
                  <div className="str-inf">{user.user_name}</div>
                  <div className="str-inf">Город: {user.city}</div>
                  <div className="str-inf">Активность: {user.favorite_cat}</div>
                </div>
                <div>
                  <div>
                    <img src="/images/icon/email.png" alt="email" className="icons" />
                    {user.email}
                  </div>
                  <div>
                    <img src="/images/icon/fb.png" alt="email" className="icons" />
                    <a href={user.link}>{user.link}</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
      ))
    }
      </div>
    </div>
  );
}

export default Users;
