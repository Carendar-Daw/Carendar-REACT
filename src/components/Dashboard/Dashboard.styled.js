import styled from 'styled-components';
import { device } from '../Styles/Devices';

export const WrapperMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%; 
`;

export const IteamMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    margin: 30px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: gray;
      transition: 0.5s all ease-in-out;
    }
    @media ${device.tablet} {
      width: 40%;
    }

     @media ${device.laptop} {
      width: 30%;
    }

`;

export const Title = styled.div`
   text-transform: uppercase;
   font-size: 20px;
   text-align: center;
`;


