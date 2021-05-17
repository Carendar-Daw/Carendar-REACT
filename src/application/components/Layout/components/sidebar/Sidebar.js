import React from 'react';
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '@Assets/images/logos/logo-carendar.png';
import {
  HeaderLeft, IteamMenuWrapper, Logo, LogoImg, WrapperMenu
} from './Sidebar.styled';
import { textMenu, color } from './config';

const Sidebar = ({ hamburger, setBackgorund, background }) => {
  const setNavBackgroundColor = (button) => {
    const keys = Object.keys(background);
    const buildingState = {};
    keys.forEach((item) => (item === button ? buildingState[item] = true : buildingState[item] = false));
    setBackgorund(buildingState);
  };

  return (
    <HeaderLeft id="left-nav" hamburger={hamburger} className="side-bar-menu">
      <Logo>
        <LogoImg src={logo} alt="" />
      </Logo>
      <WrapperMenu>
        <div>
          <Tooltip placement="right" color={color} title={textMenu.dashboard}>
            <NavLink to="/dashboard">
              <IteamMenuWrapper background={background.dashboard} onClick={() => setNavBackgroundColor('dashboard')}>
                <FontAwesomeIcon className="icon" icon="home" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.calendar}>
            <NavLink to="/calendar">
              <IteamMenuWrapper background={background.calendar} onClick={() => setNavBackgroundColor('calendar')}>
                <FontAwesomeIcon className="icon" icon="calendar-alt" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.cash}>
            <NavLink to="/cash">
              <IteamMenuWrapper background={background.cash} onClick={() => setNavBackgroundColor('cash')}>
                <FontAwesomeIcon className="icon" icon="cash-register" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.clients}>
            <NavLink to="/clients">
              <IteamMenuWrapper background={background.clients} onClick={() => setNavBackgroundColor('clients')}>
                <FontAwesomeIcon className="icon" icon="users" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.statistics}>
            <NavLink to="/statistics">
              <IteamMenuWrapper background={background.statistics} onClick={() => setNavBackgroundColor('statistics')}>
                <FontAwesomeIcon className="icon" icon="chart-pie" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.services}>
            <NavLink to="/services">
              <IteamMenuWrapper background={background.services} onClick={() => setNavBackgroundColor('services')}>
                <FontAwesomeIcon className="icon" icon="cut" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={textMenu.products}>
            <NavLink to="/products">
              <IteamMenuWrapper background={background.products} onClick={() => setNavBackgroundColor('products')}>
                <FontAwesomeIcon className="icon" icon="box" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="right" color={color} title={textMenu.configuration}>
            <NavLink to="/configuration">
              <IteamMenuWrapper background={background.configuration} onClick={() => setNavBackgroundColor('configuration')}>
                <FontAwesomeIcon className="icon" icon="cog" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
        </div>
      </WrapperMenu>

    </HeaderLeft>
  );
};

export default Sidebar;
