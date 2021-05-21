import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import { I18nContext } from '@Application/lang/language';
import esLocale from '@fullcalendar/core/locales/es';
import listPlugin from '@fullcalendar/list';
import { Popover } from 'antd';
import { Badge } from '@Pages/Calendar/Calendar/Calendarapp.styled';
import states from '@Pages/Calendar/helpers';
import Container from './List.styled';

const List = ({ events }) => {
  const { language } = useContext(I18nContext);
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
  return (
    <>
      <Container className="calendar-list">
        <FullCalendar
          locale={language === 'en' ? null : esLocale}
          plugins={[listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: '',
            right: '',
          }}
          initialView="listWeek"
          editable={false}
          selectable
          selectMirror
          dayMaxEvents
          events={events}
          height={500}
          eventDidMount={(info) => {
            const dotEl = info.el.getElementsByClassName('fc-list-event-dot')[0];
            const title = info.el.getElementsByClassName('fc-list-event-title')[0].firstElementChild;
            if (dotEl) dotEl.style.display = 'none';
            if (title) title.style.marginRight = '30%';
          }}
          eventContent={renderEventContent}
        />
      </Container>

    </>
  );
};
export default List;
