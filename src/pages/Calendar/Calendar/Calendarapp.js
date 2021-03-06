import React, { useState, useContext } from 'react';
import esLocale from '@fullcalendar/core/locales/es';
import { useSelector } from "react-redux";
import { I18nContext } from '@Application/lang/language';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from '@Commons/http';
import moment from 'moment';
import states from '@Pages/Calendar/helpers';
import { Popover } from 'antd';
import { getSaloonName } from '@Application/store/user/reducer';
import CalendarDrawer from './Drawer/CalendarDrawer';
import { Container, Badge, Greetings } from './Calendarapp.styled';

const Calendarapp = ({
  customers, events, setEvents, services,

}) => {
  const { language } = useContext(I18nContext);
  const [view, setView] = useState(false);
  const [info, setInfo] = useState('');
  const [edit, isEdit] = useState(false);
  const saloonName = useSelector(getSaloonName);

  const [event, setEvent] = useState({
    state: 'Aprobado',
    services: null,
  });

  const postAppointment = async () => {
    const calendarApi = info.view.calendar;
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
    window.location.reload();
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
    window.location.reload();
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
      services: event.services,
      color: event.color,
    };
    calendarApi.addEvent(newEvent, true); // temporary=true, will get overwritten when reducer gives new events
    setEvents([...events, newEvent]);
  };

  let config;

  if (window.innerWidth > 1000) {
    config = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
    };
  } else {
    config = {
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridDay',
      },
    };
  }

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
      color: selectInfo.event.backgroundColor,
    });
    isEdit(true);
    setView(true);
  };
  const statePopover = (ev) => (
    <span>{ev.event.extendedProps.state}</span>
  );
  const renderEventContent = (ev) => (
    <>
      <Popover content={statePopover(ev)}>
        <Badge color={states[ev.event.extendedProps.state]} />
      </Popover>
      <span>
        {` ${ev.timeText}  ${ev.event.extendedProps.customer ? ev.event.extendedProps.customer.cus_name : ''}`}
      </span>
    </>
  );

  // eslint-disable-next-line consistent-return
  const greetings = () => {
    const hour = Number(moment().format('HH:mm').split(':')[0]);

    if (hour >= 6 && hour < 14) {
      return (<Greetings>Buenos dias, {saloonName}</Greetings>);
    } if (hour > 14 && hour < 20) {
      return (<Greetings>Buenas tardes, {saloonName}</Greetings>);
    }
    return (<Greetings>Buenas noches, {saloonName}</Greetings>);
  };

  return (
    <>
      <Container className="calendar">
        {greetings()}
        <FullCalendar
          locale={language === 'en' ? null : esLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          {...config}
          titleFormat={{ // will produce something like "Tuesday, September 18, 2018"
            month: 'numeric',
            year: 'numeric',
            day: 'numeric',
          }}
          eventBackgroundColor="#7759a0"
          eventBorderColor="#7759a0"
          initialView="timeGridDay"
          editable={false}
          events={events}
          selectable
          selectMirror
          stickyHeaderDates={false}
          dayMaxEvents
          height="auto"
          allDaySlot={false}
          select={showDrawer}
          eventClick={loadAppointment}
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
