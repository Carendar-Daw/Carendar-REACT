/* eslint linebreak-style: ["error", "windows"] */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useState } from 'react';
import {
  Wrapper,
  Ham,
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
import esp from '../../../../public/assets/images/Language/España.jpg';
import cat from '../../../../public/assets/images/Language/Catalunya.png';
import uk from '../../../../public/assets/images/Language/uk.png';
import logo from '../../../../public/assets/images/logos/logo-carendar.png';

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  const { messages, language, setLanguage } = useContext(I18nContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  const [hamburger, setHamburger] = useState(true);

  const hamburgerClick = () => {
    setHamburger(!hamburger);
    console.log(!hamburger);
  };

  let isLenguageSelected = '';

  if (language === 'es') {
    isLenguageSelected = (<Flag src={esp} />);
  } else if (language === 'ca') {
    isLenguageSelected = (<Flag src={cat} />);
  } else {
    isLenguageSelected = (<Flag src={uk} />);
  }

  return (
    <Wrapper> 
      <Logo hamburger={hamburger} onClick={() => hamburgerClick(hamburger)} src={logo} alt="" />
      <WrapperContentMenu hamburger={hamburger}>
      <Ham><span>></span></Ham>
        <StyledUl>
          <DropDownLi>
            <Dropbtn>
              {isLenguageSelected}
            </Dropbtn>
            <DropDownContent>
              {' '}
              <SubA onClick={() => changeLanguage('es')}>
                <Flag src={esp} />
                {' '}
                Español
              </SubA>
              <SubA onClick={() => changeLanguage('ca')}>
                <Flag src={cat} />
                {' '}
                Català
              </SubA>
              <SubA onClick={() => changeLanguage('en')}>
                <Flag src={uk} />
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
