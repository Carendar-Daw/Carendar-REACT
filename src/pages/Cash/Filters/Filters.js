import React, { useEffect, useState } from 'react';
import { WrapperComponents, WrapperFilters } from '@Pages/Cash/Filters/Filters.styled';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Col, DatePicker } from 'antd';
import moment from 'moment';
import { isArrayEmpty } from '@Commons/utils/type-predicates';

const { RangePicker } = DatePicker;

const Filter = ({ appointments, setFilteredAppointments }) => {
  const [filters, setFilters] = useState({
    status: [],
    date: [],
  });

  const filterList = ({ status, date }) => {
    const [d1, d2] = date;
    const isArray = isArrayEmpty(status);
    let filtered = null;
    d1 ? filtered = appointments.filter((app) => (moment(app.date) > d1 && moment(app.date) < d2)) : appointments;

    if (filtered) {
      isArray ? setFilteredAppointments(filtered.filter((app) => status.includes(app.status))) : setFilteredAppointments(filtered);
    } else {
      isArray ? setFilteredAppointments(appointments.filter((app) => status.includes(app.status))) : setFilteredAppointments(appointments);
    }
  };

  useEffect(() => {
    filterList(filters);
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
