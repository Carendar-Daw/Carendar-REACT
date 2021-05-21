import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import empty from '@Assets/images/images/empty.svg';
import {
  WrapperPie, Title, ImgEmpty, SubTitle,
} from './PieStatistics.styled';

const PieStatistics = ({ servicesByAppointment, isDataPie }) => {
  const data = {
    labels: servicesByAppointment ? servicesByAppointment.labels : ['default'],
    datasets: [
      {
        label: '# of Votes',
        data: servicesByAppointment ? servicesByAppointment.data : [1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <WrapperPie>
      <div className="header">
        <Title>Services</Title>
      </div>
      {isDataPie ? (
        <>
          <SubTitle>Look the % of services made by appointment</SubTitle>
          <Pie
            data={data}
          />
        </>
      ) : (
        <ImgEmpty src={empty} />
      )}

    </WrapperPie>
  );
};

export default PieStatistics;
