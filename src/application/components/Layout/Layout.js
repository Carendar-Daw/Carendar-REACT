import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Content } from '@Commons/components/domain/Styles/Style.styled';
import { initialState } from '@Application/components/Layout/components/sidebar/config';
import Tour from '@Commons/components/domain/tour';
import axios from '@Commons/http';
import { error } from '@Commons/components/presentational/MessagesApp/Messages';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { Wrapper, GlobalStyle, MainContent } from './Layout.styled';

const Layout = ({ children }) => {
  const { logout } = useAuth0();
  const [background, setBackgorund] = useState(initialState);
  const [hamburger, setHamburger] = useState(true);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(async () => {
    try {
      const isTour = await axios.get('tours');
      isTour.data.tours.tour_state === 0
        ? setIsTourOpen(true)
        : setIsTourOpen(false);
    } catch (errors) {
      error('Error al realizar el tour');
    }
  }, []);

  const hamburgerClick = () => {
    setHamburger(!hamburger);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Tour isTourOpen={isTourOpen} setIsTourOpen={setIsTourOpen}/>
      <Sidebar hamburger={hamburger} setBackgorund={setBackgorund} background={background} />
      <MainContent id="main">
        <Topbar hamburgerClick={hamburgerClick} logout={logout} hamburger={hamburger} setIsTourOpen={setIsTourOpen}/>
        <Content>
          {children}
        </Content>
      </MainContent>
    </Wrapper>
  );
};

export default Layout;
