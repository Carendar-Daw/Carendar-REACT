import React, { useContext } from 'react';
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '@Assets/images/logos/logo-carendar.png';
import { I18nContext } from '@Application/lang/language';
import {
  HeaderLeft, IteamMenuWrapper, Logo, LogoImg, WrapperMenu,
} from './Sidebar.styled';
import { color } from './config';

const Sidebar = ({ hamburger, setBackgorund, background }) => {
  const { messages, language } = useContext(I18nContext);
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
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Dashboard}>
            <NavLink to="/dashboard">
              <IteamMenuWrapper background={background.dashboard} onClick={() => setNavBackgroundColor('dashboard')}>
                <FontAwesomeIcon className="icon" icon="home" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Calendar}>
            <NavLink to="/calendar">
              <IteamMenuWrapper background={background.calendar} onClick={() => setNavBackgroundColor('calendar')}>
                <FontAwesomeIcon className="icon" icon="calendar-alt" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Cash}>
            <NavLink to="/cash">
              <IteamMenuWrapper background={background.cash} onClick={() => setNavBackgroundColor('cash')}>
                <FontAwesomeIcon className="icon" icon="cash-register" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Clients}>
            <NavLink to="/clients">
              <IteamMenuWrapper background={background.clients} onClick={() => setNavBackgroundColor('clients')}>
                <FontAwesomeIcon className="icon" icon="users" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>

          <Tooltip placement="right" color={color} title={"messages[language].Statistics.Title"}>
            <NavLink to="/statistics">
              <IteamMenuWrapper background={background.statistics} onClick={() => setNavBackgroundColor('statistics')}>
                <FontAwesomeIcon className="icon" icon="chart-pie" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>

          <Tooltip placement="right" color={color} title={messages[language].Services.Title}>
            <NavLink to="/services">
              <IteamMenuWrapper background={background.services} onClick={() => setNavBackgroundColor('services')}>
                <FontAwesomeIcon className="icon" icon="cut" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Products}>
            <NavLink to="/products">
              <IteamMenuWrapper background={background.products} onClick={() => setNavBackgroundColor('products')}>
                <FontAwesomeIcon className="icon" icon="box" />
              </IteamMenuWrapper>
            </NavLink>
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="right" color={color} title={messages[language].Dashboard.Settings}>
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
