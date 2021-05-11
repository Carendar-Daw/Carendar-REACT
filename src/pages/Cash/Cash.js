import React from 'react';
import { WrapperCash, WrapperTable, WrapperTotalPrice, WrapperOptions } from './Cash.styled';
import Table from './Table/Table';
import TotalPrice from './totalPrice/TotalPrice';
import Option from './options/Options';

const Cash = () => {
  return (
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
  );
};

export default Cash;
