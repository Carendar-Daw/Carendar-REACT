import styled from 'styled-components';

export const HeaderTop = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #8265A7;
  box-shadow: 3px 6px 11px -6px rgba(0, 0, 0, 0.75);
  z-index: 5;
`;

export const HeaderLeft = styled.div`
  width: 50px;
  height: 100%;
  background-color: gray;
  box-shadow: 3px 6px 11px -6px rgba(0, 0, 0, 0.75);
  z-index: 5;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #DAE0FE;
  display: flex;
  align-items: center;
  justify-content: center
`;

export const LogoImg = styled.img`
  max-height: 2.1rem;
  
`;
export const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  z-index: 5;
`;
export const Content = styled.div`
    position: absolute;
    background-color: aquamarine;
    height: 94.9vh;
    width: 97.4vw;
    top: 0;
    left: 0;
    margin: 50px 50px;

  
`;