import React, {
  useReducer, useState, useEffect, useContext,
} from 'react';
import { I18nContext } from '@Application/lang/language';
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
  const { messages, language } = useContext(I18nContext);
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
        error(messages[language].Customers.ErrorCustomers);
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
      success(messages[language].Customers.CustomerDeleted);
    } catch (errors) {
      error(messages[language].Customers.ErrorDelete);
    } finally {
      setLoadingSpinner(false);
    }
  };

  const isGoingToDelete = (id) => deleteClients(id);

  const buildClients = (field, { target: { value } }) => {
    setClients({ ...theClients, [field]: value, sal_id: saloonId });
  };

  const insertDate = (theDate) => {
    setClients({ ...theClients, cus_born_date: theDate, sal_id: saloonId });
  };

  const setUserDefault = () => setClients(defaultClientState);

  const createClients = async () => {
    try {
      setLoadingSpinner(true);
      const newClient = await axios.post('customer', theClients);
      dispatch({ type: ACTIONS.POST_CLIENTS, payload: newClient.data.customers });
      success(messages[language].Customers.CustomerCreated);
      setShowDrawer(false);
    } catch (errors) {
      setShowDrawer(messages[language].Customers.ErrorCreate);
      error(messages[language].Customers.ErrorCreate);
    } finally {
      setUserDefault();
      setLoadingSpinner(false);
    }
  };

  const updateClients = async () => {
    try {
      setLoadingSpinner(true);
      const updatedSClients = await axios.put(`customer/${theClients.cus_id}`, theClients);
      dispatch({ type: ACTIONS.UPDATE_CLIENTS, payload: { id: theClients.cus_id, updatedClients: updatedSClients.data.customer } });
      setShowDrawer(false);
      success(messages[language].Customers.CustomerEdited);
    } catch (errors) {
      error(messages[language].Customers.ErrorEdit);
    } finally {
      setUserDefault();
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
        error(messages[language].Customers.EmptyHistory);
      } else {
        setHistory(newHistory.data.appointments);
        success(messages[language].Customers.HistoryOk);
      }
    } catch (errors) {
      error(messages[language].Customers.ErrorHistory);
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
        <WrapperClients className="client-list">
          {loadingSpinner && <Spinner />}
          <WrapperTitle>
            <FontAwesomeIcon className="icon" icon="calendar-alt" />
            <TitlePage>{messages[language].Customers.Title}</TitlePage>
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
          <Drawer
            onClose={onClose}
            getDrawer={getDrawer}
            createClients={createClients}
            updateClients={updateClients}
            buildClients={buildClients}
            isUpdating={isUpdating}
            theClients={theClients}
            setClients={setClients}
            insertDate={insertDate}
          />
        </WrapperClients>
        <WrapperHistory className="client-history">
          <TitlePage>{messages[language].Customers.History}</TitlePage>
          {history ? <History history={history} /> : <p>{messages[language].Customers.ChooseCustomer}</p>}
        </WrapperHistory>
      </WrapperSection>
      <Details details={details} />
      <ButtonAdd onClick={showDrawer}>
        <PlusOutlined className="buttonAdd" />
      </ButtonAdd>
    </FlexWrapper>
  );
};

export default Clients;
