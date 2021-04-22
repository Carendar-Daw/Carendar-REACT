import styled from 'styled-components';
import { ButtonDefault } from '../../Styles/Style/Style.styled';
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

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  
  video {
    width: 99vw;
    filter: grayscale(30%);
  }
  
  .texto{
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .titulo, .subtitulo{
    color: white;
    text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
  }
`;
