import React from 'react';
import { HeaderTop, HeaderLeft, Logo, LogoImg, Wrapper, ContentApp } from './Nav.styled';

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
            <ContentApp>
                <div>
                    <h1>liausdhiuh</h1>
                    <h1>liausdhiuh</h1>
                    <h1>liausdhiuh</h1>
                    <h1>liausdhiuh</h1>
                    <h1>liausdhiuh</h1>
                    <h1>liausdhiuh</h1>
                    <button>asddsa</button>
                </div>

            </ContentApp>
        </Wrapper>
    )
}

export default Nav;
