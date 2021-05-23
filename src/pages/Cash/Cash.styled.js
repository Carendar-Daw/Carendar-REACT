import styled from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';

export const WrapperComponents = styled.section`
  height: calc(100vh - 50px - 2em);
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin-top: 2em;
  
  @media ${deviceMax.tablet} {
    flex-direction:column-reverse;
    align-items: center;
  }
`;
