import React, { useState } from 'react';
import { WrapperComponents, WrapperFilters } from '@Pages/Cash/Filters/Filters.styled';

const Filter = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <WrapperFilters>
        <WrapperComponents>
          <label htmlFor="" />
          <input type="text" />
          <label htmlFor="" />
          <input type="text" />
          <label htmlFor="" />
          <input type="text" />
          <label htmlFor="" />
          <input type="text" />
          <label htmlFor="" />
          <input type="text" />
          <label htmlFor="" />
          <input type="text" />
        </WrapperComponents>
      </WrapperFilters>
    </>
  );
};

export default Filter;
