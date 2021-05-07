import React, { useEffect, useState } from 'react';
import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from '@Commons/http';
import CalendarDrawer from './Drawer/CalendarDrawer';
import Container from './Calendarapp.styled';

const Calendarapp = ({
  customers, events, setEvents, services,
}) => {
  const [view, setView] = useState(false);
  const [info, setInfo] = useState('');
  const [edit, isEdit] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth > 1336 ? 1.8 : 1);
  const [color, setColor] = useState('#7759a0');
  const [event, setEvent] = useState({
    state: 'Confirmado',
    services: [],
  });

  const postAppointment = async () => {
    const d = event.app_date;
    const [date] = d.toISOString().split('T');
    const [time] = d.toTimeString().split(' ');
    const appointment = {
      cus_id: event.cus_id,
      app_date: `${date} ${time}`,
      app_state: event.state,
      app_services: event.services,
      // app_color: info.extendedProps.color,
    };
    console.log(event)
    await axios.post('/appointment', appointment);
  };
  const putAppointment = async () => {
    const d = event.app_date ? event.app_date : new Date(info.event.startStr);

    const [date] = d.toISOString().split('T');
    const [time] = d.toTimeString().split(' ');

    const appointment = {
      cus_id: event.cus_id,
      app_date: `${date} ${time}`,
      app_state: event.state,
      app_services: event.services,
      // app_color: info.extendedProps.color,
    };
    await axios.put(`/appointment/${info.event.id}`, appointment).then((e) => console.log(e));
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
        services: event.services,
        // color: info.extendedProps.color,
      };
      calendarApi.addEvent(newEvent, true); // temporary=true, will get overwritten when reducer gives new events
      setEvents([...events, newEvent]);
    }
  };

  const loadAppointment = async (selectInfo) => {
    setInfo(selectInfo);
    const resServices = await axios.get(`/services/${selectInfo.event.id}`);
    const allServices = Object.values(resServices.data.service);
    const servicesInAppointment = services.filter((ele) => allServices.map((e) => e.ser_id).includes(ele.ser_id));
    setEvent({
      state: selectInfo.event.extendedProps.state,
      cus_id: selectInfo.event.extendedProps.customer,
      services: servicesInAppointment.map((ele) => ele.ser_id),
      app_date: selectInfo.event.startStr,
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
          editable
          events={events}
          selectable
          selectMirror
          dayMaxEvents
          select={showDrawer}
          eventClick={loadAppointment}
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
        services={services}
      />
    </>
  );
};
export default Calendarapp;
