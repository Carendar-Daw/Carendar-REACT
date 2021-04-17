import styled from 'styled-components';
import { Fonts } from '../Typography';
import { deviceMax } from '../../Styles/Devices';
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Content = styled.div`
    position: absolute;
    background-color: #dadadae6;
    height: 94.9vh;
    width: 97.4vw;
    top: 0;
    left: 0;
    margin: 50px 50px;
    z-index: -1;

    @media ${deviceMax.laptop} {
     width: 100vw;
     margin: 0;
     margin-top: 50px;
    }
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