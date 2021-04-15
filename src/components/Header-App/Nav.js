import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Tooltip } from 'antd';

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
    UserName
} from './Nav.styled';

const text = {
    dashboard: 'Dashboard',
    services: 'Services',
}

const color = '#8265A7';

const initialState = {
    dashboard: false,
    services: false,
}

const Nav = () => {

    const [background, setBackgorund] = useState(initialState);

    const setNavBackgroundColor = button => {
        const keys = Object.keys(background);
        const buildingState = {};
        keys.forEach(iteam => iteam === button ? buildingState[iteam] = true : buildingState[iteam] = false);
        setBackgorund(buildingState);
    }

    return (
        <Wrapper>
            <GlobalStyle></GlobalStyle>
            <HeaderTop>
                <WrapperNavTop>
                    <Hamburger></Hamburger>
                    <UserData>
                        <UserPicture></UserPicture>
                        <UserName>Miquel Lopez</UserName>
                    </UserData>
                </WrapperNavTop>
            </HeaderTop>
            <HeaderLeft>
                <Logo>
                    <LogoImg src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </Logo>
                <Tooltip placement="right" color={color} title={text.dashboard} >
                    <NavLink to='/dashboard'>
                        <IteamMenuWrapper background={background.dashboard} onClick={() => setNavBackgroundColor('dashboard')}>
                            <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                        </IteamMenuWrapper>
                    </NavLink>
                </Tooltip>
                <Tooltip placement="right" color={color} title={text.services} >
                    <NavLink to='/services'>
                        <IteamMenuWrapper background={background.services} onClick={() => setNavBackgroundColor('services')}>
                            <FontAwesomeIcon className={'icon'} icon={'calendar-alt'} />
                        </IteamMenuWrapper>
                    </NavLink>
                </Tooltip>
            </HeaderLeft>
        </Wrapper>
    )
}

export default Nav;
