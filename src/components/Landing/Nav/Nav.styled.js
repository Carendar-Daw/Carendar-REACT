import styled from 'styled-components';

/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Wrapper = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top:0;
`;

export const Logo = styled.img`
  max-height: 5rem;
`;
export const Language = styled.select`
  background-color: white;
  border: none;
  margin: 2rem;
  padding: 8px;
  cursor: pointer;
`;


export const ButtonDefault = styled.button`

  position: relative;
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 5px 2px;
  box-sizing:border-box;
  
  ::before,::after{
    position: absolute;
    content: "";
  }

  & span {         
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    top: 0; left: 0;
    width: 100%;
    padding: 10px 15px;
    transition: 0.3s;
    box-sizing: border-box;
  }
  
  &::before {
    background-color: #8265A7;
    transition: 0.3s ease-out;
  }

  & span {
    color: rgb(255,255,255);
    border: 0.5px solid #8265A7;
    transition: 0.2s 0.1s;
  }
  & span:hover {
    color: rgb(28, 31, 30);

    transition: 0.2s 0.1s;
    
  }

  &::before {
    top:0; bottom: 0; right: 7px;
    height: 100%; width: 90%;
  }
  &:hover::before {
    width: 0;
  }
  
  
`;

export const ButtonDanger = styled(ButtonDefault)`
  background-color: red;
`;