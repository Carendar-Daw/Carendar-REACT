import React, { useState } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'antd/es/modal/Modal';

const TableCash = ({ appointments }) => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: 'PK',
      dataIndex: 'key',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Customer',
      className: 'customer',
      dataIndex: 'customer',
      align: 'right',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Services',
      dataIndex: 'services',
    },
    {
      title: 'Cobrar',
      dataIndex: 'payment',
      align: 'center',
      render: (appointment) => (
        <FontAwesomeIcon onClick={() => setVisible(true)} className="icon" icon="shopping-cart" />
      ),
    },
  ];

  const renderModal = () => {

  };

  return (
    <>
      <Table
        columns={columns}
        bordered
        dataSource={appointments}
        title={() => <p>Header</p>}
        footer={() => 'Footer'}
      />
      <Modal
        title="Title"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>{renderModal}</p>
      </Modal>
    </>

  );
};

export default TableCash;
