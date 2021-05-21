import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

export const Container = styled(CardApp)`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  margin-right: 40px;
  margin-bottom: 30px;
  
  @media ${device.laptopL} {  
    width: 75%;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;
export const Badge = styled.div`
  border-radius: 50%;
  background-color: ${({ color }) => ((color))};
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-left: 5px;
`;

export const WrapperCalendarApp = styled.div`
  width: 70%;
`;
