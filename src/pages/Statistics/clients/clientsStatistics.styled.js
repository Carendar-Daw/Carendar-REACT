import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

export const WrapperPie = styled(CardApp)`
  width: 90% !important;
  margin: 30px auto 20px;
  box-sizing: border-box;
  padding: 20px;

  @media ${device.tablet} {
    margin-top: 30px;
    margin-left: 20px;
    width: 40% !important;

  }
`;

export const Title = styled.h1`
  color: #9038ff;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  color: gray;
  font-weight: 300;
`;

