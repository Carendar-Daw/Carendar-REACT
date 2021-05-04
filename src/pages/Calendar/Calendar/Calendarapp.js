import React, { useState } from 'react';
import PropTypes from 'prop-types';
import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import CalendarDrawer from './Drawer/CalendarDrawer';
import Container from './Calendarapp.styled';
import axios from '@Commons/http';

const Calendarapp = ({ customers, events, setEvents }) => {
  const [view, setView] = useState(false);
  const [info, setInfo] = useState('');
  const [edit, isEdit] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth > 1336 ? 1.8 : 1);
  const [color, setColor] = useState('#7759a0');
  const [event, setEvent] = useState({});

  const postAppointment = async () => {
    const d = event.app_date;
    const [date] = d.toISOString().split('T');
    const [time] = d.toTimeString().split(' ');
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


  const updateAppointment = (selectInfo) => {
    setInfo(selectInfo);
    // console.log(selectInfo.event);
    setEvent({
      state: selectInfo.event.extendedProps.state,
      cus_id: selectInfo.event.extendedProps.customer,
    });
    isEdit(true);
    setView(true);
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
          editable={true}
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
      <CalendarDrawer
        edit={edit}
        onClose={onClose}
        view={view}
        setEvent={setEvent}
        event={event}
        info={info}
        setColor={setColor}
        customers={customers}
        events={events}
        handleDateSelect={handleDateSelect}
        postAppointment={postAppointment}
        putAppointment={putAppointment}
      />
    </>
  );
};

export default Calendarapp;
