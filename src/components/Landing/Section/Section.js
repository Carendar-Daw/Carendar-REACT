import {Container, Card} from './Section.styled';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Logo, Wrapper} from "../Nav/Nav.styled";


const Section = () => {
    return (
        <Container>
            <Card>
                <div>
                    <h3>Title</h3>
                    <h4>Sub-Title</h4>
                    <p>Enjoy it!</p>
                </div>
                <div>
                    <img src="../../../../public/assets/images/logos/logo-carendar.png" alt=""/>
                </div>
            </Card>

            <Card reverse>
                <div>
                    <h3>Title</h3>
                    <h4>Sub-Title</h4>
                    <p>Enjoy it!</p>
                </div>
                <div>
                    <img src="../../../../public/assets/images/logos/logo-carendar.png" alt=""/>
                </div>
            </Card>
        </Container>
    );
};

export default Section;