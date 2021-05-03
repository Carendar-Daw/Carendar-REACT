import styled from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';
import { Hamburger } from '@Commons/components/domain/Styles/Style.styled';

export const ContentPopOver = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: #8265A7 2px solid;
  transition-duration: 200ms;
  :hover {
    background-color: yellow;
  }
`;

export const Hamb = styled(Hamburger)`
  transition-duration: 200ms;
  visibility: hidden;
  left: 50px;
  @media ${deviceMax.mobileL} {
    visibility: visible;
    ${({ hamburger }) => ((hamburger) ? 'margin-left:0px;' : 'margin-left:50px;')}
  }
  span {
    ${({ hamburger }) => {
    if (hamburger) {
        return `
        transition-duration: 200ms;
        position:absolute;
        transform: rotate(0deg); 
        `;
    }
    return `
        transition-duration: 200ms;
        position:absolute;
        transform: rotate(45deg); 
        `;
}
}
    :nth-child(1) { ${({ hamburger }) => ((hamburger) ? 'transform: translateY(-8px);' : 'transform: rotate(-45deg);')}}
    :nth-child(2) { ${({ hamburger }) => ((hamburger) ? 'transform: translateY(8px);' : 'transform: rotate(-45deg);')}}
`;

export const UserData = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const WrapperNavTop = styled.div`
  max-width: calc(100vw - 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  @media ${deviceMax.mobileL} {
    visibility: visible;
    max-width: 95vw;
  }
`;

export const Logout = styled.a`
  color: #8265A7;
`;

export const HeaderTop = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  background-color: #8265A7;
  box-shadow: 13px 4px 12px -7px rgba(0, 0, 0, 0.75);
  z-index: 3;
  overflow: hidden;
`;