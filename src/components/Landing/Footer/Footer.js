import { Anchor, Contact, Container, Icons, Links, Logo, Text } from './Footer.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <Container>
            <div>
                <div>
                    <Logo src="../../../../public/assets/images/logos/logo-provisional.png" alt="" />
                </div>
                <Links>
                    <Anchor href="#">Contact</Anchor>
                    <Anchor href="#">Privacy politics</Anchor>
                    <Anchor href="#">Support</Anchor>
                    <Anchor href="#">Use conditions</Anchor>
                </Links>
            </div>
            <Contact>
                <Icons>
                    <FontAwesomeIcon className={'icon'} icon={['fab', 'facebook']} />
                    <FontAwesomeIcon className={'icon'} icon={['fab', 'instagram']} />
                    <FontAwesomeIcon className={'icon'} icon={['fab', 'twitter']} />
                    <FontAwesomeIcon className={'icon'} icon={['fab', 'pinterest']} />
                </Icons>
                <div>
                    <Text>España: <Anchor href="tel:+34605369775">+34 605 36 97 75 </Anchor></Text>
                    <Text>España: <Anchor href="tel:+34605369775">+34 605 36 97 75 </Anchor></Text>
                    <Anchor href="mailto:carendar.daw@gmail.com">carendar.daw@gmail.com</Anchor>
                </div>
            </Contact>

        </Container>

    );
};

export default Footer;