import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';
import {CardApp} from "@Commons/components/domain/Styles/Style.styled";

export const WrapperComponents = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const WrapperFilters = styled(CardApp)`
  max-width: 25vw;
  height: 60vh;
  padding: 2em;
`;
