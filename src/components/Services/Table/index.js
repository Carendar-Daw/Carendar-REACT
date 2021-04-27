import React from 'react';
import {Space, Table, Skeleton} from 'antd';
import {ButtonDelete, ButtonUpdate} from "@Components/Services/Services.styled";
import Confirm from "@Commons/Modal/Confirm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TableServices = ({showDrawerUpdate, isGoingToDelete, services, loadingSkeleton}) => {

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
