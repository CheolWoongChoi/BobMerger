import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='profile'>
        (프로필 예정)
      </div>
      <input className='searcher' placeholder='뭐 먹을래??? (검색엔진 나올 예정)' />
      <Link to='/today'>
        <div className='today-food'>오늘 먹은 음식 넣기</div>
      </Link>
      <div className='last-week-food'>지난 주 먹었던 음식</div>
    </div>
  );
}

export default Home;