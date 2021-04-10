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


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3em;
  background-color: rgb(64, 64, 64);

  .icon {
    font-size: 3rem;
    transition-duration:250ms;
    cursor:pointer;
    
    :hover{
      color: #FEE995;
    }
  }
  
  
`;
