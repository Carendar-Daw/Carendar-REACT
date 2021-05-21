import styled from 'styled-components';

export const WrapperButtonBuy = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;

export const ButtonAccept = styled.button`
 background-color: #d0ebd6;
  border: none;
  border-radius: 15px;
  width: 35%;
  height: 35px;
  cursor: pointer;
  color: green;
`;

export const ButtonRefuse = styled.button`
  background-color: #f2d9da;
  border: none;
  border-radius: 15px;
  width: 35%;
  height: 35px;
  cursor: pointer;
  color: red;
`;
