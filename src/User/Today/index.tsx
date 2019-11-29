import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import './Today.scss';

const Today = () => {
  const breakfast = firebase.database().ref('/');
  console.log(breakfast);
  breakfast.on('value', data => console.log(data.val()));

  return (
    <div className='today'>
      <div className='today-menu'>
        <div className='date'>
          {`${new Date().getMonth() + 1}-${new Date().getUTCDate()}`}
        </div>
        <div className='head menu-layout'>
          <div></div>
          <div>MENU</div>
          <div>식당 이름</div>
        </div>
        <div className='menu-layout'>
          <div>아침</div>
          <div><input /></div>
          <div><input /></div>
        </div>
        <div className='menu-layout'>
          <div>점심</div>
          <div><input /></div>
          <div><input /></div>
        </div>
        <div className='menu-layout'>
          <div>저녁</div>
          <div><input /></div>
          <div><input /></div>
        </div>
      </div>
    </div>
  )
}

export default Today;