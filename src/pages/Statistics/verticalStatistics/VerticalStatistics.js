import React, { useContext, useEffect } from 'react';
import { I18nContext } from '@Application/lang/language';
import { Bar } from 'react-chartjs-2';
import { ImgEmpty } from '@Pages/Statistics/pie/PieStatistics.styled';
import empty from '@Assets/images/images/empty.svg';
import { WrapperVerticalBar, Title } from './VerticalStatistics.styled';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = ({ earnings, isDataVertical }) => {
  const { messages, language } = useContext(I18nContext);

  const data = {
    labels: earnings ? earnings.month : ['default'],
    datasets: [
      {
        label: 'Earning x month',
        data: earnings ? earnings.earning : [1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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
    <WrapperVerticalBar>
      <div className="header">
        <Title className="title">{messages[language].Statistics.VerticalBar}</Title>
      </div>
      {isDataVertical ? (
        <Bar data={data} options={options} />
      ) : (
        <ImgEmpty src={empty} />
      )}

    </WrapperVerticalBar>
  );
};
export default VerticalBar;
