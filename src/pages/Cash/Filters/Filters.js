import React, { useState } from 'react';
import {CardApp} from "@Commons/components/domain/Styles/Style.styled";
import {WrapperComponents, WrapperFilters} from "@Pages/Cash/Filters/Filters.styled";

const Filter = () => {
  const [view, setView] = useState(false);
  return (
    <>
        <WrapperFilters>
            <WrapperComponents>
                <label htmlFor=""></label><input type="text"/>
                <label htmlFor=""></label><input type="text"/>
                <label htmlFor=""></label><input type="text"/>
                <label htmlFor=""></label><input type="text"/>
                <label htmlFor=""></label><input type="text"/>
                <label htmlFor=""></label><input type="text"/>
            </WrapperComponents>
        </WrapperFilters>
    </>
  );
};

export default Filter;
