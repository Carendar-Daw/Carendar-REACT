import React, { useState } from 'react';
import Tour from 'reactour';
import { useHistory } from 'react-router-dom';
import axios from '@Commons/http';
import { error } from '@Commons/components/presentational/MessagesApp/Messages';

const initialStateRoutes = {
  dashboard: false,
  clients: false,
  services: false,
};

const TourApp = ({ isTourOpen, setIsTourOpen }) => {
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
      content: 'Here you can find your navigation, enjoy it!',
      action: () => {
        if (!navChanged.dashboard) {
          history.push('/dashboard');
          setNavChanged({ ...navChanged, dashboard: true });
        }
      },
    },
    {
      selector: '.side-bar-menu',
      content: 'enjoy it!',
    },
    {
      selector: '.logout',
      content: 'enjoy it!',
    },
    {
      selector: '.calendar',
      content: 'enjoy it!',
    },
    {
      selector: '.client-list',
      content: 'enjoy it!',
      action: () => {
        if (!navChanged.clients) {
          history.push('/clients');
          setNavChanged({ ...navChanged, clients: true });
        }
      },
    },
    {
      selector: '.client-history',
      content: 'enjoy it!',
    },
    {
      selector: '.client-details',
      content: 'enjoy it!',
    },
    {
      selector: '.services',
      content: 'Here you can find your navigation, enjoy it!',
      action: () => {
        if (!navChanged.services) {
          history.push('/services');
          setNavChanged({ ...navChanged, services: true });
        }
      },
    },
  ];

  return (
    <>
      { /* other stuff */}
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        nextStep
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
