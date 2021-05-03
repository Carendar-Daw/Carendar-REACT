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


export const WrapperHistory = styled(CardApp)`

    box-sizing: border-box;
    padding: 20px;
    width: 90% !important;
    margin-bottom: 20px;
    @media ${device.tablet} {
      padding-top: 30px;
     
    }

`;