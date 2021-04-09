import { Container, Card, Heading, List } from './Main.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Main = () => {
    return (
        <Container>
            <Heading>Title</Heading>
            <div>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={'calendar-alt'}/>
                        <h4>Lorem ipsum dolors.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"cut"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"tablet-alt"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"database"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"clock"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"users"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </ul>
                </Card>
            </div>
        </Container>

    );
};

export default Main;