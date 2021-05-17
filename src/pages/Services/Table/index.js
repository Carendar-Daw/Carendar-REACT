import React from 'react';
import { Space, Table, Skeleton } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDetails } from '@Pages/Clients/Clients.styled';
import { ButtonDelete, ButtonUpdate } from '../Services.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, getDetailsService, services, loadingSkeleton,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'ser_description',
      key: 'ser_description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Precio',
      dataIndex: 'ser_price',
      key: 'ser_price',
      render: (text) => <p>{text} $</p>,
    },
    {
      title: 'Time',
      dataIndex: 'ser_time',
      key: 'ser_time',
      responsive: ['sm'],
      render: (text) => <p>{text} min</p>,
    },
    {
      title: 'Id',
      dataIndex: 'ser_id',
      key: 'ser_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.ser_id)}>
            Editar
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsService(record.ser_id)}>
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

  const columnsTableFiltered = columns.filter((col) => col.dataIndex !== 'ser_id');

  const collectionSkeleton = ([<Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />]);

  return (
    <>
      <Table
        columns={columnsTableFiltered}
        dataSource={services}
        locale={{
          emptyText: loadingSkeleton ? collectionSkeleton : null,
        }}
      />
    </>
  );
};

export default TableServices;
