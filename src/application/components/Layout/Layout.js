import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Content } from '@Commons/components/domain/Styles/Style.styled';
import { initialState } from '@Application/components/Layout/components/sidebar/config';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { Wrapper, GlobalStyle, MainContent } from './Layout.styled';

const Layout = ({ children }) => {
  const { logout } = useAuth0();
  const [background, setBackgorund] = useState(initialState);
  const [hamburger, setHamburger] = useState(true);

  const hamburgerClick = () => {
    setHamburger(!hamburger);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar hamburger={hamburger} setBackgorund={setBackgorund} background={background} />
      <MainContent id="main">
        <Topbar hamburgerClick={hamburgerClick} logout={logout} hamburger={hamburger} />
        <Content>
          {children}
        </Content>
      </MainContent>
    </Wrapper>
  );
};

export default Layout;
