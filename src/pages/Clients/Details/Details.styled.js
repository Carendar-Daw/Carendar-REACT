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
    font-family: 'poppins',sans-serif;
  
`;

export const WrapperDetails = styled(CardApp)`
  
  padding-top: 30px;
  width: 90% !important;
  margin:auto;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
 
  @media ${device.tablet} {
    margin-top: 30px;
    margin-right: 40px;
    width: 30% !important;
    
  }

`;

export const WrapperInfo = styled.div`

  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: start;

  @media ${device.tablet} {
    align-items: start;
  }
  img {
    width: 100px;
    border-radius: 100px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const ChooseAlert = styled.p`

  margin-top: 10px;
`;
