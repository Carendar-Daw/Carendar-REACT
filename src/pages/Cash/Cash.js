import React from 'react';
import Filters from '@Pages/Cash/Filters/Filters';
import List from '@Pages/Cash/List/List';
import {
    WrapperCash, WrapperTable, WrapperTotalPrice, WrapperOptions, WrapperComponents,
} from './Cash.styled';
import Table from './Table/Table';
import TotalPrice from './totalPrice/TotalPrice';
import Option from './options/Options';

const Cash = () => (
  <>
      <WrapperComponents>
        <Filters />
        <List />
      </WrapperComponents>
    {/*
    <WrapperCash>

        <WrapperTable>
          <Table />
        </WrapperTable>
      <WrapperTotalPrice>
        <TotalPrice />
      </WrapperTotalPrice>
      <WrapperOptions>
        <Option />
      </WrapperOptions>

  </WrapperCash>
  */}

  </>

);

export default Cash;
