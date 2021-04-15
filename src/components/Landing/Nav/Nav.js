import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper, Button, Logo, Language } from './Nav.styled';

const Nav = () => {
    const { loginWithRedirect, logout } = useAuth0();

    return (
        <Wrapper>
            <Logo src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
            <div>
                <Language name="" id="">
                    <option value="">🇪🇸</option>
                    <option value="">🏴󠁥󠁳󠁣󠁴󠁿</option>
                    <option value="">🇬🇧</option>
                </Language>
                <Button onClick={() => loginWithRedirect()}><span>LogIn</span></Button>
                <Button onClick={() => loginWithRedirect()}><span>SignIn</span></Button>
            </div>
        </Wrapper>
    );
};

export default Nav;