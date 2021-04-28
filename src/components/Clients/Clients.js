import React, { useReducer, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { success, error } from '@Commons/MessagesApp/Messages';
import axios from '@Commons/axios';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperClients, ButtonAdd, ButtonDelete, ButtonUpdate,
} from './Clients.styled';
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersClients';
import Drawer from './Drawer';
import Table from './Table';
import { getSaloonId } from '../../store';
import Spinner from '../../commons/Spinner/Spinner';

const Clients = () => {
  const [theClients, setClients] = useState({
    cus_id: '',
    cus_name: '',
    cus_email: '',
    cus_color_preference: '',
    cus_born_date: '',
    cus_phone: '',
  });
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [getDrawer, setShowDrawer] = useState(false);
  const [clients, dispatch] = useReducer(reducer, inistialStateReducer);
  const saloonId = useSelector(getSaloonId);

  useEffect(async () => {
    if (saloonId) {
      try {
        setLoadingSpinner(true);
        setLoadingSkeleton(true);
        const getClients = await axios.get('customer');
        dispatch({ type: ACTIONS.GET_CLIENTS, payload: getClients.data.customers });
      } catch (errors) {
        error('Error al cargar los Cliente');
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

  const isGoingToDelete = (id) => {
    deleteClients(id);
  };

  const buildClients = (field, { target: { value } }) => {
    setClients({ ...theClients, [field]: value, sal_id: saloonId });
  };

  const createClients = async () => {
    try {
      setLoadingSpinner(true);
      const newClient = await axios.post('customer', theClients);
      console.log(newClient);
      dispatch({ type: ACTIONS.POST_CLIENTS, payload: newClient.data.customers });
      success('Cliente creado correctamente');
      setShowDrawer(false);
    } catch (errors) {
      setShowDrawer(false);
      error('Error al crear Cliente');
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
      setClients({
        cus_id: '',
        cus_name: '',
        cus_email: '',
        cus_color_preference: '',
        cus_born_date: '',
        cus_phone: '',
      });
      success('Cliente Modificado correctamente');
    } catch (errors) {
      error('Error al Modificar Cliente');
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
    <WrapperClients>
      {loadingSpinner && <Spinner />}
      <WrapperTitle>
        <FontAwesomeIcon className="icon" icon="calendar-alt" />
        <TitlePage>Clients</TitlePage>
      </WrapperTitle>
      <WrapperTable>
        <Table isGoingToDelete={isGoingToDelete} showDrawerUpdate={showDrawerUpdate} clients={clients} loadingSkeleton={loadingSkeleton} />
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
      />
    </WrapperClients>
  );
};

export default Clients;
