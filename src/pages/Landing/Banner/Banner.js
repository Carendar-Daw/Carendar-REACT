import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { Header, Button } from './Banner.styled';
import DynamicTitle from './DynamicTitle/DynamicTitle';
import { I18nContext } from '@Application/lang/language';
import video from '@Assets/video/test.mp4';
import ffu from '@Assets/images/images/test.jpg';

const Banner = () => {
  const { messages, language } = useContext(I18nContext);
  const { loginWithRedirect } = useAuth0();

  return (
    <Header>
      <div>
        <div>
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
          <img src={ffu} alt="test" />
        </div>
        <div className="texto">
          <div>
            <DynamicTitle className="titulo" />
          </div>
          <Button id="signIn" onClick={() => loginWithRedirect()}>{messages[language].SignIn}</Button>
        </div>
      </div>
    </Header>

  );
};

export default Banner;
