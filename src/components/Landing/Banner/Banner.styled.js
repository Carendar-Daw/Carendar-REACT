import styled from 'styled-components';
import { ButtonDefault } from "../../Styles/Style/Style.styled";
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
`;

export const Header = styled.div`
  position: inherit;
  top:0;
  z-index: -1;
  height: 500px;
  margin:0;
  background-image: url("../../../../public/assets/images/images/pexels-cottonbro-3992875.jpg");
  background-position: center;
  background-size: cover;
  
  &>div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  
`;