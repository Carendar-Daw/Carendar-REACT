import React, { useEffect, useState } from 'react';
import Filters from '@Pages/Cash/Filters/Filters';
import List from '@Pages/Cash/List/List';
import axios from '@Commons/http';
import { WrapperComponents } from './Cash.styled';

const Cash = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const hasServices = (app) => {
    const sad = app.map((appointment) => {
      const x = app.filter((a) => a.app_id === appointment.app_id);
      if (x.length > 1) {
        const ayuda = { ...x[0] };
        x.forEach((ele, index) => {
          if (index !== 0) {
            ayuda.ser_description = `${ayuda.ser_description}, ${ele.ser_description}`;
            ayuda.ser_price += ele.ser_price;
          }
        });
        return ayuda;
      }
      return appointment;
    });

    return sad.filter(
      (v, i, a) => a.findIndex((t) => t.app_id === v.app_id) === i,
    );
  };
  useEffect(async () => {
    const allEvents = [];
    const response = await axios.get('/appointment/cash');
    const allAppointments = hasServices(response.data.appointments);
    allAppointments.forEach((app) => {
      const event = {
        key: app.app_id,
        status: app.app_state,
        customer: app.cus_name,
        price: app.ser_price,
        date: app.app_date,
        services: app.ser_description,
        payment: app,
      };
      allEvents.push(event);
    });
    setAppointments(allEvents);
    setFilteredAppointments(allEvents);
  }, []);

  return (
    <>
      <WrapperComponents>
        <Filters appointments={appointments} setAppointments={setAppointments} filteredAppointments={filteredAppointments} setFilteredAppointments={setFilteredAppointments} />
        <List appointments={appointments} filteredAppointments={filteredAppointments} />
      </WrapperComponents>

    </>

  );
};

export default Cash;
