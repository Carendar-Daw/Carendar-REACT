import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { Space, Table, Skeleton } from 'antd';
import Confirm from '@Commons/components/presentational/Modal/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDetails } from '@Pages/Clients/Clients.styled';
import { ButtonDelete, ButtonUpdate } from '../Products.styled';

const TableServices = ({
  showDrawerUpdate, isGoingToDelete, getDetailsProducts, products, loadingSkeleton,
}) => {
  const { messages, language } = useContext(I18nContext);
  const columns = [
    {
      title: messages[language].Stock.Name,
      dataIndex: 'sto_name',
      key: 'sto_name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: messages[language].Stock.Barcode,
      dataIndex: 'sto_barcode',
      key: 'sto_barcode',
    },
    {
      title: messages[language].Stock.PVP,
      dataIndex: 'sto_pvp',
      key: 'sto_pvp',
      responsive: ['sm'],
    },
    {
      title: messages[language].Stock.Amount,
      dataIndex: 'sto_amount',
      key: 'sto_amount',
      responsive: ['sm'],
      render: (text) => <p>{text}u</p>,
    },
    {
      title: 'Id',
      dataIndex: 'sto_id',
      key: 'sto_id',
    },
    {
      title: messages[language].Stock.Action,
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <ButtonUpdate onClick={() => showDrawerUpdate(record.sto_id)}>
            <FontAwesomeIcon className="icon" icon="edit" />
            <span>
              {messages[language].Stock.Edit}
            </span>
          </ButtonUpdate>
          <ButtonDetails onClick={() => getDetailsProducts(record.sto_id)}>
            <span>
              {messages[language].Stock.ShowDetails}
            </span>
          </ButtonDetails>
          <Confirm text={messages[language].Stock.ConfirmDeleteStock} confirmDelete={() => isGoingToDelete(record.sto_id)}>
            <ButtonDelete>
              <FontAwesomeIcon className="icon" icon="trash" />
            </ButtonDelete>
          </Confirm>
        </Space>
      ),
    },
  ];

  const columnsTableFiltered = columns.filter((col) => col.dataIndex !== 'sto_id');

  const collectionSkeleton = ([<Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />, <Skeleton active={loadingSkeleton} />]);

  return (
    <>
      <Table
        columns={columnsTableFiltered}
        dataSource={products}
        locale={{
          emptyText: loadingSkeleton ? collectionSkeleton : null,
        }}
      />
    </>
  );
};

export default TableServices;
