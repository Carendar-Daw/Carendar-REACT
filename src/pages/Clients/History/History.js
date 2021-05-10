import React from 'react';
import { ContentHistory } from "./History.styled";
import {
    Timeline
} from 'antd';

const History = ({ history }) => {

    return (
        <ContentHistory>
            <Timeline mode='left' >
                {history.map(appointment => (
                    <Timeline.Item label={appointment.app_date.split(' ')[0]}>
                    <p>Time: {appointment.app_date.split(' ')[1]}</p>
                    <p>Color: {appointment.app_color}</p>
                    <p>State: {appointment.app_state}</p>
                    </Timeline.Item>
                ))}
            </Timeline>
        </ContentHistory>
    );
};

export default History;
