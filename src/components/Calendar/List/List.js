import React from 'react';
import FullCalendar from '@fullcalendar/react';
import esLocale from '@fullcalendar/core/locales/es';
import listPlugin from '@fullcalendar/list';
import Container from '@Components/Calendar/List/List.styled';

const List = ({events}) => (
  <>
    <Container>
      <FullCalendar
        locale={esLocale}
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

export default List;
