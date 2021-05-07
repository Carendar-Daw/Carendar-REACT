import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  @media ${device.tablet} {
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
    align-items: center;
  }
`;
