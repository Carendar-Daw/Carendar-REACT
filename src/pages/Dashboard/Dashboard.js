import React , { useContext }from 'react';
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
import { I18nContext } from '@Application/lang/language';


const Dashboard = () => {
  const { messages, language } = useContext(I18nContext);
  return(
  <WrapperMenu className="dashboard">

    <IteamMenu>
      <NavLink to="/calendar">
        <Card>
          <ImgCard src={Calendar} />
          <Title>{messages[language].Dashboard.Calendar}</Title>
        </Card>
      </NavLink>
    </IteamMenu>
    <IteamMenu>
      <NavLink to="/services">
        <Card>
          <ImgCard src={Barber} />
          <Title>{messages[language].Dashboard.Services}</Title>
        </Card>
      </NavLink>
    </IteamMenu>
      <IteamMenu>
        <NavLink to="/clients">
        <Card>
          <ImgCard src={Clients} />
          <Title>{messages[language].Dashboard.Clients}</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/cash">
        <Card>
          <ImgCard src={SavingMoney} />
          <Title>{messages[language].Dashboard.Cash}</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/configuration">
        <Card>
          <ImgCard src={PersonalSettings} />
          <Title>{messages[language].Dashboard.Settings}</Title>
        </Card>
        </NavLink>
      </IteamMenu>
      <IteamMenu>
        <NavLink to="/products">
        <Card>
          <ImgCard src={Products} />
          <Title>{messages[language].Dashboard.Products}</Title>
        </Card>
        </NavLink>
      </IteamMenu>
  </WrapperMenu>

);
};
export default Dashboard;
