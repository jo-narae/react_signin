import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const LoginMenu = props => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const session = Cookies.get('session');
    const key = process.env.REACT_APP_JWT_KEY;
    const decoded = jwt.verify(session, key);
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