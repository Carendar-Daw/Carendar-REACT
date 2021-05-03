import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 10px;
    width: 100%;
    margin: auto;
    height: 75vh;
  
`;

export const IteamMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 30px;
    box-sizing: border-box;
   
    @media ${device.tablet} {
      width: 40%;
      margin:0; 
    }

    @media ${device.laptopL} {
      width: 30%;
      margin:0;     
    }

`;

export const Title = styled.div`
   text-transform: uppercase;
   font-size: 20px;
   text-align: center;
`;

export const Card = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  img {
    height: 220px;
  }
    &:hover {
      background-color: #C8C8C8;
   
      transition: 0.5s all ease-in-out;
    }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 80%;
   
`;
