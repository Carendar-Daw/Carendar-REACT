import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

const Container = styled(CardApp)`
  padding: 30px;  
  width: 100%;
  margin-top: 0px;
  margin-left: 0px;

  @media ${device.laptopL} {
    width: 25%;
  }
`;

export default Container;
