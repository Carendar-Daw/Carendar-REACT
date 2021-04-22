import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Drawer, Form, Button, Col, Row, Input, DatePicker, Select,
} from 'antd';
import { Option } from 'antd/es/mentions';
import Container from './Calendarapp.styled';
import axios from '../../../axios';
import { getEvents } from './event-utils';

const Calendarapp = () => {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const test = async () => {
    const appointment = {
      sal_id: 1,
      cus_id: 1,
      app_date: '2021-04-22 20:00:00',
      app_state: 'Test front',
    };
    // const idToken = await getIdTokenClaims();

    // axios.defaults.headers.common.Authorization = `Bearer ${idToken.__raw}`;
    axios.post('/appointment', appointment).then((res) => {
      console.log(res.data);
    });
  };

  const showDrawer = (selectInfo) => {
    setState(true);
    setInfo(selectInfo);
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

  const buildCita = (e) => {
    setTitle(e.target.value);
    handleDateSelect();
    onClose();
    test();
  };

  return (
    <>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="timeGridDay"
          editable={false}
          initialEvents={getEvents}
          selectable
          selectMirror
          dayMaxEvents
          select={showDrawer}
        />
      </Container>
      <Drawer
        title="Create a new account"
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
            <Button onClick={buildCita} type="primary">
              Submit
            </Button>
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
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
                {' '}

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
                <Input placeholder="Please enter user name" onChange={(e) => setTitle(e.target.value)} />
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
