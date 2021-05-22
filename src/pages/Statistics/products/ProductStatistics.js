import React, { useEffect, useState, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { WrapperPie, Title, SubTitle } from './ProductStadistics.styled';

const productsStatiscs = ({ products, loadingSpinner }) => {
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (products) setIsData(true);
  }, [loadingSpinner]);
  const { messages, language } = useContext(I18nContext);

  return (
    <WrapperPie>
      <Title>{messages[language].Stock.Title}</Title>
      {isData
        ? (
          <>
            <SubTitle>{messages[language].Statistics.ProductsStatistics}</SubTitle>
            <p>
              {messages[language].Statistics.ThisPeriodProducts}
              {' '}
              {products}
              {messages[language].Statistics.ThisPeriodProducts2}
            </p>
          </>
        ) : (
          <p>{messages[language].Statistics.ChooseDate}</p>
        )}

    </WrapperPie>
  );
};

export default productsStatiscs;
