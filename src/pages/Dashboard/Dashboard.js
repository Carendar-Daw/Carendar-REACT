import React from 'react';
import Calendar from '@Assets/images/images/calendar.svg';
import Barber from '@Assets/images/images/barber.svg';
import Clients from '@Assets/images/images/clients.svg';
import SavingMoney from '@Assets/images/images/savingMoney.svg';
import PersonalSettings from '@Assets/images/images/personalSettings.svg';
import Products from '@Assets/images/images/products.svg';
import { NavLink } from 'react-router-dom';
import {
  WrapperMenu, IteamMenu, Title, Card, ImgCard,
} from './Dashboard.styled';

const Dashboard = () => (
  <WrapperMenu className="dashboard">

    <IteamMenu>
      <NavLink to="/calendar">
        <Card>
          <ImgCard src={Calendar} />
          <Title>Calendar</Title>
        </Card>
      </NavLink>
    </IteamMenu>
    <IteamMenu>
      <NavLink to="/services">
        <Card>
          <ImgCard src={Barber} />
          <Title>Services</Title>
        </Card>
      </NavLink>
    </IteamMenu>
      <IteamMenu>
        <NavLink to="/clients">
        <Card>
          <ImgCard src={Clients} />
          <Title>Clients</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/cash">
        <Card>
          <ImgCard src={SavingMoney} />
          <Title>Cash</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/configuration">
        <Card>
          <ImgCard src={PersonalSettings} />
          <Title>Settings</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/products">
        <Card>
          <ImgCard src={Products} />
          <Title>Products</Title>
        </Card>
        </NavLink>
      </IteamMenu>
  </WrapperMenu>
);

export default Dashboard;
