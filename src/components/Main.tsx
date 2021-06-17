import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/signup">회원가입 바로가기</Link>
        </li>
        <li>
          <Link to="/signin">로그인 바로가기</Link>
        </li>
      </ul>
      <h2>메인입니다</h2>
    </>
  );
};

export default Main;