import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const LoginMenu = props => {
  const session = Cookies.get('session');
  const [userName, setUserName] = useState('');
  const key = process.env.REACT_APP_JWT_KEY;

  useEffect(() => {
    const decoded = jwt.verify(session, key);
    console.log(decoded);
    setUserName(decoded.userName);
  }, []);

  const logOut = () => {
    Cookies.remove('session');
    alert('정상적으로 로그아웃 되었습니다.');
    props.history.push('/');
  };
  return (
    <>
      <h2>유저 페이지</h2>
      <h3 className="greeting">
        <span className="name">{userName}</span>님 어서오세요
      </h3>
      <button className="signout-btn" onClick={logOut}>
        로그아웃
      </button>
    </>
  );
};

export default LoginMenu;