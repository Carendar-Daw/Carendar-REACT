import React, { useEffect, useState, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { WrapperPie, Title, SubTitle } from './clientsStatistics.styled';

const ClientsStatistics = ({ clients, loadingSpinner }) => {
  const [isData, setIsData] = useState(false);

  const { messages, language } = useContext(I18nContext);

  useEffect(() => {
    if (clients) setIsData(true);
  }, [loadingSpinner]);

  return (
    <WrapperPie>
      <Title>{messages[language].Customers.Title}</Title>
      {isData
        ? (
          <>
            <SubTitle>{messages[language].Statistics.ClientStatistics}</SubTitle>
            <p>
              {messages[language].Statistics.ThisPeriodClients}
              {clients}
              {' '}
              {messages[language].Statistics.ThisPeriodClients2}
            </p>
          </>
        ) : (
          <p>{messages[language].Statistics.ChooseDate}</p>
        )}

    </WrapperPie>
  );
};

export default ClientsStatistics;
