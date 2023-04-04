//@flow
import React from 'react';
import { DateTimePicker } from './components/date_time_picker';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

export default function App() {
  return (
    <div className={'container'}>
      <div className="d-flex justify-content-center">
        <DateTimePicker
          format="DD/MM/YYYY"
          name={'bir_sey_tarihi'}
          id={'bir_sey_tarihi'}
          placeholder="Select Date"
          locale="tr"
          specialDays={[
            { day: 1, month: 1, memo: 'New Years' },
            { day: 14, month: 2, memo: 'Valentine`s Day' },
          ]}
        />
      </div>
    </div>
  );
}
