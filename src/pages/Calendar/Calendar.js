import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from '@Commons/http/index';
import List from './List/List';
import Calendarapp from './Calendar/Calendarapp';
import { WrapperMenu } from './Calendar.styled';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(async () => {
    const allEvents = [];
    const response = await axios.get('/appointment/saloon');
    const servicesRes = await axios.get('/services');
    const customersRes = await axios.get('/customer');
    setServices(servicesRes.data.services);
    setCustomers(customersRes.data.customers);
    response.data.appointments.forEach((app) => {
      const event = {
        id: app.app_id,
        title: `${app.cus_name} - ${app.app_state}`,
        state: app.app_state,
        customer: { cus_id: app.cus_id, cus_name: app.cus_name },
        start: app.app_date,
        end: moment(app.app_date).add(app.app_time, 'minutes')._d,
        color: `${app.app_color}`,
        services: [],
      };
      allEvents.push(event);
    });
    setEvents(allEvents);
  }, []);

  return (
    <WrapperMenu>
      <Calendarapp

        events={events}
        setEvents={setEvents}
        customers={customers}
        services={services}
      />
      <List
        className="calendar-list"
        events={events}
      />
    </WrapperMenu>
  );
};

export default Calendar;
