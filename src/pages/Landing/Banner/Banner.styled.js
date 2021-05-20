import styled from 'styled-components';

import { deviceMax } from '@Commons/styles/breakpoints';
import { ButtonDefault } from '@Commons/components/domain/Styles/Style.styled';

/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Button = styled(ButtonDefault)`
  padding: 1em;
  background-color: #8265A7;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  max-width: 10rem;
  margin: auto;
`;

export const Header = styled.div`
  position: inherit;
  top: 0;
  z-index: -1;
  height: 500px;
  margin: 0;
  background-position: center;
  background-size: cover;
  color: white;
  
  video {
    width: 100%;
    height: 100%;
    filter: grayscale(30%);
    @media ${deviceMax.laptopL} {
    display: none;
  }
  }
  img{
    display: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media ${deviceMax.laptopL} {
      display: block;
    }
  }
  
  .texto{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .titulo, .subtitulo{
    color: white;
    text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
   
  }
  @media ${deviceMax.mobileL} {
      #signIn{
          display: none;
      }
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: aqua;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

