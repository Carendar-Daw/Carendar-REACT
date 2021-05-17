import React, { useReducer, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import axios from '@Commons/http';
import { getSaloonId } from '@Application/store/user/reducer';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperServices, ButtonAdd, FlexWrapper,
} from './Services.styled';
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersServices';
import Drawer from './Drawer';
import Table from './Table';
import Details from './Details/Details';

const inistialServices = {
  ser_id: '',
  ser_price: '',
  ser_description: '',
  ser_time: '',
};

const Services = () => {
  const [theService, setService] = useState(inistialServices);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [getDrawer, setShowDrawer] = useState(false);
  const [details, setDetails] = useState(null);
  const [services, dispatch] = useReducer(reducer, inistialStateReducer);
  const saloonId = useSelector(getSaloonId);

  useEffect(async () => {
    if (saloonId) {
      try {
        setLoadingSpinner(true);
        setLoadingSkeleton(true);
        const getServices = await axios.get('services');
        dispatch({ type: ACTIONS.GET_SERVICES, payload: getServices.data.services });
      } catch (errors) {
        error('Error al cargar los servicios');
      } finally {
        setLoadingSkeleton(false);
        setLoadingSpinner(false);
      }
    }
  }, [saloonId]);

  const deleteService = async (id) => {
    try {
      setLoadingSpinner(true);
      await axios.delete(`services/${id}`);
      dispatch({ type: ACTIONS.DELETE_SERVICES, payload: id });
      success('Servicio eliminada correctamente');
    } catch (errors) {
      error('Error al eliminar un servicio');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const isGoingToDelete = (id) => {
    deleteService(id);
  };

  const buildService = (field, { target: { value } }) => {
    setService({ ...theService, [field]: value, sal_id: saloonId });
  };

  const createService = async () => {
    try {
      setLoadingSpinner(true);
      const newService = await axios.post('services', theService);
      dispatch({ type: ACTIONS.POST_SERVICES, payload: newService.data.services });
      success('Servicio creado correctamente');
      setShowDrawer(false);
    } catch (errors) {
      setShowDrawer(false);
      error('Error al crear servicio');
    } finally {
      setService(inistialServices);
      setLoadingSpinner(false);
    }
  };

  const updateService = async () => {
    try {
      setLoadingSpinner(true);
      const updatedService = await axios.put(`services/${theService.ser_id}`, theService);
      dispatch({ type: ACTIONS.UPDATE_SERVICES, payload: { id: theService.ser_id, updatedService: updatedService.data.services } });
      setShowDrawer(false);
      success('Servicio Modificado correctamente');
    } catch (errors) {
      error('Error al Modificar servicio');
    } finally {
      setService(inistialServices);
      setLoadingSpinner(false);
    }
  };

  const getDetailsService = (id) => {
    const [serviceToShow] = services.filter((service) => service.ser_id === id);
    setDetails(serviceToShow);
  };

  const showDrawerUpdate = (id) => {
    const serviceToUpdate = services.filter((service) => service.ser_id === id)[0];
    setService({ ...serviceToUpdate });
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
    <FlexWrapper className='services'>
      <WrapperServices>
        {loadingSpinner && <Spinner />}
        <WrapperTitle>
          <FontAwesomeIcon className="icon" icon="calendar-alt" />
          <TitlePage>Servicios</TitlePage>
        </WrapperTitle>
        <WrapperTable>
          <Table
            showDrawerUpdate={showDrawerUpdate}
            isGoingToDelete={isGoingToDelete}
            services={services}
            loadingSkeleton={loadingSkeleton}
            getDetailsService={getDetailsService}
          />
        </WrapperTable>
        <Drawer
          onClose={onClose}
          getDrawer={getDrawer}
          createService={createService}
          updateService={updateService}
          buildService={buildService}
          isUpdating={isUpdating}
          theService={theService}
        />
      </WrapperServices>
      <Details details={details}/>
      <ButtonAdd onClick={showDrawer}>
        <PlusOutlined className="buttonAdd" />
      </ButtonAdd>
    </FlexWrapper>
  );
};

export default Services;
