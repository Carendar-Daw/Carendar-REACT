import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import { I18nContext } from '@Application/lang/language';
import esLocale from '@fullcalendar/core/locales/es';
import listPlugin from '@fullcalendar/list';
import Container from './List.styled';

const List = ({ events }) => {
  const { messages, language } = useContext(I18nContext);
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
          eventBackgroundColor="#7759a0"
          eventBorderColor="#7759a0"
          initialView="listWeek"
          editable={false}
          selectable
          selectMirror
          dayMaxEvents
          events={events}
          height={500}
        />
      </Container>

    </>
  );
};
export default List;
