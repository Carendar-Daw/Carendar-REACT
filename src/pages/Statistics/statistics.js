import React from 'react';
import { WrapperStatistics, FlexWrapper } from './statistics.styled';
import PieStatistics from './pie/PieStatistics';

const Statistics = () => {

  return (
    <WrapperStatistics>
      <FlexWrapper>
        <PieStatistics />
        <PieStatistics />
        <PieStatistics />
      </FlexWrapper>
      <FlexWrapper>
        <PieStatistics />
        <PieStatistics />
      </FlexWrapper>

    </WrapperStatistics>
  );
};

export default Statistics;
