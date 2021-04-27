import React, { useState } from 'react';
import PropTypes from 'prop-types';
import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { TwitterPicker } from 'react-color';
import listPlugin from '@fullcalendar/list';
import {
  Drawer, Form, Button, Col, Row, Input, DatePicker, Select,
} from 'antd';
import moment from 'moment';
import Container from './Calendarapp.styled';
import axios from '../../../axios';

const Calendarapp = ({ customers, events, setEvents }) => {
  const [state, setState] = useState(false);
  const [info, setInfo] = useState('');
  const [edit, isEdit] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth > 1336 ? 1.8 : 1);
  const [color, setColor] = useState('#7759a0');
  const [event, setEvent] = useState({});

  const postAppointment = async () => {
    const d = event.app_date;
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    const appointment = {
      sal_id: 1,
      cus_id: event.cus_id,
      app_date: `${date} ${time}`,
      app_state: event.state,
      // app_color: info.extendedProps.color,
    };
    await axios.post('/appointment', appointment);
  };
  const putAppointment = async () => {
    const d = new Date(info.event.startStr);
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    const appointment = {
      sal_id: 1,
      cus_id: event.cus_id,
      app_date: `${date} ${time}`,
      app_state: event.state,
      // app_color: info.extendedProps.color,
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
    setEvent({});
  };

  const handleDateSelect = () => {
    const calendarApi = info.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (event.state) {
      const newEvent = { // will render immediately. will call handleEventAdd
        title: event.state,
        start: event.app_date,
        end: info.endStr,
        allDay: info.allDay,
        // color: info.extendedProps.color,
      };
      calendarApi.addEvent(newEvent, true); // temporary=true, will get overwritten when reducer gives new events
      setEvents([...events, newEvent]);
    }
  };

  const postEvent = (e) => {
    setEvent({ ...event, state: e.target.value });
    handleDateSelect();
    onClose();
    postAppointment();
  };
  const updateAppointment = (selectInfo) => {
    setInfo(selectInfo);
    // console.log(selectInfo.event);
    setEvent({
      state: selectInfo.event.extendedProps.state,
      cus_id: selectInfo.event.extendedProps.customer,
    });
    isEdit(true);
    setState(true);
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
  const deleteEvent = (e) => {
    // console.log(info.event);
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
    <>
      <Container>
        <FullCalendar
          locale={esLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          eventBackgroundColor="#7759a0"
          eventBorderColor="#7759a0"
          initialView="timeGridDay"
          editable={false}
          events={events}
          selectable
          selectMirror
          dayMaxEvents
          select={showDrawer}
          eventClick={updateAppointment}
          aspectRatio={aspectRatio}
          windowResize={() => {
            window.innerWidth > 1336
              ? setAspectRatio(1.8)
              : setAspectRatio(1);
          }}
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
              <TwitterPicker
                onChange={(e) => setColor(e.hex)}
              />
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
Calendarapp.propTypes = {
  customers: PropTypes.instanceOf(Array).isRequired,
  events: PropTypes.instanceOf(Array).isRequired,
  setEvents: PropTypes.func.isRequired,
};
export default Calendarapp;
