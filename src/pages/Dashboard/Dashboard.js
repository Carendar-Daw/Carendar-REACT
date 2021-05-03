import React from 'react';
import Calendar from '@Assets/images/images/calendar.svg';
import Barber from '@Assets/images/images/barber.svg';
import Clients from '@Assets/images/images/clients.svg';
import SavingMoney from '@Assets/images/images/savingMoney.svg';
import PersonalSettings from '@Assets/images/images/calendar.svg';
import Products from '@Assets/images/images/calendar.svg';
import {
  WrapperMenu, IteamMenu, Title, Card, ImgCard,
} from './Dashboard.styled';

const Dashboard = () => (
  <WrapperMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={Calendar} />
        <Title>Calendar</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={Barber} />
        <Title>Services</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={Clients} />
        <Title>Clients</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={SavingMoney} />
        <Title>Cash</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={PersonalSettings} />
        <Title>Settings</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src={Products} />
        <Title>Products</Title>
      </Card>
    </IteamMenu>
  </WrapperMenu>
);

export default Dashboard;
