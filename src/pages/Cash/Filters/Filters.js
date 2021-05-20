import React, { useState } from 'react';
import { WrapperComponents, WrapperFilters } from '@Pages/Cash/Filters/Filters.styled';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Col, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Filter = ({ appointments, setFilteredAppointments, filteredAppointments }) => {
  const [filters, setFilters] = useState({
    status: [],
    date: [],
  });
  const filterList = (e) => ((e.length > 0) ? setFilteredAppointments(appointments.filter((app) => e.includes(app.status))) : setFilteredAppointments(appointments));
  const filterDateList = ([d1, d2]) => setFilteredAppointments(filteredAppointments.filter((app) => (moment(app.date) > d1 && moment(app.date) < d2)));
  return (
    <>
      <WrapperFilters>
        <h1>Filtros</h1>
        <WrapperComponents>
          <Checkbox.Group onChange={filterList} style={{ width: '100%' }}>
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

          <RangePicker showTime onChange={filterDateList} />
        </WrapperComponents>
      </WrapperFilters>
    </>
  );
};

export default Filter;
