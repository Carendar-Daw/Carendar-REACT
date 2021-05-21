import styled from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';
import { ButtonDefault } from '@Commons/components/domain/Styles/Style.styled';

/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Button = styled(ButtonDefault)`
    background-color: transparent;
  margin: 0 10px 2px;
 
  ::before,::after{
    position: absolute;
    content: "";
  }

  span {
    position: relative;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    top: 0; left: 0;
    width: 100%;
    padding: 6px 11px;
    box-sizing: border-box;
    color: rgb(255,255,255);
    border: 0.5px solid #8265A7;
    transition: 0.2s 0.1s;

    }
    @media ${deviceMax.tablet} {}
  }

  span:hover {
    color: rgb(28, 31, 30);
    transition: 0.2s 0.1s;
  }
  
  ::before {
    background-color: #8265A7;
    transition: 0.3s ease-out;
  }
  
  ::before {
    top:0; bottom: 0; right: 7px;
    height: 100%; width: 90%;
  }
  :hover::before {
    width: 0;
  }


`;
export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.3);
`;

export const WrapperContentMenu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${deviceMax.tablet} {
    transition-duration: 200ms;
    width: auto;
    position: fixed;

    ${({ hamburger }) => {
    if (hamburger) {
      return 'transform: translateY(55px);';
    }
    return 'transform: translateY(0); visibility:hidden;';
  }}
  }
`;

export const Logo = styled.img`
  max-height: 3rem;
  @media ${deviceMax.tablet} {
    animation:shake 4s;
    animation-iteration-count:infinite;
    cursor: pointer;
  }
  @keyframes shake {
    0% { transform: rotate(0deg); }
    2% { transform: rotate(-4deg); }
    4% { transform: rotate(4deg); }
    6% { transform: rotate(0deg); }
    8% { transform: rotate(4deg); }
    10% { transform: rotate(-4deg); }
    12% { transform: rotate(0deg); }
    14% { transform: rotate(-4deg); }
    16% { transform: rotate(4deg); }
    18% { transform: rotate(0deg); }
    20% { transform: rotate(-4deg); }
    22% { transform: rotate(0); }
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const StyledLi = styled.li`
  float: left;
`;

export const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 6px 1px;
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
  &:hover {
    background-color: gray;
  }
`;

export const SubA = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Arrow = styled.div`
    background-color: black;
    width: 8px;
    height: 8px;
    margin-left: 3px;
    transform: rotate(45deg);
    background-color: #00000000;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
`;

export const Flag = styled.img`
   width: 25px;
   height: 20px;
   margin-right: 3px;
`;
