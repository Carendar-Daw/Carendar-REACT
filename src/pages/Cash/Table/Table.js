import React, { useState } from 'react';
import { Table, InputNumber } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'antd/es/modal/Modal';
import axios from '@Commons/http';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import {
  WrapperButtonBuy, ButtonAccept, ButtonRefuse, WrapperButtonsModal,
} from './Table.styled';

const TableCash = ({ appointments, setActualMoney }) => {
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

      const cash = {
        cas_current: appointmentPaying.ser_price,
      };
      const actualCash = await axios.put('cashregister', cash);
      setActualMoney(actualCash.data.cashRegister.cas_current);
      success('Cita pagada correctamente');
    } catch (errors) {
      error('Error al pagar cita');
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
      title: 'Status',
      dataIndex: 'status',
      width: 90,
    },
    {
      title: 'Customer',
      className: 'customer',
      dataIndex: 'customer',
      align: 'right',
      width: 90,
    },
    {
      title: 'Price',
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
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    },
    {
      title: 'Services',
      dataIndex: 'services',
    },
    {
      title: 'Cobrar',
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
        title={() => <p>La madre del miquel es una putita</p>}
      />
      <Modal
        title="Confirm the payment of this appoitnment"
        visible={visible}
        destroyOnClose
        footer={[
          <WrapperButtonsModal>
            <ButtonAccept onClick={handleClickPayAppointment}>Pay</ButtonAccept>
            <ButtonRefuse onClick={closeModal}>Refuse</ButtonRefuse>
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
