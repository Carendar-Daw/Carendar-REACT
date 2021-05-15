import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  WrapperDetails, WrapperInfo, TitlePage, ChooseAlert,
} from './Details.styled';

const Details = ({ details }) => {
  const { messages, language } = useContext(I18nContext);
  return (
    <WrapperDetails>
      <TitlePage>{messages[language].Stock.InfoAbout}</TitlePage>
      {!details ? <ChooseAlert>{messages[language].Services.ChooseService}</ChooseAlert>
        : (
          <WrapperInfo>
            <p>
              <strong>
                {messages[language].Stock.Name}
                :
                {' '}
              </strong>
              {details.ser_description}
            </p>
            <p>
              <strong>
                {messages[language].Services.Price}
                :
                {' '}
              </strong>
              {details.ser_price}
            </p>
            <p>
              <strong>
                {messages[language].Services.Time}
                :
                {' '}
              </strong>
              {details.ser_time}
            </p>
          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
