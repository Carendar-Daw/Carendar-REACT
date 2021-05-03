import React from 'react';
import { useSelector } from 'react-redux';
import { Popover } from "antd";
import { ContentPopOver, Hamb, UserData, UserPicture, WrapperNavTop, Logout, HeaderTop } from "./Topbar.styled";
import { getSaloonPicture } from '@Application/store/user/reducer';

const Topbar = ({ hamburgerClick, hamburger, logout }) => {

    const saloonPicture = useSelector(getSaloonPicture);

    const contentSettigns = (
        <div>
            <p>Profile</p>
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
                <UserData>
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
