import React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import './Home.scss';

const Home = ({ match }: RouteComponentProps) => {
  return (
    <div className='home'>
      {/* <input className='searcher' placeholder='뭐 먹을래??? (검색엔진 나올 예정)' /> */}
      <Link to={`${match.url}/today`}>
        <div className='today-food'>오늘 먹은 음식 넣기</div>
      </Link>
      <Link to={`${match.url}/lastWeek`}>
        <div className='last-week-food'>지난 주 먹었던 음식</div>
      </Link>
    </div>
  );
} 

export default Home;