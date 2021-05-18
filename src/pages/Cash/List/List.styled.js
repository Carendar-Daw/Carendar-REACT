import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';
import {CardApp} from "@Commons/components/domain/Styles/Style.styled";


export const WrapperComponents = styled.section`
  display: flex;
`;

export const WrapperList = styled(CardApp)`
  max-width: 60vw;
  padding: 2em;
`;

export const WrapperActualMoney = styled.div`
  display: flex;
`;

export const WrapperMoneyCash = styled.div`
  width: 50%;

`;

export const WrapperStateCash = styled.div`
  width: 50%;
  text-align: right;

`;

