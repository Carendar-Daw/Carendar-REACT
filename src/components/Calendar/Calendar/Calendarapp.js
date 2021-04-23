import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Drawer, Form, Button, Col, Row, Input, DatePicker, Select,
} from 'antd';
import { Option } from 'antd/es/mentions';
import moment from 'moment';
import Container from './Calendarapp.styled';
import axios from '../../../axios';

const Calendarapp = () => {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [events, setEvents] = useState([]);
  const [edit, isEdit] = useState(false);

  useEffect(async () => {
    const allEvents = [];
    const response = await axios.get('/appointment/saloon/1');
    await response.data.data.appointments.forEach((app) => {
      const event = {
        id: app.app_id,
        title: `Cliente ID:${app.cus_id}\n${app.app_state}`,
        description: app.app_state,
        start: app.app_date,
        end: moment(app.app_date).add(30, 'minutes'),
      };
      allEvents.push(event);
    });
    setEvents(allEvents);
  }, []);
  const test = async () => {
    const d = new Date(info.startStr);
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    const appointment = {
      sal_id: 1,
      cus_id: 1,
      app_date: `${date} ${time}`,
      app_state: title,
    };
    axios.post('/appointment', appointment).then((res) => {
      console.log(res.data);
    });
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

  const updateAppointment = (selectInfo) => {
    console.log(selectInfo.event.extendedProps);
    setInfo(selectInfo.event);
    isEdit(true);
    setState(true);
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

  const buildCita = (e) => {
    setTitle(e.target.value);
    handleDateSelect();
    onClose();
    test();
  };
  const editAppointment = (e) => {
    setTitle(e.target.value);
    handleDateSelect();
    onClose();
    test();
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
        title="Create a new appointment"
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
                  <Button onClick={editAppointment} type="primary">
                    Edit
                  </Button>
                )
                : (
                  <Button onClick={buildCita} type="primary">
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
                name="cus_id"
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
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
                {' '}

              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="app_date"
                label="Cita date"
                rules={[{ required: true }]}
              >
                <DatePicker
                  defaultValue={moment(info.startStr)}
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
                name="app_state"
                label="Estado"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" defaultValue={info.extendedProps ? info.extendedProps.description : ''} onChange={(e) => setTitle(e.target.value)} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <Button onClick={showDrawer}>+</Button>
    </>
  );
};

export default Calendarapp;
