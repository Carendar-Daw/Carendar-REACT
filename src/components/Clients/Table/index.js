import React from 'react';
import {Skeleton, Space, Table} from 'antd';
import {ButtonDelete, ButtonUpdate} from "@Components/Clients/Clients.styled";
import Confirm from "@Commons/Modal/Confirm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const TableServices = ({ showDrawerUpdate, isGoingToDelete, clients, loadingSkeleton }) => {

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
      responsive: ['sm'],
    },
    {
      title: 'Phone',
      dataIndex: 'cus_phone',
      key: 'cus_phone',
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

  return (
      <Table
          columns={columnsTableFiltered}
          dataSource={clients}
          locale={{
            emptyText: loadingSkeleton ? <Skeleton active={loadingSkeleton} /> : null
          }}
      />
  );
}

export default TableServices;
