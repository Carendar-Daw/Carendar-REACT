import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

export const WrapperPie = styled(CardApp)`
  padding-top: 30px;
  width: 90% !important;
  margin:auto;
  margin-top: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px;

  @media ${device.tablet} {
    margin-top: 30px;
    margin-right: 40px;
    margin-left: 20px;
    width: 30% !important;

  }
`;
