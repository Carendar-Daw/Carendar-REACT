import React from 'react';
import { Space, Table, Skeleton } from 'antd';
import { ButtonDelete, ButtonUpdate } from "../Services.styled";
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDetails } from '@Pages/Clients/Clients.styled';

const TableServices = ({showDrawerUpdate, isGoingToDelete, getDetailsService, services, loadingSkeleton}) => {

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
    },
    {
      title: 'Time',
      dataIndex: 'ser_time',
      key: 'ser_time',
      responsive: ['sm'],
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

  return (
      <>
        <Table
            columns={columnsTableFiltered}
            dataSource={services}
            locale={{
              emptyText: loadingSkeleton ? <Skeleton active={loadingSkeleton} /> : null
            }}
        />
      </>
  );
}


export default TableServices;
