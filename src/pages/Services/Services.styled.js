import styled from 'styled-components';
import { device } from '@Commons/styles/breakpoints';
import { Heading4, CardApp } from '@Commons/components/domain/Styles/Style.styled';

export const TitlePage = styled(Heading4)`
    width: 200px;
    font-size: 20px;
    border-bottom: 5px solid black;
    margin-bottom: 0;
    border-radius: 3px;
    line-height: 40px;
  
`;

export const WrapperServices = styled(CardApp)`
    width: 90%;
    margin-top: 30px;
    @media ${device.tablet} {
      padding-top: 30px;
      margin-left: 40px;
      width: 70%;
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
  position: fixed;
  right: 48px;
  bottom: 32px;
  box-shadow: rgb(0 0 0 / 24%) 0px 6px 6px 0px, rgb(0 0 0 / 12%) 0px 0px 6px 0px;
  outline: none;
`;

export const ButtonDelete = styled.button`
  padding: 8px;
  background-color: red;
  border-radius: 10px;
  border: none;
  cursor:pointer;
`;

export const ButtonUpdate = styled.button`
  padding: 5px;
  background-color: #6a6af1;
  border-radius: 10px;
  border: none;
  box-shadow: 3px 7px 7px 0px rgba(0,0,0,0.75);
  cursor:pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: row;
  }

  .buttonAdd{
    font-size: 35px;
  }
`;


