import styled from 'styled-components';
import Fonts from '../Typography';
import { device } from '../Devices';
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */
export const Hamburger = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span{
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: black;
  }

  :hover{
    cursor: pointer;
  }
`;

export const CardApp = styled.main`
    background-color: white;
    border: 3px solid #8265a7;
    border-top: 7px solid #8265a7;
    border-radius: 10px;
    box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
    width: 90%;
    margin: auto;

    @media ${device.tablet} {
      width: 80%;
      padding-top: 100px;
    }
`;

export const Content = styled.main`

  padding-top: 50px;

  
`;
export const ButtonDefault = styled.button`

  position: relative;
  display: inline-block;
  border: none;
  cursor: pointer;
  box-sizing:border-box;
  background-color: hsla(0,0%,44.3%,.3);
  font-size: 14px;
  font-weight: bold;
  
`;

export const Link = styled.a`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'};

  text-decoration: none;
  color: black;
  transition-duration: 250ms;
  
  :hover{
    color: #FEE995;
  }
`;

export const Heading4 = styled.h4`
  ${Fonts.poppins}
  font-family: ${'Poppins-Regular'};
`;

export const Item = styled.li`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'};
`;

export const Paragraph = styled.p`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'};
`;
