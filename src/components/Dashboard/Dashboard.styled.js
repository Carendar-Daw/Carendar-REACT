import styled from 'styled-components';
import { deviceMax } from '../Styles/Devices';

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
    width: 30%;
    margin: 30px;
    box-sizing: border-box;
    background-color: red;
    
    @media ${deviceMax.tablet} {
      width: 40%;
    }
`;


