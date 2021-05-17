import styled from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';

export const HeaderLeft = styled.aside`
  width: 50px;
  height: 100%;
  background-color: #8265A7;
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

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fbf7ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  max-height: 2.1rem;
`;

export const WrapperMenu = styled.div`
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
