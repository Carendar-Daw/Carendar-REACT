import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperStatistics = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
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
