import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='go-home'>
        <Link to='/'>
        (홈으로)
        </Link>
      </div>
      <div className='profile'>
        프로필예정
      </div>
    </div>
  );
}

export default Header;