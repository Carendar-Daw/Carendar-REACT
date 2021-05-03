import styled from 'styled-components';
import Fonts from '@Commons/styles/fonts';
import { device } from '@Commons/styles/breakpoints';
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
    border-top: 7px solid #8265a7;
    border-radius: 10px;
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

export const WrapperButtonsDrawer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
 
`;

export const Link = styled.a`

  ${Fonts.montserrat}

  text-decoration: none;
  color: black;
  transition-duration: 250ms;
  
  :hover{
    color: #FEE995;
  }
`;

export const Heading4 = styled.h4`
  ${Fonts.poppins}
`;

export const Item = styled.li`
  ${Fonts.montserrat}
`;

export const Paragraph = styled.p`
  ${Fonts.montserrat}
`;
