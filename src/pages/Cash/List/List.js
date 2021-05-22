import React, { useState, useEffect } from 'react';
import { InputNumber, Switch } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import axios from '@Commons/http';
import {
  WrapperList, WrapperActualMoney, WrapperStateCash, WrapperMoneyCash,
} from '@Pages/Cash/List/List.styled';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import { ButtonAccept, ButtonRefuse, WrapperButtonsModal } from '@Pages/Cash/Table/Table.styled';
import Modal from 'antd/es/modal/Modal';
import Table from '../Table/Table';

const List = ({ filteredAppointments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [actualStateCash, setActualStateCash] = useState(false);
  const [visible, setVisible] = useState(false);
  const [startMoney, setStartMoney] = useState(false);

  useEffect(async () => {
    try {
      setLoadingSpinner(true);
      const isCashOpen = await axios.get('cashregister');
      if (isCashOpen.data.cashRegister) {
        setActualStateCash(isCashOpen.data.cashRegister);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } catch (errors) {
      error('Error al obtener Datos');
    } finally {
      setLoadingSpinner(false);
    }
  }, []);

  const handleSetStartMoney = (number) => {
    setStartMoney(number);
  };

  const modalOpenCash = async () => {
    const isCash = await axios.get('cashregisterClosed');
    if (isCash.data.cashRegister) {
      const cash = {
        cas_state: 'open',
      };
      await axios.put('cashregister', cash);
      setActualStateCash(isCash.data.cashRegister);
      setIsOpen(true);
      success('La caja de hoy se a abierto nuevamente');
    } else {
      setVisible(true);
    }
  };

  const openedCash = async (disabled) => {
    try {
      setLoadingSpinner(true);
      const cash = {
        cas_open: startMoney,
        cas_current: startMoney,
        cas_state: 'open',
      };
      const cashOpened = await axios.post('cashregister', cash);
      setActualStateCash(cashOpened.data.cashRegister);
      success('Datos obtenidos correctamente');
      setVisible(false);
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
      const cash = {
        cas_state: 'close',
      };
      await axios.put('cashregister', cash);
      success('Caja cerrada correctamente');
    } catch (errors) {
      error('Error al cerrar caja');
    } finally {
      setLoadingSpinner(false);
      setIsOpen(false);
      setActualStateCash(null);
    }
  };

  return (
    <>
      <WrapperList>
        {loadingSpinner && <Spinner />}
        <Modal
          title="How match money do you watn to start? mother fucker"
          visible={visible}
          destroyOnClose
          footer={[
            <WrapperButtonsModal>
              <ButtonAccept onClick={openedCash}>Oc.</ButtonAccept>
              <ButtonRefuse onClick={() => setVisible(false)}>bah</ButtonRefuse>
            </WrapperButtonsModal>,
          ]}
        >
          {visible
          && (
          <InputNumber
            defaultValue={0}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={handleSetStartMoney}
          />
          )}

        </Modal>
        <Table appointments={filteredAppointments} setLoadingSpinner={setLoadingSpinner} />
        <WrapperActualMoney>
          <WrapperMoneyCash>
            <strong>Open Cash</strong>
            {isOpen ? (
              <Confirm text="Do you want to close the cash with money?" confirmDelete={closeCash}>
                <Switch size="big" checked={isOpen} />
              </Confirm>
            ) : <Switch size="big" checked={isOpen} onChange={modalOpenCash} />}

          </WrapperMoneyCash>
          {actualStateCash && (
          <WrapperStateCash>
            <strong>
              Total:
              {actualStateCash.cas_current}
            </strong>
          </WrapperStateCash>
          )}
        </WrapperActualMoney>

      </WrapperList>
    </>
  );
};

export default List;
