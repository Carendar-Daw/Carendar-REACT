import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import axios from '@Commons/http';
import { WrapperStatistics, FlexWrapper, WrapperDateRange } from './statistics.styled';
import PieStatistics from './pie/PieStatistics';
import VerticalBar from './verticalStatistics/VerticalStatistics';

const dateFormat = 'YYYY/MM/DD HH:mm:ss';

const Statistics = () => {
  const [servicesByAppointment, setServicesByAppointment] = useState(false);
  const { RangePicker } = DatePicker;

  const handleDateRange = async (dateString) => {
    console.log(dateString);
    const services = await axios.post('http://localhost/carendar/laravel/Carendar-LARAVEL/public/index.php/api/statistics', { minTime: dateString[0], maxTime: dateString[1] });
    console.log(services.data.servicesPie);
    setServicesByAppointment(services.data.servicesPie);
    console.log(servicesByAppointment.map(ser => ser.ser_description));
  };

  return (
    <WrapperStatistics>
      <FlexWrapper>
        <WrapperDateRange>
          <RangePicker
            format={dateFormat}
            onChange={handleDateRange}
            defaultValue={[moment('2021-03-03 21:17:02'), moment('2021-11-22 21:17:02')]}
          />
        </WrapperDateRange>
        <PieStatistics />
        <PieStatistics />
      </FlexWrapper>
      <FlexWrapper>
        <VerticalBar />
        <PieStatistics servicesByAppointment={servicesByAppointment} />
      </FlexWrapper>
    </WrapperStatistics>
  );
};

export default Statistics;
