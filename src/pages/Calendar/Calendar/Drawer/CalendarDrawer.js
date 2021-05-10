import React from 'react';
import {
  Button, Col, DatePicker, Drawer, Form, Row, Select,
} from 'antd';
import moment from 'moment';
import { TwitterPicker } from 'react-color';
import axios from '@Commons/http';

const CalendarDrawer = ({
  edit, onClose, view, setEvent, event, info, customers, events, handleDateSelect, postAppointment, putAppointment, services,
}) => {
  const loadCustomers = () => {
    const options = [];
    if (customers) {
      customers.forEach((customer) => {
        options.push(<Select.Option value={customer.cus_id} key={customer.cus_id}>{customer.cus_name}</Select.Option>);
      });
    }
    return options;
  };
  const loadServices = () => {
    const options = [];
    services.forEach((service) => {
      options.push(<Select.Option value={service.ser_id} key={service.ser_id}>{service.ser_description}</Select.Option>);
    });
    return options;
  };
  const loadDefaultServices = () => event.services.map((service) => service);

  const postEvent = () => {
    handleDateSelect();
    onClose();
    postAppointment();
  };
  const editEvent = () => {
    onClose();
    putAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((ev) => {
      if (ev.id === parseInt(info.event.id, 10)) {
        const updatedEvent = { ...ev };
        updatedEvent.state = event.state;
        updatedEvent.color = event.color;
        updatedEvent.title = `${updatedEvent.customer.cus_name} - ${event.state}`;
        calendarApi.getEventById(info.event.id).remove();
        calendarApi.addEvent(updatedEvent);
      }
    });
  };

  const deleteAppointment = async () => axios.delete(`/appointment/${info.event.id}`);

  const deleteEvent = () => {
    onClose();
    deleteAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((ev) => {
      if (ev.id === parseInt(info.event.id, 10)) {
        calendarApi.getEventById(info.event.id).remove();
      }
    });
  };
  return (
    <Drawer
      title={
            edit
              ? 'Update an appointment'
              : 'Create a new appointment'
          }
      width={720}
      onClose={onClose}
      visible={view}
      destroyOnClose
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="customer"
              label="Customer ID"
              rules={[{ required: true, message: 'Please select time!' }]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={(e) => setEvent({ ...event, cus_id: e })}
                defaultValue={event.cus_id ? event.cus_id : null}
              >
                {loadCustomers()}
              </Select>
              {' '}

            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="date-picker"
              label="Cita date"
              rules={[
                {
                  type: 'object',
                  required: true,
                  message: 'Please select time!',
                },
              ]}
            >
              <DatePicker
                defaultValue={
                      event.app_date
                        ? moment(event.app_date)
                        : moment(info.startStr)

                    }
                style={{ width: '100%' }}
                getPopupContainer={(trigger) => trigger.parentElement}
                showTime
                allowClear={false}
                format="DD-MM-YY HH:mm"
                onChange={(e) => setEvent({ ...event, app_date: e })}
              />

            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Estado"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Select
                style={{ width: '100%' }}
                defaultValue={info.event ? info.event.extendedProps.state : 'Confirmado'}
                placeholder="Please select"
                onChange={(e, data) => setEvent({ ...event, state: data.value })}
              >
                <Select.Option value="Pendiente">Pendiente</Select.Option>
                <Select.Option value="Aprobado">Aprobado</Select.Option>
                <Select.Option value="Finalizado">Finalizado</Select.Option>
                <Select.Option value="Facturado">Facturado</Select.Option>
                <Select.Option value="Cancelado">Cancelado</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Servicios"
            >
              <Select
                showSearch
                mode="multiple"
                allowClear
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                style={{ width: '100%' }}
                defaultValue={event.services
                  ? loadDefaultServices()
                  : null}
                placeholder="Please select"
                onChange={(value) => setEvent({ ...event, services: value })}
              >
                {loadServices()}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="color"
            >
              <TwitterPicker
                colors={['#6B5091', '#896EAF', '#947BB7', '#9F89BE', '#947BB8', '#9F89BF', '#A996C5',
                  '#DE5476', '#E26584', '#E57692', '#E8879F', '#EB98AD', '#EEAABB', '#F2BBC9']}
                color={event.color}
                triangle="hide"
                onChangeComplete={(e) => setEvent({ ...event, color: e.hex })}
              />
            </Form.Item>

          </Col>
        </Row>
        <Row>
          <Col span={22}>
            <Row>
              <Col span={22}>
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  {
                    edit
                      ? (
                        <>
                          <Button onClick={editEvent} type="primary" style={{ marginRight: 8 }}>
                            Edit
                          </Button>
                          <Button onClick={deleteEvent} type="danger">
                            Delete
                          </Button>
                        </>
                      )
                      : (
                        <Button type="primary" onClick={postEvent}>
                          Submit
                        </Button>
                      )
                  }
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
export default CalendarDrawer;
