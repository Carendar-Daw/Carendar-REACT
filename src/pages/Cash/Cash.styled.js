import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperCash = styled.div`
  background-color: white;
  width: 100vw;
  box-sizing: border-box;
  @media ${device.tablet} {
    width: calc(100vw - 50px);
  }
`;

export const WrapperTotalPrice = styled.section`
  background-color: white;
`;

export const WrapperTable = styled.section`
  background-color: white;
`;

export const WrapperOptions = styled.section`
  border-top: 1px solid black;
  background-color: white;
`;

export const WrapperComponents = styled.section`
  display: flex;
  height: calc(100vh - 50px);
`;
