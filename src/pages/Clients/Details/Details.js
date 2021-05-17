import React from 'react';
import {
  WrapperDetails, WrapperInfo, TitlePage, ChooseAlert,
} from './Details.styled';

const Details = ({ details }) => {
  const URLIMG = process.env.API_KEY;

  return (

    <WrapperDetails className='client-details'>
      <TitlePage>Information About</TitlePage>
      {!details ? <ChooseAlert>Choose some Person...</ChooseAlert>
        : (
          <WrapperInfo>
            <img src={`${URLIMG}${details.cus_photo}`} />
            <p>
              <strong>Name:</strong>
              {details.cus_name}
            </p>
            <p>
              <strong>Email:</strong>
              {details.cus_email}
            </p>
            <p>
              <strong>Phone:</strong>
              {details.cus_phone}
            </p>
            <p>
              <strong>Color:</strong>
              {details.cus_color_preference}
            </p>
            <p>
              <strong>Born:</strong>
              {details.cus_born_date}
            </p>

          </WrapperInfo>
        )}
    </WrapperDetails>
  );
};

export default Details;
