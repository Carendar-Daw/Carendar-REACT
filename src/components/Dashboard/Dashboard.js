import React from 'react';
import {
  WrapperMenu, IteamMenu, Title, Card, ImgCard,
} from './Dashboard.styled';

const Dashboard = () => (
  <WrapperMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/calendar.svg" />
        <Title>Calendar</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/barber.svg" />
        <Title>Services</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/clients.svg" />
        <Title>Clients</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/savingMoney.svg" />
        <Title>Cash</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/personalSettings.svg" />
        <Title>Settings</Title>
      </Card>
    </IteamMenu>
    <IteamMenu>
      <Card>
        <ImgCard src="../../../public/assets/images/images/products.svg" />
        <Title>Products</Title>
      </Card>
    </IteamMenu>
  </WrapperMenu>
);

export default Dashboard;
