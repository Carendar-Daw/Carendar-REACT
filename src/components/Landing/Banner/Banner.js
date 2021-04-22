import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { Header, Button } from './Banner.styled';
import DynamicTitle from './DynamicTitle/DynamicTitle';
import { I18nContext } from '../../../config/language';

const Banner = () => {
  const { messages, language } = useContext(I18nContext);
  const { loginWithRedirect } = useAuth0();

  return (
    <Header>
      <div>
        <div>

          <video autoPlay muted loop id="myVideo">
            <source src="../../../../public/assets/video/test.mp4" type="video/mp4" />
          </video>

          <img src="../../../../public/assets/images/images/test.jpg" alt="test" />
        </div>
        <div className="texto">
          <div>
            <DynamicTitle className="titulo" />
          </div>

          <Button onClick={() => loginWithRedirect()}>{messages[language].SignIn}</Button>

        </div>
      </div>
    </Header>

  );
};

export default Banner;
