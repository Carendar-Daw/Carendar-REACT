import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Tooltip, Popover, Button } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";
import { Content, LayoutStyled } from '../../components/Styles/Style/Style.styled';
import SpinnerPage from '../../components/Spinner/SpinnerPage';

import {
    HeaderTop,
    HeaderLeft,
    Logo,
    LogoImg,
    Wrapper,
    GlobalStyle,
    IteamMenuWrapper,
    WrapperNavTop,
    Hamburger,
    UserData,
    UserPicture,
    UserName,
    Logout,
    Arrow,
    ContentPopOver,
    MainContent
} from './Nav.styled';

const textMenu = {
    dashboard: 'Dashboard',
    services: 'Services',
}

const color = '#8265A7';

const initialState = {
    dashboard: true,
    services: false,
}

const Nav = ({ children }) => {

    const { user, isAuthenticated, logout } = useAuth0();

    const [background, setBackgorund] = useState(initialState);

    const setNavBackgroundColor = button => {
        const keys = Object.keys(background);
        const buildingState = {};
        keys.forEach(iteam => iteam === button ? buildingState[iteam] = true : buildingState[iteam] = false);
        setBackgorund(buildingState);
    }

    const contentSettigns = (
        <div>
            <p>Profile</p>
            <Logout onClick={() => logout({ returnTo: window.location.origin })}>Logout</Logout>
        </div>
    );

    return (
        isAuthenticated &&

        <Wrapper>
            <GlobalStyle />
            <HeaderLeft>
                <Logo>
                    <LogoImg src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </Logo>
                <Tooltip placement="right" color={color} title={textMenu.dashboard} >
                    <NavLink to='/dashboard'>
                        <IteamMenuWrapper background={background.dashboard} onClick={() => setNavBackgroundColor('dashboard')}>
                            <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                        </IteamMenuWrapper>
                    </NavLink>
                </Tooltip>
                <Tooltip placement="right" color={color} title={textMenu.services} >
                    <NavLink to='/services'>
                        <IteamMenuWrapper background={background.services} onClick={() => setNavBackgroundColor('services')}>
                            <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                        </IteamMenuWrapper>
                    </NavLink>
                </Tooltip>
            </HeaderLeft>
            <MainContent>
                <HeaderTop>
                    <WrapperNavTop>
                        <Hamburger></Hamburger>
                        <UserData>
                            <Popover content={contentSettigns} title="Settings" trigger="click">
                                <ContentPopOver>
                                    <UserPicture src={user.picture} />
                                    <Arrow />
                                </ContentPopOver>
                            </Popover>
                            <UserName>{user.nickname}</UserName>
                        </UserData>
                    </WrapperNavTop>
                </HeaderTop>
                <Content>
                    {children}
                </Content>
            </MainContent>

        </Wrapper>
    )
}

export default withAuthenticationRequired(Nav, {
    onRedirecting: () => <SpinnerPage />,
});
