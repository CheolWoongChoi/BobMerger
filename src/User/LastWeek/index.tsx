import React, { useState, useEffect } from 'react';
import moment from 'moment';
import * as firebase from 'firebase/app';
import 'firebase/database';
import './LastWeek.scss';

interface lastWeekMenuType {
  breakfast: {
    menu: string,
    restaurant: string
  };
  lunch: {
    menu: string,
    restaurant: string
  };
  dinner: {
    menu: string,
    restaurant: string
  };
}

const LastWeek = () => {
  const lastWeekDate: moment.Moment[] = [];

  for (let diff = 7; diff > 0; diff--) {
    lastWeekDate.push(
      moment().subtract(diff, 'days')
    );
  }

  const [lastWeekMenu, setLastWeekMenu] = useState([] as lastWeekMenuType[]);
  
  useEffect(() => {
    console.log('getLastWeekMenu');
    getLastWeekMenu();
  }, []);

  const showLastWeek = () => (
    <tr>
      {lastWeekDate.map((date, idx) => (
        <th key={idx}>
          {date.format('MM/DD')}
        </th>
      ))}
    </tr>
  );
  
  const showLastWeekMenu = () => (
      <tr>
        {lastWeekMenu.map((menu, idx) => (
          <td key={idx}>
            <p>아침: {menu.breakfast.menu} / {menu.breakfast.restaurant}</p>
            <p>점심: {menu.lunch.menu} / {menu.lunch.restaurant}</p>
            <p>저녁: {menu.dinner.menu} / {menu.dinner.restaurant}</p>
          </td>
        ))}
      </tr>
  );
  
  const getLastWeekMenu = () => {
    const fbDbRef = firebase.database();
    const emptyMenu = {
      breakfast: {menu: '', restaurant: ''},
      lunch: {menu: '', restaurant: ''},
      dinner: {menu: '', restaurant: ''}
    };

    // 지난 주 메뉴를 fb에서 불러옴
    const menusPromise = lastWeekDate.map(async (date) => {
      const dateLink = `/user/bluesky4381/date/${date.format('YYMMDD')}`;
      const dateRef = fbDbRef.ref(dateLink);
      const data = await dateRef.once('value');
      
        try {
          const { breakfast, lunch, dinner } = data.val();
          return { breakfast: breakfast, lunch: lunch, dinner: dinner };
        } catch(e) {
          console.log(e);
          
          dateRef.set(emptyMenu);
          return emptyMenu;
        }
      });

      Promise.all(menusPromise).then(menus => setLastWeekMenu(menus));
  };

  return (
    <div className='lastweek'>
      <table className='lastweek-menu'>
        <thead>
          {showLastWeek()}
        </thead>
        <tbody>
          {showLastWeekMenu()}
        </tbody>
      </table>
    </div>
  );
}

export default LastWeek;