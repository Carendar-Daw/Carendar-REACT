import React, { useEffect, useState, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
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
  const { messages, language } = useContext(I18nContext);

  const filterList = ({ status, date }) => {
    const [d1, d2] = date;
    const isArray = isArrayEmpty(status);
    let filtered = null;
    // eslint-disable-next-line no-unused-expressions
    d1 ? filtered = appointments.filter((app) => (moment(app.date) > d1 && moment(app.date) < d2)) : appointments;

    if (filtered) {
      // eslint-disable-next-line no-unused-expressions
      isArray ? setFilteredAppointments(filtered.filter((app) => status.includes(app.status))) : setFilteredAppointments(filtered);
    } else {
      // eslint-disable-next-line no-unused-expressions
      isArray ? setFilteredAppointments(appointments.filter((app) => status.includes(app.status))) : setFilteredAppointments(appointments);
    }
  };

  useEffect(() => {
    filterList(filters);
  }, [filters]);
  return (
    <>
      <WrapperFilters className="cash-filters">
        <h1>{messages[language].Cash.Filters}</h1>
        <WrapperComponents>

          <Checkbox.Group onChange={(e) => setFilters({ ...filters, status: e })} style={{ width: '100%' }}>
            <h3>Filtrar por estado</h3>
            <Col span={8}>
              <Checkbox value="Pendiente">{messages[language].Appointments.ToConfirm}</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Aprobado">{messages[language].Appointments.Aproved}</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Finalizado">{messages[language].Appointments.Finished}</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Facturado">{messages[language].Appointments.Factured}</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Cancelado">{messages[language].Appointments.Canceled}</Checkbox>
            </Col>
          </Checkbox.Group>
          <div>
            <h3>Filtrar por fecha</h3>
            <RangePicker showTime onChange={(e) => (e ? setFilters({ ...filters, date: e }) : setFilters({ ...filters, date: [] }))} />
          </div>
        </WrapperComponents>
      </WrapperFilters>
    </>
  );
};

export default Filter;
