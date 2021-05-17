import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from '@Commons/http';
import moment from 'moment';

const columns = [
  {
    title: 'PK',
    dataIndex: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Customer',
    className: 'customer',
    dataIndex: 'customer',
    align: 'right',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Services',
    dataIndex: 'services',
  },
];

const TableCash = () => {
  const [appointments, setAppointments] = useState([]);

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
    console.log(allAppointments);
    allAppointments.forEach((app) => {
      const event = {
        key: app.app_id,
        status: app.app_state,
        customer: app.cus_name,
        price: app.ser_price,
        date: app.app_date,
        services: app.ser_description,
      };
      allEvents.push(event);
    });
    setAppointments(allEvents);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={appointments}
      bordered
      title={() => 'Header'}
      footer={() => 'Footer'}
    />
  );
};

export default TableCash;
