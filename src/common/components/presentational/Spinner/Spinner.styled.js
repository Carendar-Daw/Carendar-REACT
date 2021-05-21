import styled from 'styled-components';
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Page = styled.div`
  height: 100vh;
  background-color: #251f34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled.div`

  --size: ${(props) => (props.size ? props.size : '76px')};

  width: var(--size);
  height: var(--size);

  border-radius: 50%;
  perspective: 800px;
   
`;Center;

export const Center = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

export const Inner = styled.div`

  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  
`;
export const InnerOne = styled(Inner)`

  left: 0;
  top: 0;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #FEE995;

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

`;
export const InnerTwo = styled(Inner)`

  right: 0;
  top: 0;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #ADB9F3;

  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

`;
export const InnerThree = styled(Inner)`

  right: 0;
  bottom: 0;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #8265A7;

  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
`;
