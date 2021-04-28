import React from 'react';
import {
  Button, Col, DatePicker, Drawer, Form, Input, Row, Select,
} from 'antd';
import moment from 'moment';
import { TwitterPicker } from 'react-color';
import axios from '@Commons/axios';
import { Option } from 'antd/es/mentions';

const CalendarDrawer = ({
  edit, onClose, view, setEvent, event, info, setColor, customers, events, handleDateSelect, postAppointment, putAppointment,
}) => {
  const loadCustomers = () => {
    const options = [];
    customers.forEach((customer) => {
      options.push(<Select.Option value={customer.cus_id} key={customer.cus_id}>{customer.cus_name}</Select.Option>);
    });
    return options;
  };
  const postEvent = (e) => {
    setEvent({ ...event, state: e.target.value });
    handleDateSelect();
    onClose();
    postAppointment();
  };
  const editEvent = (e) => {
    setEvent({ ...event, state: e.target.value });
    onClose();
    putAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((ev) => {
      if (ev.id === parseInt(info.event.id, 10)) {
        const updatedEvent = { ...ev };
        updatedEvent.state = event.state;
        updatedEvent.title = `${updatedEvent.customer}\n${event.state}`;
        calendarApi.getEventById(info.event.id).remove();
        calendarApi.addEvent(updatedEvent);
      }
    });
  };
  const deleteAppointment = async () => axios.delete(`/appointment/${info.event.id}`);
  const deleteEvent = (e) => {
    setEvent({ ...event, state: e.target.value });
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
      footer={(
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
                      <Button onClick={postEvent} type="primary">
                        Submit
                      </Button>
                    )
                }
        </div>
          )}
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Customer ID"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={(e) => setEvent({ ...event, cus_id: e })}
                defaultValue={event.cus_id}
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
              label="Cita date"
              rules={[{ required: true }]}
            >
              <DatePicker
                defaultValue={
                      info.event
                        ? moment(info.event.startStr)
                        : ''
                    }
                style={{ width: '100%' }}
                getPopupContainer={(trigger) => trigger.parentElement}
                showTime
                format="DD-MM-YY HH:mm"
                onChange={(e) => setEvent({ ...event, app_date: e._d })}
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
              <Input
                placeholder="Please enter user name"
                defaultValue={info.event ? info.event.extendedProps.state : ''}
                onChange={(e) => setEvent({ ...event, state: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Servicios"
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
              >
                <Option key={1}>servicios1</Option>
                <Option key={2}>servicios2</Option>
                <Option key={3}>servicios3</Option>
                <Option key={4}>servicios4</Option>
                <Option key={5}>servicios5</Option>
                <Option key={6}>servicios6</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <TwitterPicker
              onChange={(e) => setColor(e.hex)}
            />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
export default CalendarDrawer;
