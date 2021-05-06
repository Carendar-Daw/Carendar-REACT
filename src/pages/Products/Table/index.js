import React from 'react';
import { Space, Table, Skeleton } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDetails } from '@Pages/Clients/Clients.styled';
import { ButtonDelete, ButtonUpdate } from '../Products.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, getDetailsProducts, products, loadingSkeleton,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'sto_name',
      key: 'sto_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Barcode',
      dataIndex: 'sto_barcode',
      key: 'sto_barcode',
    },
    {
      title: 'PVP',
      dataIndex: 'sto_pvp',
      key: 'sto_pvp',
      responsive: ['sm'],
    },
    {
      title: 'Amount',
      dataIndex: 'sto_amount',
      key: 'sto_amount',
      responsive: ['sm'],
    },
    {
      title: 'Id',
      dataIndex: 'sto_id',
      key: 'sto_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.sto_id)}>
            Editar
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsProducts(record.sto_id)}>
            Show Details
          </ButtonDetails>
          <Confirm text="Do you want to delete the service?" confirmDelete={() => isGoingToDelete(record.ser_id)}>
            <ButtonDelete>
              <FontAwesomeIcon className="icon" icon="trash" />
            </ButtonDelete>
          </Confirm>
        </Space>
      ),
    },
  ];

  const columnsTableFiltered = columns.filter((col) => col.dataIndex !== 'sto_id');

  return (
    <>
      <Table
        columns={columnsTableFiltered}
        dataSource={products}
        locale={{
          emptyText: loadingSkeleton ? <Skeleton active={loadingSkeleton} /> : null,
        }}
      />
    </>
  );
};

export default TableServices;
