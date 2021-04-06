import { Wrapper, ButtonDefault, Logo, Language } from './Nav.styled';

const Nav = () => {
    return (

        <Wrapper>
            <Logo src="../../../../public/assets/images/logos/logo-provisional.png" alt=""/>
            <div>
                <Language name="" id="">
                    <option value="">🇪🇸</option>
                    <option value="">🏴󠁥󠁳󠁣󠁴󠁿</option>
                    <option value="">🇬🇧</option>
                </Language>
                <ButtonDefault>Login</ButtonDefault>
                <ButtonDefault>Register</ButtonDefault>
            </div>
        </Wrapper>
    );
};

export default Nav;