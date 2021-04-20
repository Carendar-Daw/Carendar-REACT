import styled from 'styled-components';
import { device } from '../../Styles/Devices';
import { ButtonDefault, Heading4, Item } from "../../Styles/Style/Style.styled";

/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */


export const Container = styled.div`

& {
  margin-top: 10vw;
  margin-bottom: 15vw;
  
}

  &>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }
  
  h3{
    text-align: center;
    font-size: 3rem;
  }
  @media ${device.laptop} {
    margin-top: 22vw;
  }
`;

export const Heading = styled(Heading4)`
  padding-left: 10px;
  margin: auto 0;
`;

export const List = styled(Item)`
  padding-top: 1em;
`;

export const UList = styled.ul`
  padding: 0;
  padding-left: 1em;
`;
export const ContainerCenter = styled.ul`
  
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding-inline-start: 0px;
`;

export const Card = styled.div`
  margin: 1em;
  padding: 4em;
  display: flex;
  flex-direction: column;


  @media ${device.laptopL} {
    width: 30%;
  }

  &>div{
    display: flex;

  }
  .icon{
    font-size: 50px !important;
    
  }
  
  
`;