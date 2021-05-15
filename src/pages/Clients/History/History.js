import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  Timeline,
} from 'antd';
import { ContentHistory } from './History.styled';

const History = ({ history }) => {
  const { messages, language } = useContext(I18nContext);
  return (
    <ContentHistory>
      <Timeline mode="left">
        {history.map((appointment) => (
          <Timeline.Item label={appointment.app_date.split(' ')[0]}>
            <p>
              {messages[language].Services.Time}
              :
              {' '}
              {appointment.app_date.split(' ')[1]}
            </p>
            <p>
              Color:
              {' '}
              {appointment.app_color}
            </p>
            <p>
              {messages[language].Customers.State}
              :
              {' '}
              {appointment.app_state}
            </p>
          </Timeline.Item>
        ))}
      </Timeline>
    </ContentHistory>
  );
};
export default History;
