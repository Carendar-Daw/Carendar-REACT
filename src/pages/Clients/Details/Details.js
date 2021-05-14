import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  WrapperDetails, WrapperInfo, TitlePage, ChooseAlert,
} from './Details.styled';

const Details = ({ details }) => {
  const URLIMG = 'http://localhost/carendar/laravel/Carendar-LARAVEL/storage/app/public/images/avatar/';
  const { messages, language } = useContext(I18nContext);
  return (

    <WrapperDetails className="client-details">
      <TitlePage>{messages[language].Stock.InfoAbout}</TitlePage>
      {!details ? <ChooseAlert>{messages[language].Customers.ChooseCustomer}</ChooseAlert>
        : (
          <WrapperInfo>
            <img src={`${URLIMG}${details.cus_photo}`} />
            <p>
              <strong>
                {messages[language].Stock.Name}
                :
              </strong>
              {details.cus_name}
            </p>
            <p>
              <strong>Email:</strong>
              {details.cus_email}
            </p>
            <p>
              <strong>
                {messages[language].Customers.Phone}
                :
              </strong>
              {details.cus_phone}
            </p>
            <p>
              <strong>Color:</strong>
              {details.cus_color_preference}
            </p>
            <p>
              <strong>
                {messages[language].Customers.Born}
                :
              </strong>
              {details.cus_born_date}
            </p>

          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
