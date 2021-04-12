import { Container, Card, Heading, List, UList } from './Main.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Main = () => {
    return (
        <Container>
            <h3>Title</h3>
            <div>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={'calendar-alt'}/>
                        <Heading>Calendar</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"cut"}/>
                        <Heading>Services</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"tablet-alt"}/>
                        <Heading>Excellent for tablet</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"database"}/>
                        <Heading>Control your stock</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"clock"}/>
                        <Heading>Save time</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"users"}/>
                        <Heading>Save your clients</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
            </div>
        </Container>

    );
};

export default Main;