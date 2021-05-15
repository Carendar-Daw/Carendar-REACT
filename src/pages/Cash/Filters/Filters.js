import React from 'react';
import { WrapperComponents, WrapperFilters } from '@Pages/Cash/Filters/Filters.styled';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Col } from 'antd';

const Filter = ({ appointments, setFilteredAppointments }) => {
  const filterList = (e) => ((e.length > 0) ? setFilteredAppointments(appointments.filter((app) => e.includes(app.status))) : setFilteredAppointments(appointments));
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
        </WrapperComponents>
      </WrapperFilters>
    </>
  );
};

export default Filter;
