import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';
import { deviceMax } from '@Commons/styles/breakpoints';

export const WrapperList = styled(CardApp)`
  max-width: 60vw;
  padding: 2em;
  margin:0;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${deviceMax.tablet} {
    max-width:80vw;
  }
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
