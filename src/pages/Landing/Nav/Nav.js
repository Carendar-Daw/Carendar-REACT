import React, { useContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { I18nContext } from '@Application/lang/language';
import esp from '@Assets/images/Language/España.jpg';
import cat from '@Assets/images/Language/Catalunya.png';
import uk from '@Assets/images/Language/Uk.png';
import logo from '@Assets/images/logos/logo-carendar.png';
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

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  const { messages, language, setLanguage } = useContext(I18nContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  const [hamburger, setHamburger] = useState(false);

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
