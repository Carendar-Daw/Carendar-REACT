import styled from 'styled-components';
import { Fonts } from '../Typography';
import { device } from '../../Styles/Devices';
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
export const Content = styled.main`

    display: flex;
    justify-content: center;
    align-items: center;
    

    @media ${device.tablet} {
    height: 100vh;
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