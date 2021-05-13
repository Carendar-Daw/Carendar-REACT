import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Popover } from 'antd';
import { getSaloonPicture } from '@Application/store/user/reducer';
import { I18nContext } from '@Application/lang/language';
import {
  ContentPopOver, Hamb, TourText, UserData, UserPicture, WrapperNavTop, Logout, HeaderTop,
} from './Topbar.styled';

const Topbar = ({
  hamburgerClick, hamburger, logout, setIsTourOpen,
}) => {
  const { messages, language } = useContext(I18nContext);

  const saloonPicture = useSelector(getSaloonPicture);

  const doTourAgain = () => {
    setIsTourOpen(true);
  };

  const contentSettings = (
    <div>
      <TourText onClick={doTourAgain}>{messages[language].Dashboard.Tour}</TourText>
      <Logout onClick={() => logout({ returnTo: window.location.origin })}>{messages[language].Dashboard.Logout}</Logout>
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
          <Popover content={contentSettings} title={messages[language].Dashboard.Settings} trigger="click" className="popover">
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
