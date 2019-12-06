import React, { useEffect } from 'react';
import moment from 'moment';
import './LastWeek.scss';

const LastWeek = () => {
  
  useEffect(() => {

  }, []);

  const calculateLastWeek = () => {
    const lastWeekDate = [];
    
    for (let diff = 7; diff > 0; diff--) {
      lastWeekDate.push(
        <th>{moment().subtract(diff, 'days').format('MM/DD')}</th>
      );
    }

    return (
      <tr>
        {lastWeekDate}
      </tr>
    );
  }
  
  return (
    <div className='lastweek'>
      <table className='lastweek-menu'>
        <thead>
          {calculateLastWeek()}
        </thead>
        <tbody>
          <tr>
            <td>aa</td>
            <td>bb</td>
            <td>cc</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
          </tr>
          <tr>
            <td>aa</td>
            <td>bb</td>
            <td>cc</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LastWeek;