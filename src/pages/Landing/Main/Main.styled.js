import styled from 'styled-components';
import { device, deviceMax } from '@Commons/styles/breakpoints';
import { Heading4, Item } from '@Commons/components/domain/Styles/Style.styled';
import Fonts from '@Commons/styles/fonts';
/* font-family: montserrat, sans-serif;
font-family: poppins, sans-serif; */
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

export const Heading = styled(Heading4)`
  font-size: 18px;
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
  @media ${deviceMax.mobileL} {
    margin-top: 0;
  }  
`;

export const Card = styled.div`
  width: 500px;
  margin: 1.4em;
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

export const Title = styled.h5`
  font-family: poppins, sans-serif;
  text-align: center;
  margin-top: 50px;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const SubTitle = styled.p`
font-family: poppins, sans-serif;
  text-align: center;
  font-size: 20px;
`;

export const WrapperMainTitles = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 2em;
`;
