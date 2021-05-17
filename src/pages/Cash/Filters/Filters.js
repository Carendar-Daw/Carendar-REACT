import React, { useEffect, useState } from 'react';
import { WrapperComponents, WrapperFilters } from '@Pages/Cash/Filters/Filters.styled';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Col, DatePicker } from 'antd';
import moment from 'moment';
import {log10} from "chart.js/helpers";

const { RangePicker } = DatePicker;

const Filter = ({ appointments, setFilteredAppointments, filteredAppointments }) => {
  const [filters, setFilters] = useState({
    status: [],
    date: [],
  });
  const filterDateList = ([d1, d2]) => {
    (d1 ? setFilteredAppointments(filteredAppointments.filter((app) => (moment(app.date) > d1 && moment(app.date) < d2))) : filteredAppointments);
    console.log(filteredAppointments)
  };
  const filterList = ({ status }) => {
    status.length > 0 ? setFilteredAppointments(appointments.filter((app) => status.includes(app.status))) : setFilteredAppointments(appointments);
  };
  useEffect(() => {
    console.log(filters);
    filterList(filters);
    filterDateList(filters.date);
  }, [filters]);
  return (
    <>
      <WrapperFilters>
        <h1>Filtros</h1>
        <WrapperComponents>
          <Checkbox.Group onChange={(e) => setFilters({ ...filters, status: e })} style={{ width: '100%' }}>
            <Col span={8}>
              <Checkbox value="Pendiente">Pendiente</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Aprobado">Aprobado</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Finalizado">Finalizado</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Facturado">Facturado</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Cancelado">Cancelado</Checkbox>
            </Col>
          </Checkbox.Group>

          <RangePicker showTime onChange={(e) => (e ? setFilters({ ...filters, date: e }) : setFilters({ ...filters, date: [] }))} />
        </WrapperComponents>
      </WrapperFilters>
    </>
  );
};

export default Filter;
