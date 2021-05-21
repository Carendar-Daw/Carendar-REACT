import styled from 'styled-components';
import { device, deviceMax } from '@Commons/styles/breakpoints';
import { Heading4, CardApp } from '@Commons/components/domain/Styles/Style.styled';

export const TitlePage = styled(Heading4)`
    width: 200px;
    font-size: 20px;
    border-bottom: 5px solid black;
    margin-bottom: 0;
    border-radius: 3px;
    line-height: 40px;
    font-family: 'poppins',sans-serif;
  
`;

export const WrapperClients = styled(CardApp)`

    margin-top: 30px;
    margin-bottom: 40px;
    width: 90% !important;
    @media ${device.tablet} {
      padding-top: 30px;
      
    }
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  margin: 20px auto auto;

  .icon {
    font-size: 33px;
    margin-right: 10px;
  }

`;

export const WrapperTable = styled.div`
  width: 90%;
  margin: 60px auto auto;
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
  background-color: #ff5e5e;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const ButtonUpdate = styled.button`
  padding: 6px 15px;
  background-color: #ba9ce0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  .icon {
    margin-right: 5px;
  }
  @media ${deviceMax.laptopM} {
    span{
      display: none;
    }
    .icon {
      margin-right: 0;
    }
  }
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

export const WrapperSection = styled.div`
  margin: auto;
  width: 100%;
`;

export const ButtonDetails = styled(ButtonUpdate)`

  background-color: #ebddff;
  @media ${deviceMax.laptopM} {
    span{
      display: none;
    }
    .icon {
      margin-right: 0;
    }
  }

`;
export const ButtonHistory = styled(ButtonUpdate)`
  background-color: #ebddff;
  @media ${deviceMax.laptopM} {
    span{
      display: none;
    }
    .icon {
      margin-right: 0;
    }
  }
`;

export const WrapperHistory = styled(CardApp)`
    margin-top: 20px;
    box-sizing: border-box;
    padding: 20px;
    width: 90% !important;
    margin-bottom: 20px;
    @media ${device.tablet} {
     
      padding-top: 30px;
     
    }

`;

export const WrapperCardsHistory = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-around;
    }
`;
