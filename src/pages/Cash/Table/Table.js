import React, { useState, useContext} from 'react';
import { I18nContext } from '@Application/lang/language';
import { Table, InputNumber } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'antd/es/modal/Modal';
import axios from '@Commons/http';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import {
  WrapperButtonBuy, ButtonAccept, ButtonRefuse, WrapperButtonsModal,
} from './Table.styled';

const TableCash = ({ appointments, setActualMoney, getAppointmentsCash }) => {
  const { messages, language } = useContext(I18nContext);
  const [visible, setVisible] = useState(false);
  const [appointmentPaying, setAppointmentPaying] = useState(null);
  const [price, setPrice] = useState(0);
  const [priceRecived, setPriceRecived] = useState(0);

  const renderModal = (appointment) => {
    setVisible(true);
    setAppointmentPaying(appointment);
  };

  const calculPrice = (number) => {
    setPriceRecived(number);
    // eslint-disable-next-line no-unused-expressions
    number ? setPrice(number - appointmentPaying.ser_price) : setPrice(0);
  };

  const handleClickPayAppointment = async () => {
    try {
      const buildAppointment = {
        app_id: appointmentPaying.app_id,
        cus_id: appointmentPaying.cus_id,
        tra_total: appointmentPaying.ser_price,
        tra_received: priceRecived,
      };
      await axios.post('transaction', buildAppointment);
      const appState = {
        app_state: 'facturado',
      };
      await axios.put(`appointmentState/${appointmentPaying.app_id}`, appState);
      const cash = {
        cas_current: appointmentPaying.ser_price,
      };
      getAppointmentsCash();
      const actualCash = await axios.put('cashregister', cash);
      setActualMoney(actualCash.data.cashRegister.cas_current);
      success(messages[language].Cash.AppoinmentPayed);
    } catch (errors) {
      error(messages[language].Cash.FailPayment);
    } finally {
      setVisible(false);
    }
  };

  const closeModal = () => {
    setPrice(0);
    setVisible(false);
  };

  const columns = [
    {
      title: messages[language].Customers.State,

      dataIndex: 'status',
      width: 90,
    },
    {
      title: messages[language].Customers.Title,
      className: 'customer',
      dataIndex: 'customer',
      align: 'right',
      width: 90,
    },
    {
      title: messages[language].Services.Price,
      dataIndex: 'price',
      align: 'center',
      width: 60,
      render: (text) => (
        <span>
          {text}
          €
        </span>
      ),
    },
    {
      title: messages[language].Cash.Date,
      dataIndex: 'date',
      width: 200,
    },
    {
      title: messages[language].Services.Title,
      dataIndex: 'services',
    },
    {
      title: messages[language].Cash.Receive,
      dataIndex: 'payment',
      align: 'center',
      fixed: 'right',
      width: 70,
      render: (appointment) => (
        <WrapperButtonBuy onClick={() => renderModal(appointment)}>
          <FontAwesomeIcon className="icon" icon="shopping-cart" />
        </WrapperButtonBuy>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        bordered
        size="middle"
        scroll={{ x: 'calc(700px + 50%)', y: 240 }}
        dataSource={appointments}
        title={() => <p>{messages[language].Cash.Header}</p>}
      />
      <Modal
        title={messages[language].Cash.ConfirmPayment}
        visible={visible}
        destroyOnClose
        footer={[
          <WrapperButtonsModal>
            <ButtonAccept onClick={handleClickPayAppointment}>{messages[language].Cash.DataSuccessful}</ButtonAccept>
            <ButtonRefuse onClick={closeModal}>{messages[language].Stock.Cancel}</ButtonRefuse>
          </WrapperButtonsModal>,
        ]}
      >

        {visible && (
          <>
            <p>{appointmentPaying.app_state}</p>
            <p>{appointmentPaying.cus_email}</p>
            <p>{appointmentPaying.cus_name}</p>
            <p>{appointmentPaying.cus_phone}</p>
            <p>{appointmentPaying.ser_description}</p>
            <p>{appointmentPaying.ser_price}</p>
            <InputNumber
              defaultValue={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              onChange={calculPrice}
            />
            {price
            && (
            <>
              <p>{price}</p>
            </>
            )}

          </>
        )}
      </Modal>
    </>

  );
};

export default TableCash;
