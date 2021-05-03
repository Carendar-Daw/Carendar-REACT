import styled, { createGlobalStyle } from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';


export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: #ecf0f5;
    
    @media ${deviceMax.mobileL}{
      overflow: auto;
    }
  }

`;

export const MainContent = styled.section`
  margin-left: 50px;
  height: 100%;
  @media ${deviceMax.mobileL} {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  z-index: 5;
`;
