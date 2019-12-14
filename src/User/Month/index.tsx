import React from 'react';
import { 
  Calendar, 
  momentLocalizer, 
  DateLocalizer 
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer: DateLocalizer = momentLocalizer(moment);

const Month = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[{ 
          title: '',
          start: new Date(),
          end: new Date(),
        }]}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  );
}

export default Month;