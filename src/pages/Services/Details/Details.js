import React from 'react';
import {
  WrapperDetails, WrapperInfo, TitlePage, ChooseAlert,
} from './Details.styled';

const Details = ({ details }) => {

  return (

    <WrapperDetails>
      <TitlePage>Information About</TitlePage>
      {!details ? <ChooseAlert>Choose some Service...</ChooseAlert>
        : (
          <WrapperInfo>
            <p>
              <strong>Description:</strong>
              {details.ser_description}
            </p>
            <p>
              <strong>Price:</strong>
              {details.ser_price}
            </p>
            <p>
              <strong>Time:</strong>
              {details.ser_time}
            </p>
          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
