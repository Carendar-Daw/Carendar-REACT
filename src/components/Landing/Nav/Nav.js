import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper, Button, Logo, Language } from './Nav.styled';
import { useContext } from "react";
import { I18nContext } from "../../../config/language";

const Nav = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const { messages, language, setLanguage } = useContext(I18nContext);

    return (
        <Wrapper>
            <Logo src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
            <div>
                <Language value={language} onChange={({target}) => setLanguage(target.value)} >
                    <option value="es">🇪🇸</option>
                    <option value="ca">🏴󠁥󠁳󠁣󠁴󠁿</option>
                    <option value="en">🇬🇧</option>
                </Language>
                <Button onClick={() => loginWithRedirect()}><span>{messages[language].LogIn}</span></Button>
                <Button onClick={() => logout()}><span>{messages[language].SignIn}</span></Button>
            </div>
        </Wrapper>
    );
};

export default Nav;