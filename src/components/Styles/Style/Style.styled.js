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


export const ButtonDefault = styled.button`

  position: relative;
  display: inline-block;
  border: none;
  cursor: pointer;
  box-sizing:border-box;
  background-color: #8265A7;
  font-size: 14px;
  font-weight: bold;
  
`;

export const Heading4 = styled.h4`
  ${Fonts.poppins}
  font-family: ${'Poppins-Regular'};
`;
export const Item = styled.li`
  ${Fonts.montserrat}
  font-family: ${'Montserrat-Regular'};
  list-style:none;
`;
export const Paragraph = styled.p`
  ${Fonts.montserrat}
`;