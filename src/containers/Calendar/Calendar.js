import React from 'react';
import Cosa from '../../components/Calendar/Cosa/Cosa';
import Calendarapp from '../../components/Calendar/Calendar/Calendarapp';
import { WrapperMenu } from './Calendar.styled';

const Calendar = () => (
  <WrapperMenu>
    <Cosa />
    <Calendarapp />
  </WrapperMenu>
);

export default Calendar;
