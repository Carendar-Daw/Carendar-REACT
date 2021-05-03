import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperMenu = styled.div`
    display: flex;
  
    height: calc(100vh - 50px);
    width: calc(100vw - 50px);
    position: absolute;
    top: 50px;
    left: 50px;
  
    

`;

export const IteamMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 90%;
    margin: 30px;
    box-sizing: border-box;
   
    @media ${device.tablet} {
      width: 40%;
      margin:0; 
    }

    @media ${device.laptop} {
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
    &:hover {
      background-color: gray;
      transition: 0.5s all ease-in-out;
    }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 80%;
   
`;
