import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='go-home'>
          (홈으로)
        </div>
      </Link>
      <div className='profile'>
        프로필예정
      </div>
    </div>
  );
}

export default Header;