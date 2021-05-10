import React from 'react';
import { Skeleton, Space, Table } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonDelete, ButtonUpdate, ButtonDetails, ButtonHistory,
} from '../Clients.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, clients, loadingSkeleton, getDetailsCustomer, getHistoryCustomer,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'cus_name',
      key: 'cus_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'cus_email',
      key: 'cus_email',
      responsive: ['lg'],
    },
    {
      title: 'Color',
      dataIndex: 'cus_color_preference',
      key: 'cus_color_preference',
      responsive: ['sm'],
    },
    {
      title: 'Born Date',
      dataIndex: 'cus_born_date',
      key: 'cus_born_date',
      responsive: ['xxl'],
    },
    {
      title: 'Phone',
      dataIndex: 'cus_phone',
      key: 'cus_phone',
      responsive: ['xxl'],
    },
    {
      title: 'Id',
      dataIndex: 'cus_id',
      key: 'cus_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.cus_id)}>
            Editar
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsCustomer(record.cus_id)}>
            Show Details
          </ButtonDetails>
          <ButtonHistory onClick={() => getHistoryCustomer(record.cus_id)}>
            Show History
          </ButtonHistory>
          <Confirm text="Do you want to delete the service?" confirmDelete={() => isGoingToDelete(record.cus_id)}>
            <ButtonDelete>
              <FontAwesomeIcon className="icon" icon="trash" />
            </ButtonDelete>
          </Confirm>
        </Space>
      ),
    },
  ];

  const columnsTableFiltered = columns.filter((col) => col.dataIndex !== 'cus_id');

  const collectionSkeleton = ([<Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />]);

  return (
    <Table
      columns={columnsTableFiltered}
      dataSource={clients}
      locale={{
        emptyText: loadingSkeleton ? collectionSkeleton : null,
      }}
    />
  );
};

export default TableServices;
