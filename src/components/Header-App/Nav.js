import React from 'react';
import { HeaderTop, HeaderLeft, Logo, LogoImg } from './Nav.styled';

const Nav = () => {
    return (
        <div>
            <HeaderTop>
                <Logo>
                    <LogoImg src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </Logo>
            </HeaderTop>
            <HeaderLeft>

            </HeaderLeft>
        </div>
    )
}

export default Nav;
