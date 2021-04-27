import React from 'react';
import { Table } from 'antd';

const TableServices = ({columnsTableFiltered, services}) => (
    <Table columns={columnsTableFiltered} dataSource={services} />
  );

export default TableServices;
