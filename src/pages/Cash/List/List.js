import React, { useState } from 'react';
import Table from '../Table/Table';
import {WrapperList} from "@Pages/Cash/List/List.styled";
const List = () => {

  return (
    <>
        <WrapperList>
            <Table/>
        </WrapperList>
    </>
  );
};

export default List;
