import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { Skeleton, Space, Table } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonDelete, ButtonUpdate, ButtonDetails, ButtonHistory,
} from '../Clients.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, clients, loadingSkeleton, getDetailsCustomer, getHistoryCustomer,
}) => {
  const { messages, language } = useContext(I18nContext);
  const columns = [
    {
      title: messages[language].Stock.Name,
      dataIndex: 'cus_name',
      key: 'cus_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: messages[language].Customers.Email,
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
      title: messages[language].Customers.Born,
      dataIndex: 'cus_born_date',
      key: 'cus_born_date',
      responsive: ['xxl'],
    },
    {
      title: messages[language].Customers.Phone,
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
      title: messages[language].Stock.Action,
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.cus_id)}>
            <FontAwesomeIcon className="icon" icon="edit" />
            {messages[language].Stock.Edit}
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsCustomer(record.cus_id)}>
            <FontAwesomeIcon className="icon" icon="user-tag" />
            {messages[language].Stock.ShowDetails}
          </ButtonDetails>
          <ButtonHistory onClick={() => getHistoryCustomer(record.cus_id)}>
            <FontAwesomeIcon className="icon" icon="history" />
            {messages[language].Customers.ShowHistory}
          </ButtonHistory>
          <Confirm text={messages[language].Customers.ConfirmDeleteCustomer} confirmDelete={() => isGoingToDelete(record.cus_id)}>
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
