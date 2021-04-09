import styled from 'styled-components';
import { ButtonDefault } from "../../Styles/Style.styled";
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */


export const Container = styled.div`
  
  &>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }

`;
export const Card = styled.div`
  
  padding: 8em;
  display: flex;
  flex-direction: column;
  
  &>div{
    display: flex;
  }
  .icon{
    font-size: 100px;
    
  }
  
`;