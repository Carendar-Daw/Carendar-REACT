import React, { useReducer, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import axios from '@Commons/http';
import { getSaloonId } from '@Application/store/user/reducer';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperClients, ButtonAdd, FlexWrapper, WrapperSection, WrapperHistory, WrapperCardsHistory,
} from './Clients.styled';
import { ACTIONS, reducer, initialStateReducer } from './helpers/helpersClients';
import Drawer from './Drawer';
import Table from './Table';
import Details from './Details/Details';
import History from './History/History';

const defaultClientState = {
  cus_id: '',
  cus_name: '',
  cus_email: '',
  cus_photo: 'defaultAvatar.jpg',
  cus_color_preference: '',
  cus_born_date: '',
  cus_phone: '',
};

const Clients = () => {
  const [theClients, setClients] = useState(defaultClientState);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [getDrawer, setShowDrawer] = useState(false);
  const [history, setHistory] = useState(null);
  const [details, setDetails] = useState(null);
  const [clients, dispatch] = useReducer(reducer, initialStateReducer);
  const saloonId = useSelector(getSaloonId);

  useEffect(async () => {
    if (saloonId) {
      try {
        setLoadingSpinner(true);
        setLoadingSkeleton(true);
        const getClients = await axios.get('customer');
        dispatch({ type: ACTIONS.GET_CLIENTS, payload: getClients.data.customers });
      } catch (errors) {
        error('Error al cargar los Clientes');
      } finally {
        setLoadingSkeleton(false);
        setLoadingSpinner(false);
      }
    }
  }, [saloonId]);

  const deleteClients = async (id) => {
    try {
      setLoadingSpinner(true);
      await axios.delete(`customer/${id}`);
      dispatch({ type: ACTIONS.DELETE_CLIENTS, payload: id });
      success('Cliente eliminada correctamente');
    } catch (errors) {
      error('Error al eliminar un Cliente');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const isGoingToDelete = (id) => deleteClients(id);

  const buildClients = (field, { target: { value } }) => {
    setClients({ ...theClients, [field]: value, sal_id: saloonId });
  };

  const setUserDefault = () => setClients(defaultClientState);

  const createClients = async () => {
    try {
      setLoadingSpinner(true);
      const newClient = await axios.post('customer', theClients);
      dispatch({ type: ACTIONS.POST_CLIENTS, payload: newClient.data.customers });
      success('Cliente creado correctamente');
      setShowDrawer(false);
      setUserDefault();
    } catch (errors) {
      setShowDrawer('Error al crear cliente');
      error('Error al crear el cliente');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const updateClients = async () => {
    try {
      setLoadingSpinner(true);
      const updatedSClients = await axios.put(`customer/${theClients.cus_id}`, theClients);
      dispatch({ type: ACTIONS.UPDATE_CLIENTS, payload: { id: theClients.cus_id, updatedClients: updatedSClients.data.customer } });
      setShowDrawer(false);
      setUserDefault();
      success('Cliente Modificado correctamente');
    } catch (errors) {
      error('Error al Modificar Cliente');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const getDetailsCustomer = (id) => {
    const [clientToShow] = clients.filter((client) => client.cus_id === id);
    setDetails(clientToShow);
  };

  const getHistoryCustomer = async (id) => {
    try {
      setLoadingSpinner(true);
      const newHistory = await axios.get(`appointment/customer/${id}`);
      if (!newHistory.data.appointments.length) {
        error('El historal esta vacio');
      } else {
        setHistory(newHistory.data.appointments);
        success('Historial obtenido correctamente');
      }
    } catch (errors) {
      error('Error al obtener historial');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const showDrawerUpdate = (id) => {
    const clientToUpdate = clients.filter((client) => client.cus_id === id)[0];
    setClients({ ...clientToUpdate });
    setShowDrawer(true);
    setIsUpdating(true);
  };

  const showDrawer = () => {
    setIsUpdating(false);
    setShowDrawer(true);
  };
  const onClose = () => {
    setShowDrawer(false);
  };

  return (
    <FlexWrapper>
      <WrapperSection>
        <WrapperClients className='client-list'>
          {loadingSpinner && <Spinner />}
          <WrapperTitle>
            <FontAwesomeIcon className="icon" icon="calendar-alt" />
            <TitlePage>Clients</TitlePage>
          </WrapperTitle>
          <WrapperTable>
            <Table
              isGoingToDelete={isGoingToDelete}
              showDrawerUpdate={showDrawerUpdate}
              clients={clients}
              loadingSkeleton={loadingSkeleton}
              getDetailsCustomer={getDetailsCustomer}
              getHistoryCustomer={getHistoryCustomer}
            />
          </WrapperTable>
          <ButtonAdd onClick={showDrawer}>
            <PlusOutlined className="buttonAdd" />
          </ButtonAdd>
          <Drawer
            onClose={onClose}
            getDrawer={getDrawer}
            createClients={createClients}
            updateClients={updateClients}
            buildClients={buildClients}
            isUpdating={isUpdating}
            theClients={theClients}
            setClients={setClients}
          />
        </WrapperClients>
        <WrapperHistory className='client-history'>
          <TitlePage>History</TitlePage>
          {history ? <History history={history} /> : <p>Choose a person...</p>}
        </WrapperHistory>
      </WrapperSection>
      <Details details={details} />
    </FlexWrapper>
  );
};

export default Clients;
