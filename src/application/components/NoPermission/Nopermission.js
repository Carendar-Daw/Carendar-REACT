import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper, Card } from '@Application/components/NoPermission/Nopermission.styled';
import image from '@Assets/images/logos/logo-provisional.png';
import { Button } from '@Pages/Landing/Nav/Nav.styled';

const Nopermission = () => {
  const { messages, language } = useContext(I18nContext);
  const { logout } = useAuth0();
  return (
    <>
      <Wrapper>
        <Card>
          <img src={image} alt="" />
          <p>{messages[language].NoPermission.Explanation}</p>
          <p>{messages[language].NoPermission.Help}</p>
          <Button onClick={() => logout()}><span>{messages[language].NoPermission.Button}</span></Button>
        </Card>
      </Wrapper>
    </>

  );
};

export default Nopermission;
