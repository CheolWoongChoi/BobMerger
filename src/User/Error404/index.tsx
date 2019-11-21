import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

const Error404 = () => {
  return (
    <div className='error404'>
      잘못된 경로로 접근하셨습니다.<br/>
      <Link to="/">홈으로 이동</Link>
    </div>
  );
}

export default Error404;