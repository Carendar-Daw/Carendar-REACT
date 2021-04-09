import styled from 'styled-components';
import { device } from '../../Devices';
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
  margin: 1em;
  padding: 4em;
  display: flex;
  flex-direction: column;


  @media ${device.laptop}{
    max-width: 50%;
  }

  @media ${device.laptopL} {
    min-width: 20%;
  }
  
  &>div{
    display: flex;

  }
  .icon{
    font-size: 50px;
    
  }
  
`;