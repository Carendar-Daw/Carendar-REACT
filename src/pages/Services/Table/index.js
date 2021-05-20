import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { Space, Table, Skeleton } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDetails } from '@Pages/Clients/Clients.styled';
import { ButtonDelete, ButtonUpdate } from '../Services.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, getDetailsService, services, loadingSkeleton,
}) => {
  const { messages, language } = useContext(I18nContext);
  const columns = [
    {
      title: messages[language].Stock.Name,
      dataIndex: 'ser_description',
      key: 'ser_description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: messages[language].Services.Price,
      dataIndex: 'ser_price',
      key: 'ser_price',
      render: (text) => (
        <p>
          {text}
          {' '}
          €
        </p>
      ),
    },
    {
      title: messages[language].Services.Time,
      dataIndex: 'ser_time',
      key: 'ser_time',
      responsive: ['sm'],
      render: (text) => (
        <p>
          {text}
          {' '}
          min
        </p>
      ),
    },
    {
      title: 'Id',
      dataIndex: 'ser_id',
      key: 'ser_id',
    },
    {
      title: messages[language].Stock.Action,
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.ser_id)}>
            <FontAwesomeIcon className="icon" icon="edit" />
            {messages[language].Stock.Edit}
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsService(record.ser_id)}>
            <FontAwesomeIcon className="icon" icon="search" />
            {messages[language].Stock.ShowDetails}
          </ButtonDetails>
          <Confirm text={messages[language].Services.ConfirmDeleteService} confirmDelete={() => isGoingToDelete(record.ser_id)}>
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
