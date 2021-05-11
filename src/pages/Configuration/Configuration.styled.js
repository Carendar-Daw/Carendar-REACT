import styled from 'styled-components';
import { CardApp, Heading4 } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

export const WrapperConfiguration = styled(CardApp)`
  width: 90%;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 20px;
  
 
  @media ${device.tablet} {
    padding-top: 30px;
    margin-left: 40px;
    width: 45%;
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

export const TitlePage = styled(Heading4)`
    width: 200px;
    font-size: 20px;
    border-bottom: 5px solid black;
    margin-bottom: 0;
    border-radius: 3px;
    line-height: 40px;
  
`;

export const WrapperPhoto = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ImgSaloon = styled.img`
  border-radius: 100px;
  width: 200px;
`;

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const WrapperLanguage = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 90%;
  justify-content: flex-end;
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 10px;
`;

