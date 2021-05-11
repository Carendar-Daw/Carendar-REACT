import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';

export const WrapperStatistics = styled.div`
    padding-top: 10px;
    margin: auto;
    padding: 40px;
    box-sizing: border-box;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const WrapperDateRange = styled(CardApp)`
  width: 90% !important;
  margin: 30px auto 20px;
  box-sizing: border-box;
  padding: 20px;

  @media ${device.tablet} {
    margin-top: 30px;
    margin-left: 20px;
    width: 40% !important;

  }
`;
