import React, { useEffect, useState } from 'react';
import { WrapperPie, Title, SubTitle } from './clientsStatistics.styled';

const ClientsStatistics = ({ clients, loadingSpinner }) => {
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (clients) setIsData(true);
  }, [loadingSpinner]);

  return (
    <WrapperPie>
      <Title>Clients</Title>
      {isData ?
        (
          <>
            <SubTitle>Your client stadistics</SubTitle>
            <p>Este mes has registrado {clients} clientes!</p>
          </>
        ) : (
          <p>Choose some date...</p>
        )}

    </WrapperPie>
  );
};

export default ClientsStatistics;
