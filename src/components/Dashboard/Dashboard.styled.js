import styled from 'styled-components';
import { device } from '../Styles/Devices';

export const WrapperMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: blue;
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
    background-color: red;
    
    @media ${device.tablet} {
      width: 40%;
    }

     @media ${device.laptop} {
      width: 30%;
    }

`;


