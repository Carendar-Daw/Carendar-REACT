import React, { useState, useEffect, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
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
  const { messages, language } = useContext(I18nContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [actualStateCash, setActualStateCash] = useState(false);
  const [visible, setVisible] = useState(false);
  const [startMoney, setStartMoney] = useState(false);
  const [actualMoney, setActualMoney] = useState(null);

  useEffect(async () => {
    try {
      setLoadingSpinner(true);
      const isCashOpen = await axios.get('cashregister');
      if (isCashOpen.data.cashRegister) {
        setActualStateCash(isCashOpen.data.cashRegister);
        setActualMoney(isCashOpen.data.cashRegister.cas_current);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } catch (errors) {
      error(messages[language].Cash.DataFail);
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
      success(messages[language].Cash.CashOpenedAgain);
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
      setActualMoney(cashOpened.data.cashRegister.cas_current);
      success(messages[language].Cash.DataSuccessful);
      setVisible(false);
      setIsOpen(disabled);
    } catch (errors) {
      error(messages[language].Cash.DataFail);
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
      success(messages[language].Cash.CashClosed);
    } catch (errors) {
      error(messages[language].Cash.CloseFail);
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
          title={messages[language].Cash.MoneyStart}
          visible={visible}
          destroyOnClose
          footer={[
            <WrapperButtonsModal>
              <ButtonAccept onClick={openedCash}>{messages[language].Cookies.Accept}</ButtonAccept>
              <ButtonRefuse onClick={() => setVisible(false)}>{messages[language].Stock.Cancel}</ButtonRefuse>
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
        <Table appointments={filteredAppointments} setLoadingSpinner={setLoadingSpinner} setActualMoney={setActualMoney} />
        <WrapperActualMoney>
          <WrapperMoneyCash>
            <strong>{messages[language].Cash.OpenCash}</strong>
            {isOpen ? (
              <Confirm text={messages[language].Cash.CloseCashMoney} confirmDelete={closeCash}>
                <Switch size="big" checked={isOpen} />
              </Confirm>
            ) : <Switch size="big" checked={isOpen} onChange={modalOpenCash} />}

          </WrapperMoneyCash>
          {actualStateCash && (
          <WrapperStateCash>
            <strong>
              Total:
              {actualMoney}
            </strong>
          </WrapperStateCash>
          )}
        </WrapperActualMoney>

      </WrapperList>
    </>
  );
};

export default List;
