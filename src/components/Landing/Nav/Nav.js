import { Wrapper, Button, Logo, Language } from './Nav.styled';

const Nav = () => {
    return (
        <Wrapper>
            <Logo src="../../../../public/assets/images/logos/logo-carendar.png" alt=""/>
            <div>
                <Language name="" id="">
                    <option value="">🇪🇸</option>
                    <option value="">🏴󠁥󠁳󠁣󠁴󠁿</option>
                    <option value="">🇬🇧</option>
                </Language>
                <Button><span>LogIn</span></Button>
                <Button><span>SignIn</span></Button>
            </div>
        </Wrapper>
    );
};

export default Nav;