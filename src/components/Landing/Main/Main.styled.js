import styled from 'styled-components';
import { device } from '../../Styles/Devices';
import { ButtonDefault, Heading3, Text } from "../../Styles/Style/Style.styled";

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

export const Heading = styled(Heading3)`
  font-family: ${'BebasNeue-Regular'};
`;

export const List = styled(Text)`
  font-family: ${'Montserrat-Regular'};
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