import styled from 'styled-components';
import {device, deviceMax} from '@Commons/styles/breakpoints';

export const WrapperMenu = styled.div`
    display: flex;
    height: calc(100vh - 50px);
    width: calc(100vw - 50px);
    position: absolute;
    top: 50px;
    left: 50px;

  @media ${deviceMax.laptopM} {
    .calendar-list{
      display: none;
    }
    .calendar{
      width:90%;
    }
    ${({setAspectRatio}) => setAspectRatio(2)}
  }

`;

export const Title = styled.div`
   text-transform: uppercase;
   font-size: 20px;
   text-align: center;
`;
