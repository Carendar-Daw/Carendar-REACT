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
`;


export const ButtonDefault = styled.button`
  background-color: white;
  border-radius: 5px;
  padding: 8px;
  margin: 5px;
  width: 80px;
  transition-duration: 250ms;
  border: none;
  box-shadow: 1px 1px 1px black;
  
  &:hover{
    background-color: #8265A7;
    color: white;
  }
  
`;

export const ButtonDanger = styled(ButtonDefault)`
  background-color: red;
`;