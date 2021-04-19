import styled from 'styled-components';
import { Fonts } from '../Typography';
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Content = styled.main`
    background-color: #dadadae6;
    height: 100%;
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
  font-family: ${'Poppins-Regular'} !important;
  font-size: 20px;
  font-weight: bold;
`;

export const Item = styled.li`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'};
  font-size: 15px !important;
`;

export const Paragraph = styled.p`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'} !important;
`;