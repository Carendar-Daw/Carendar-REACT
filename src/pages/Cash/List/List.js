import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import axios from '@Commons/http';
import {
  WrapperList, WrapperActualMoney, WrapperStateCash, WrapperMoneyCash,
} from '@Pages/Cash/List/List.styled';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import Table from '../Table/Table';

const List = ({ filteredAppointments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [actualStateCash, setActualStateCash] = useState(false);

  useEffect(async () => {
    try {
      setLoadingSpinner(true);
      const isCashOpen = await axios.get('cashregister');
      if (isCashOpen.data.cashRegister) {
        setActualStateCash(isCashOpen.data.cashRegister);
      } else {
        isOpen(false);
      }
      success('Datos obtenidos correctamente');
    } catch (errors) {
      error('Error al obtener Datos');
    } finally {
      setLoadingSpinner(false);
    }
  }, []);

  const openedCash = async (disabled) => {
    try {
      setLoadingSpinner(true);
      const cashOpened = await axios.post('cashregister');
      console.log(cashOpened);
      success('Datos obtenidos correctamente');
      setIsOpen(disabled);
    } catch (errors) {
      error('Error al obtener Datos');
    } finally {
      setLoadingSpinner(false);
    }

  };

  const closeCash = async () => {
    try {
      setLoadingSpinner(true);
      const isCashOpen = await axios.post('cashregister');
      console.log(isCashOpen.data);
      success('Caja cerrada correctamente');
    } catch (errors) {
      error('Error al cerrar caja');
    } finally {
      setLoadingSpinner(false);
    }
  };

  return (
    <>
      <WrapperList>
        {loadingSpinner && <Spinner />}
        <Table appointments={filteredAppointments} setLoadingSpinner={setLoadingSpinner} />
        <WrapperActualMoney>
          <WrapperMoneyCash>
            <strong>Open Cash</strong>
            {isOpen ? (
              <Confirm text="Do you want to close the cash with money?" confirmDelete={closeCash}>
                <Switch size="big" checked={isOpen} />
              </Confirm>
            ) : <Switch size="big" checked={isOpen} onChange={openedCash} />}

          </WrapperMoneyCash>
          <WrapperStateCash>
            <strong>Total:</strong>
          </WrapperStateCash>
        </WrapperActualMoney>

      </WrapperList>
    </>
  );
};

export default List;
