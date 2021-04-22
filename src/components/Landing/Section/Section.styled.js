import styled from 'styled-components';
import { deviceMax } from '../../Styles/Devices';
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Title = styled.div` 
   color:#8265a7;
   font-size: 20px;
   border-bottom:3px solid #8265a7;
    max-width:200px;
    text-align: left;
    @media ${deviceMax.tablet} {
      text-align: center;
      padding-bottom: 1px;
    }
    
`;

export const SubTitle = styled.div`
  color:#6B74A1;
  font-weight: bold;
  font-size: 25px;
  @media ${deviceMax.tablet} {
      text-align: center;
      padding-top: 3px;
    }
`;

export const Text = styled.div` 
   font-size: 15px;
   color: gray;
   margin-bottom:50px;
   @media ${deviceMax.tablet} {
      text-align: center;
    }
`;

export const Container = styled.div`
  background-color: rgb(220,220,220);
  line-height: 40px;
`;
export const Card = styled.div`
 
  padding: 5em;
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : '')};
  @media ${deviceMax.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
