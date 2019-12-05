import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import currDate from '../../util/currDate';
import './Today.scss';

const Today = () => {
  const breakfastRef = firebase.database().ref('/user/bluesky4381/date');
  const [breakfast, setBreakfast] = useState({
    menu: '',
    restaurant: ''
  });
  const [lunch, setLunch] = useState({
    menu: '',
    restaurant: ''
  });
  const [dinner, setDinner] = useState({
    menu: '',
    restaurant: ''
  });

  useEffect(() => {
    // 데이터 초기화
    breakfastRef.once('value').then(data => { 
      const { breakfast, lunch, dinner } = data.val();
      
      setBreakfast(breakfast);
      setLunch(lunch);
      setDinner(dinner);
    });
  }, []);

  const handleBreakfast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreakfast({
      ...breakfast,
      [e.target.name]: e.target.value 
    });
  };

  const handleLunch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLunch({
      ...lunch,
      [e.target.name]: e.target.value 
    });
  };

  const handleDinner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDinner({
      ...dinner,
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className='today'>
      <div className='today-menu'>
        <div className="save-btn">
          <button>저장하기</button>
        </div>
        <div className='today-header'>
          <p>
            {}
          </p>
          <p className='date'>
            {`${new Date().getMonth() + 1}-${new Date().getUTCDate()}`}
          </p>
        </div>
        <div className='head menu-layout'>
          <div></div>
          <div>MENU</div>
          <div>식당 이름</div>
        </div>
        <div className='menu-layout'>
          <div>아침</div>
          <div>
            <input 
              name='menu'
              value={breakfast.menu}
              onChange={handleBreakfast}
            />
          </div>
          <div>
            <input 
              name='restaurant'
              value={breakfast.restaurant}
              onChange={handleBreakfast}
            />
          </div>
        </div>
        <div className='menu-layout'>
          <div>점심</div>
          <div>
            <input 
              name='menu'
              value={lunch.menu}
              onChange={handleLunch}
            />
          </div>
          <div>
            <input 
              name='restaurant'
              value={lunch.restaurant} 
              onChange={handleLunch}
            />
          </div>
        </div>
        <div className='menu-layout'>
          <div>저녁</div>
          <div>
            <input 
              name='menu'
              value={dinner.menu}
              onChange={handleDinner}
            />
          </div>
          <div>
            <input 
              name='restaurant'
              value={dinner.restaurant} 
              onChange={handleDinner}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;