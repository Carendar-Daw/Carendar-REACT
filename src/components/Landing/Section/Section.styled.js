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


export const Container = styled.div`
  background-color: rgb(220,220,220);
  
`;
export const Card = styled.div`
  
  padding: 5em;
  display: flex;
  justify-content: space-around;
  flex-direction: ${props => props.reverse ? 'row-reverse': ''};
`;