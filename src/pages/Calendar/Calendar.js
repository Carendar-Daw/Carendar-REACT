import React, { useEffect, useState } from 'react';
import moment from 'moment';
import List from './List/List';
import Calendarapp from './Calendar/Calendarapp';
import { WrapperMenu } from './Calendar.styled';
import axios from '@Commons/http/index';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(async () => {
    const allEvents = [];
    const response = await axios.get('/appointment/saloon');

    const allCustomers = response.data.customers;
    response.data.appointments.forEach((app) => {
      const customer = allCustomers.filter((cus) => cus.cus_id === parseInt(app.cus_id, 10))[0];
      const event = {
        id: app.app_id,
        title: `${customer.cus_name} - ${app.app_state}`,
        state: app.app_state,
        customer: app.cus_id,
        start: app.app_date,
        color: '#7759a0',
        end: moment(app.app_date).add(30, 'minutes'),
      };
      allEvents.push(event);
    });
    setEvents(allEvents);
    setCustomers(response.data.customers);
  }, []);

  return (
    <WrapperMenu>
      <Calendarapp
        events={events}
        setEvents={setEvents}
        customers={customers}
      />
      <List
        events={events}
      />
    </WrapperMenu>
  );
};

export default Calendar;
