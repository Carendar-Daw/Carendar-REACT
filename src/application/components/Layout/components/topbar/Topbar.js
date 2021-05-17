import React from 'react';
import { useSelector } from 'react-redux';
import { Popover } from 'antd';
import { getSaloonPicture } from '@Application/store/user/reducer';
import {
  ContentPopOver, Hamb, TourText, UserData, UserPicture, WrapperNavTop, Logout, HeaderTop,
} from './Topbar.styled';

const Topbar = ({
  hamburgerClick, hamburger, logout, setIsTourOpen,
}) => {
  const saloonPicture = useSelector(getSaloonPicture);

  const doTourAgain = () => {
    setIsTourOpen(true);
  };

  const contentSettigns = (
    <div>
      <TourText onClick={doTourAgain}>Do tour again!</TourText>
      <Logout onClick={() => logout({ returnTo: window.location.origin })}>Logout</Logout>
    </div>
  );

  return (
    <HeaderTop>
      <WrapperNavTop>
        <Hamb onClick={hamburgerClick} id="hamburger" hamburger={hamburger}>
          <span />
          <span />
          <span />
        </Hamb>
        <UserData className="logout">
          <Popover content={contentSettigns} title="Settings" trigger="click" className="popover">
            <ContentPopOver>
              <UserPicture src={saloonPicture} />
            </ContentPopOver>
          </Popover>
        </UserData>
      </WrapperNavTop>
    </HeaderTop>
  );
};

export default Topbar;
