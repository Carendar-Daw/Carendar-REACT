import React, { useState } from 'react';
import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from '@Commons/http';
import moment from 'moment';
import states from '@Pages/Calendar/helpers';
import { Popover } from 'antd';
import CalendarDrawer from './Drawer/CalendarDrawer';
import { Container, Badge } from './Calendarapp.styled';

const Calendarapp = ({
  customers, events, setEvents, services,
}) => {
  const [view, setView] = useState(false);
  const [info, setInfo] = useState('');
  const [edit, isEdit] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth > 1336 ? 1.8 : 1);
  const [event, setEvent] = useState({
    state: 'Aprobado',
    services: [],
  });

  const postAppointment = async () => {
    const d = event.app_date
      ? moment(event.app_date)
      : moment(info.startStr);
    d.add(2, 'hours');
    const appointment = {
      cus_id: event.cus_id,
      app_date: d._d,
      app_state: event.state,
      app_services: event.services,
      app_color: event.color,
    };
    await axios.post('/appointment', appointment);
  };
  const putAppointment = async () => {
    const d = event.app_date;
    d.add(2, 'hours');
    const appointment = {
      cus_id: event.cus_id,
      app_date: d,
      app_state: event.state,
      app_services: event.services,
      app_color: event.color,
    };
    await axios.put(`/appointment/${info.event.id}`, appointment);
  };

  const showDrawer = (selectInfo) => {
    isEdit(false);
    setInfo(selectInfo);
    setView(true);
  };

  const onClose = () => {
    setView(false);
    setEvent({});
  };

  const handleDateSelect = () => {
    const calendarApi = info.view.calendar;
    calendarApi.unselect(); // clear date selection

    const newEvent = { // will render immediately. will call handleEventAdd
      title: event.state,
      start: info.startStr,
      end: info.endStr,
      allDay: info.allDay,
      services: event.services,
      color: event.color,
    };
    calendarApi.addEvent(newEvent, true); // temporary=true, will get overwritten when reducer gives new events
    setEvents([...events, newEvent]);
  };

  const loadAppointment = async (selectInfo) => {
    setInfo(selectInfo);
    const resServices = await axios.get(`/services/${selectInfo.event.id}`);
    const allServices = Object.values(resServices.data.service);
    const servicesInAppointment = services.filter((ele) => allServices.map((e) => e.ser_id).includes(ele.ser_id));
    setEvent({
      state: selectInfo.event.extendedProps.state,
      cus_id: selectInfo.event.extendedProps.customer.cus_id,
      cus_name: selectInfo.event.extendedProps.customer.cus_name,
      services: servicesInAppointment.map((ele) => ele.ser_id),
      app_date: moment(selectInfo.event.startStr),
    });
    isEdit(true);
    setView(true);
  };
  const statePopover = (ev) => (
    <span>{ev.event.extendedProps.state}</span>
  );
  const appointmentPopover = () => {
    let text = [];
    if (event.service) {
      const allServices = Object.values(event.service);
      const servicesInAppointment = services.filter((ele) => allServices.map((e) => e.ser_id).includes(ele.ser_id));
      text = servicesInAppointment.map((ser) => ser.ser_description);
    }
    return (
      <>
        {
          text.map((ser) => (
            <p key={ser}>{ser}</p>
          ))
        }
      </>
    );
  };
  const loadDetail = async (ev) => {
    const resServices = await axios.get(`/services/${ev.event.id}`);
    setEvent({ ...event, service: resServices.data.service });
  };
  const renderEventContent = (ev) => (
    <>
      <Popover content={statePopover(ev)}>
        <Badge color={states[ev.event.extendedProps.state]} />
      </Popover>
      <Popover content={appointmentPopover}>
        <span onMouseOver={() => loadDetail(ev)}>
          {` ${ev.timeText} I ${ev.event.extendedProps.customer.cus_name}`}
        </span>
      </Popover>
    </>
  );
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
          allDaySlot={false}
         // eventMouseEnter={(e)=>alert(e.event.extendedProps.customer.cus_name)}
          select={showDrawer}
          eventClick={loadAppointment}
          aspectRatio={aspectRatio}
          windowResize={() => {
            // eslint-disable-next-line no-unused-expressions
            window.innerWidth > 1336
              ? setAspectRatio(1.8)
              : setAspectRatio(1);
          }}
          eventContent={renderEventContent}
        />
      </Container>
      <CalendarDrawer
        edit={edit}
        onClose={onClose}
        view={view}
        setEvent={setEvent}
        event={event}
        info={info}
        customers={customers}
        events={events}
        handleDateSelect={handleDateSelect}
        postAppointment={postAppointment}
        putAppointment={putAppointment}
        services={services}
      />
    </>
  );
};
export default Calendarapp;
