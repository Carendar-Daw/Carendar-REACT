import styled, { createGlobalStyle } from 'styled-components';
import { deviceMax } from '../../components/Styles/Devices';
import { Hamburger } from '../../components/Styles/Style/Style.styled';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: #dadadae6;
    
    @media ${deviceMax.mobileL}{
      overflow: auto;
    
    }
  }

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

export const HeaderLeft = styled.aside`
  width: 50px;
  height: 100%;
  background-color: gray;
  box-shadow: 13px 4px 12px -7px rgba(0, 0, 0, 0.75);
  position: fixed;
  transition-duration: 200ms;
  z-index: 4;
  @media ${deviceMax.mobileL} {
    left: -50px;
    box-shadow: none;
    
    ${({ hamburger }) => ((hamburger) ? 'transform: translateX(0);' : 'transform: translateX(50px);')}
  }
`;

export const MainContent = styled.section`
  margin-left: 50px;
  height: 100%;
  @media ${deviceMax.mobileL} {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #DAE0FE;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  max-height: 2.1rem;

`;
export const Wrapper = styled.div`
  height: 100%;
  z-index: 5;
`;

export const IteamMenuWrapper = styled.div`
  width: 50px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 200ms;
  background-color: ${(({ background }) => (background ? '#7759a0' : ''))};

  :hover {
    background-color: ${(({ background }) => (background ? '' : '#575757'))}
  }

  .icon {
    color: white;
    font-size: 20px;
  }
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

export const UserName = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

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

export const Logout = styled.a`
  color: #8265A7;
`;
