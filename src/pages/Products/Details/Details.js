import React from 'react';
import {
  WrapperDetails, WrapperInfo, TitlePage, ChooseAlert,
} from './Details.styled';

const Details = ({ details }) => {

  return (

    <WrapperDetails>
      <TitlePage>Information About</TitlePage>
      {!details ? <ChooseAlert>Choose some Product...</ChooseAlert>
        : (
          <WrapperInfo>
            <p>
              <strong>Name:</strong>
              {details.sto_name}
            </p>
            <p>
              <strong>Amount:</strong>
              {details.sto_amount}
            </p>
            <p>
              <strong>PVP:</strong>
              {details.sto_pvp}
            </p>
            <p>
              <strong>Barcode:</strong>
              {details.sto_barcode}
            </p>
          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
