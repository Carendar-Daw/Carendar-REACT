import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Drawer, Form, Button, Col, Row, Input, DatePicker, Select,
} from 'antd';
import moment from 'moment';
import Container from './Calendarapp.styled';
import axios from '../../../axios';

const Calendarapp = () => {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [events, setEvents] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [edit, isEdit] = useState(false);

  useEffect(async () => {
    const allEvents = [];
    const response = await axios.get('/appointment/saloon/1');

    await response.data.data.appointments.forEach((app) => {
      const event = {
        id: app.app_id,
        title: `Cliente ID:${app.cus_id}\n${app.app_state}`,
        description: app.app_state,
        customer: app.cus_id,
        start: app.app_date,
        end: moment(app.app_date).add(30, 'minutes'),
      };
      allEvents.push(event);
    });
    setEvents(allEvents);
    setCustomers(response.data.data.customers);
  }, []);
  const postAppointment = async () => {
    const d = new Date(info.startStr);
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    const appointment = {
      sal_id: 1,
      cus_id: 1,
      app_date: `${date} ${time}`,
      app_state: title,
    };
    await axios.post('/appointment', appointment);
  };
  const putAppointment = async () => {
    const d = new Date(info.event.startStr);
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    const appointment = {
      sal_id: 1,
      cus_id: 1,
      app_date: `${date} ${time}`,
      app_state: title,
    };
    await axios.put(`/appointment/${info.event.id}`, appointment);
  };
  const deleteAppointment = async () => axios.delete(`/appointment/${info.event.id}`);

  const loadCustomers = () => {
    const options = [];
    customers.forEach((customer) => {
      options.push(<Select.Option value={customer.cus_id} key={customer.cus_id}>{customer.cus_name}</Select.Option>);
    });
    return options;
  };
  const showDrawer = (selectInfo) => {
    isEdit(false);
    setInfo(selectInfo);
    setState(true);
  };

  const onClose = () => {
    setState(false);
    setTitle('');
  };

  const handleDateSelect = () => {
    const calendarApi = info.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
      }, true); // temporary=true, will get overwritten when reducer gives new events
    }
  };

  const postEvent = (e) => {
    setTitle(e.target.value);
    handleDateSelect();
    onClose();
    postAppointment();
  };
  const updateAppointment = (selectInfo) => {
    setInfo(selectInfo);
    isEdit(true);
    setState(true);
  };
  const editEvent = (e) => {
    // console.log(info);
    setTitle(e.target.value);
    onClose();
    putAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((event) => {
      if (event.id === parseInt(info.event.id, 10)) {
        const updatedEvent = { ...event };
        updatedEvent.description = title;
        updatedEvent.title = `Cliente ID:${updatedEvent.customer}\n${title}`;
        calendarApi.getEventById(info.event.id).remove();
        calendarApi.addEvent(updatedEvent);
      }
    });
  };
  const deleteEvent = (e) => {
    console.log(info.event);
    setTitle(e.target.value);
    onClose();
    deleteAppointment();
    const calendarApi = info.view.calendar;
    events.forEach((event) => {
      if (event.id === parseInt(info.event.id, 10)) {
        calendarApi.getEventById(info.event.id).remove();
      }
    });
  };

  return (
    <>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,list',
          }}
          initialView="timeGridDay"
          editable={false}
          events={events}
          selectable
          selectMirror
          dayMaxEvents
          select={showDrawer}
          eventClick={updateAppointment}
        />
      </Container>
      <Drawer
        title={
          edit
            ? 'Update an appointment'
            : 'Create a new appointment'
        }
        width={720}
        onClose={onClose}
        visible={state}
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
                <Input placeholder="Please enter user name" defaultValue={info.event ? info.event.extendedProps.description : ''} onChange={(e) => setTitle(e.target.value)} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Calendarapp;
