import React, { useState, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import Tour from 'reactour';
import { useHistory } from 'react-router-dom';
import axios from '@Commons/http';
import { error } from '@Commons/components/presentational/MessagesApp/Messages';

const initialStateRoutes = {
  dashboard: false,
  clients: false,
  services: false,
  products: false,
  calendar: false,
  cash: false,
  statistics: false,
  configuration: false,
};

const TourApp = ({ isTourOpen, setIsTourOpen }) => {
  const { messages, language } = useContext(I18nContext);
  const history = useHistory();
  const [navChanged, setNavChanged] = useState(initialStateRoutes);
  const setTourOff = async () => {
    try {
      await axios.put('tours', { tour_state: 1 });
      setIsTourOpen(false);
    } catch (errors) {
      error('Error al acabar el tour');
    }
  };

  const steps = [
    {
      selector: '.dashboard',
      content: messages[language].Tour.Dashboard,
      action: () => {
        if (!navChanged.dashboard) {
          history.push('/dashboard');
          setNavChanged({ ...initialStateRoutes, dashboard: true });
        }
      },
    },
    {
      selector: '.side-bar-menu',
      content: messages[language].Tour.Sidebar,
    },
    {
      selector: '.logout',
      content: messages[language].Tour.Profile,
    },
    {
      selector: '.calendar',
      content: messages[language].Tour.Calendar,
      action: () => {
        if (!navChanged.calendar) {
          history.push('/calendar');
          setNavChanged({ ...initialStateRoutes, calendar: true });
        }
      },
    },
    {
      selector: '.calendar-list',
      content: messages[language].Tour.CalendarList,
      action: () => {
        if (!navChanged.calendar) {
          history.push('/calendar');
          setNavChanged({ ...initialStateRoutes, calendar: true });
        }
      },
    },
    {
      selector: '.client-list',
      content: messages[language].Tour.Customers,
      action: () => {
        if (!navChanged.clients) {
          history.push('/clients');
          setNavChanged({ ...initialStateRoutes, clients: true });
        }
      },
    },
    {
      selector: '.client-history',
      content: messages[language].Tour.CustomersHistory,
    },
    {
      selector: '.client-details',
      content: messages[language].Tour.CustomerInfo,
    },
    {
      selector: '.client-add',
      content: messages[language].Tour.CustomerAdd,
      action: () => {
        if (!navChanged.clients) {
          history.push('/clients');
          setNavChanged({ ...initialStateRoutes, clients: true });
        }
      },
    },
    
  {
    selector: '.cash',
    content: messages[language].Tour.Cash,
    action: () => {
      if (!navChanged.cash) {
        history.push('/cash');
        setNavChanged({ ...initialStateRoutes, cash: true });
      }
    },
  },
  {
    selector: '.statistics',
    content: messages[language].Tour.Statistics,
    action: () => {
      if (!navChanged.statistics) {
        history.push('/configuration');
        setNavChanged({ ...initialStateRoutes, statistics: true });
      }
    },
  },
  {
    selector: '.configuration',
    content: messages[language].Tour.Configuration,
    action: () => {
      if (!navChanged.configuration) {
        history.push('/configuration');
        setNavChanged({ ...initialStateRoutes, configuration: true });
      }
    },
  },
  ];

return (
  <>
    /*{ /* other stuff */}*/
    <Tour
      steps={steps}
      isOpen={isTourOpen}
      //nextStep
      onRequestClose={setTourOff}
      closeWithMask={false}
      lastStepNextButton={<button>Done! Let's start playing</button>}
      accentColor="blue"
      startAt={0}
    />
  </>
);
};

export default TourApp;
