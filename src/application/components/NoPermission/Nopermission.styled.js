import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eee4ff;
  height: 100vh;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  align-items: center;
  justify-content: space-evenly;
  max-width: 30%;
  margin: auto;
  img{
    max-height: 200px;
    max-width: 200px;
  }
  p{
    font-family: poppins, sans-serif;
    font-size: 20px;
    text-align: justify;
  }
`;
