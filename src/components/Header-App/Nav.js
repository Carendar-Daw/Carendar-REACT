import React from 'react';
import { HeaderTop, HeaderLeft, Logo, LogoImg, Wrapper } from './Nav.styled';

const Nav = () => {
    return (
        <Wrapper>
            <HeaderTop>
                <Logo>
                    <LogoImg src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </Logo>
            </HeaderTop>
            <HeaderLeft>

            </HeaderLeft>

        </Wrapper>
    )
}

export default Nav;
