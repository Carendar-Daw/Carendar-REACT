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
      {!details ? <ChooseAlert>{messages[language].Stock.ChooseProduct}</ChooseAlert>
        : (
          <WrapperInfo>
            <p>
              <strong>
                {messages[language].Stock.Name}
                :
                {' '}
              </strong>
              {details.sto_name}
            </p>
            <p>
              <strong>
                {messages[language].Stock.Amount}
                :
                {' '}
              </strong>
              {details.sto_amount}
            </p>
            <p>
              <strong>
                {messages[language].Stock.PVP}
                :
                {' '}
              </strong>
              {details.sto_pvp}
            </p>
            <p>
              <strong>
                {messages[language].Stock.Barcode}
                :
                {' '}
              </strong>
              {details.sto_barcode}
            </p>
          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
