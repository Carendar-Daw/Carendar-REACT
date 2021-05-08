import styled from 'styled-components';
import { CardApp } from '@Commons/components/domain/Styles/Style.styled';

export const Container = styled(CardApp)`
    padding: 30px;
  width: 60%;
`;
export const Badge = styled.div`
  border-radius: 50%;
  background-color: ${({ color }) => ((color))};
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-left: 5px;
`;
