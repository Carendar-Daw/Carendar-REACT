import React from 'react';
import { WrapperList } from '@Pages/Cash/List/List.styled';
import Table from '../Table/Table';

const List = ({ filteredAppointments }) => (
  <>
    <WrapperList>
      <Table appointments={filteredAppointments} />
    </WrapperList>
  </>
);

export default List;
