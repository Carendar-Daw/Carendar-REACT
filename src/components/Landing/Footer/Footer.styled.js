import styled from 'styled-components';
import { Link, Paragraph } from "../../Styles/Style/Style.styled";
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3em;
  background-color: rgb(131, 131, 131);

  .icon {
    font-size: 2rem;
    transition-duration: 250ms;
    cursor: pointer;
    color: #51317e;

    :hover {
      color: #FEE995;
    }
  }


`;

export const Logo = styled.img`
  max-height: 5rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Anchor = styled(Link)`
  line-height: 2em;
`;
export const Text = styled(Paragraph)``;


export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
