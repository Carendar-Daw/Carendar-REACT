import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import ffu from '@Assets/images/images/test.jpg';
import DynamicTitle from './DynamicTitle/DynamicTitle';
import { Header, Button, WrapperContent } from './Banner.styled';

const Banner = () => {
  const { messages, language } = useContext(I18nContext);
  const { loginWithRedirect } = useAuth0();

  return (
    <Header>
      <WrapperContent>
        <img src={ffu} alt="test" />
        <div className="texto">
          <div>
            <DynamicTitle className="titulo" />
          </div>
          <Button id="signIn" onClick={() => loginWithRedirect()}>{messages[language].SignIn}</Button>
        </div>
      </WrapperContent>

    </Header>

  );
};

export default Banner;
