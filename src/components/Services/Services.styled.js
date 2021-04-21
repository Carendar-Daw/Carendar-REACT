import styled from 'styled-components';
import { device } from '../Styles/Devices';
import { Heading4 } from '../Styles/Style/Style.styled';
import { CardApp } from '../Styles/Style/Style.styled';


export const TitlePage = styled(Heading4)`
    width: 200px;
    font-size: 20px;
    border-bottom: 5px solid black;
    margin-bottom: 0;
    border-radius: 3px;
    line-height: 40px;
  
`;

export const WrapperServices = styled(CardApp)`

   margin-top: 30px;
   

    @media ${device.tablet} {
      width: 60%;
      padding-top: 30px;
      margin-left: 40px;
    }

   .buttonAdd{
       font-size: 35px;
   }
`;



export const WrapperTitle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    .icon {
        font-size: 33px;
        margin-right: 10px;
    }
    
`;

export const WrapperTable = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 60px;
`;

export const ButtonAdd = styled.button`
  padding: 15px;
  border-radius: 100px;
  border: none;
  background-color: #8265a7;
  cursor: pointer;
  box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
  position: absolute;
  bottom: 70px;
  right: 90px;
`;