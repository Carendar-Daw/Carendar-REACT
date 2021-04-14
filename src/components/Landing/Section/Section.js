import { Container, Card, Title, SubTitle, Text } from './Section.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo, Wrapper } from "../Nav/Nav.styled";


const Section = () => {
    return (
        <Container>
            <Card>
                <div>
                    <Title>Title</Title>
                    <SubTitle>Sub-Title</SubTitle>
                    <Text>Enjoy it!</Text>
                </div>
                <div>
                    <img src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </div>
            </Card>

            <Card reverse>
                <div>
                    <Title>Title</Title>
                    <SubTitle>Sub-Title</SubTitle>
                    <Text>Enjoy it!</Text>
                </div>
                <div>
                    <img src="../../../../public/assets/images/logos/logo-carendar.png" alt="" />
                </div>
            </Card>
        </Container>
    );
};

export default Section;