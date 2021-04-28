import React, { useEffect, useState } from 'react';
import moment from 'moment';
import List from '@Components/Calendar/List/List';
import Calendarapp from '../../components/Calendar/Calendar/Calendarapp';
import { WrapperMenu } from './Calendar.styled';
import axios from '../../commons/axios';
import {parse} from "@fortawesome/fontawesome-svg-core";

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
        customer: app.cus_id,
        start: app.app_date,
        end: moment(app.app_date).add(app.ser_time, 'minutes')._d,
        color: '#7759a0',
        // end: moment(app.app_date).add(parseInt(app.ser_time, 10), 'minutes'),

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
        events={events}
      />
    </WrapperMenu>
  );
};

export default Calendar;
