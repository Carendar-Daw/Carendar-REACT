import styled from 'styled-components';
import { ButtonDefault } from "../../Styles/Style/Style.styled";

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
  margin: 0 5px 2px;
  
  ::before,::after{
    position: absolute;
    content: "";
  }

  span {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    top: 0; left: 0;
    width: 100%;
    padding: 8px 13px;
    box-sizing: border-box;
    color: rgb(255,255,255);
    border: 0.5px solid #8265A7;
    transition: 0.2s 0.1s;
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

export const Logo = styled.img`
  max-height: 4rem;
`;
export const Language = styled.select`
  background-color: transparent;
  border: none;
  margin: 2rem;
  padding: 8px;
  cursor: pointer;
`;


