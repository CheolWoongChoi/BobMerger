import React from 'react';
import './Today.scss';

const Today = () => {
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