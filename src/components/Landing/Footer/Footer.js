import { Container } from './Footer.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {
    return (
        <Container>
            <FontAwesomeIcon className={'icon'} icon={['fab','facebook']}/>
            <FontAwesomeIcon className={'icon'} icon={['fab','instagram']}/>
            <FontAwesomeIcon className={'icon'} icon={['fab','github']}/>
            <FontAwesomeIcon className={'icon'} icon={['fab','twitter']}/>
            <FontAwesomeIcon className={'icon'} icon={['fab','pinterest']}/>
        </Container>

    );
};

export default Footer;