import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';

export const WrapperMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
    width: 100%;
    margin: auto;
    box-sizing: border-box;

  @media ${device.tablet} {
    justify-content: space-around;
    padding: 40px;
  }
  
`;

export const IteamMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  
    @media ${device.tablet} {
      justify-content: space-around;
      width: 40%;
      margin:0; 
      margin-bottom: 40px;
    }

    @media ${device.laptopL} {
      justify-content: space-around;
      width: 30%;
      margin:0;
      margin-bottom: 40px;
    }
    &:hover {
    background-color: #C8C8C8;

    transition: 0.5s all ease-in-out;
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
  margin: auto;
  img {
    height: 220px;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 80%;
   
`;
