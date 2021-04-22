import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import {
  Wrapper,
  Button,
  Logo,
  StyledUl,
  DropDownLi,
  DropDownContent,
  Dropbtn,
  SubA,
  WrapperContentMenu,
  Arrow,
  Flag,
} from './Nav.styled';
import { I18nContext } from '../../../config/language';
import Espana from '../../../../public/assets/images/Language/España.jpg';

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  const { messages, language, setLanguage } = useContext(I18nContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  let isLenguageSelected = '';

    if (language === 'es') {
        isLenguageSelected = (<Flag src='../../../../public/assets/images/Language/España.jpg' />);
    } else if (language === 'ca') {
        isLenguageSelected = (<Flag src='../../../../public/assets/images/Language/Catalunya.png' />);
    } else {
        isLenguageSelected = (<Flag src='../../../../public/assets/images/Language/Eangland.png' />);
    }

  return (
    <Wrapper>
      <Logo src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
      <WrapperContentMenu>
        <StyledUl>
          <DropDownLi>
            <Dropbtn>
              {isLenguageSelected}
            </Dropbtn>
            <DropDownContent>
              {' '}
              <SubA onClick={() => changeLanguage('es')}>
                <Flag src="../../../../public/assets/images/Language/España.jpg" />
                {' '}
                Español
              </SubA>
              <SubA onClick={() => changeLanguage('ca')}>
                <Flag src="../../../../public/assets/images/Language/Catalunya.png" />
                {' '}
                Catalan
              </SubA>
              <SubA onClick={() => changeLanguage('en')}>
                <Flag src="../../../../public/assets/images/Language/Eangland.png" />
                {' '}
                English
              </SubA>
            </DropDownContent>
          </DropDownLi>
          <Arrow />
        </StyledUl>
        <Button onClick={() => loginWithRedirect()}>
          <span>{messages[language].LogIn}</span>
        </Button>
        <Button onClick={() => loginWithRedirect()}>
          <span>{messages[language].SignIn}</span>
        </Button>

      </WrapperContentMenu>
    </Wrapper>
  );
};

export default Nav;
