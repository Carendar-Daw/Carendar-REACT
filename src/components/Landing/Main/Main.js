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
                        <Heading>Lorem ipsum dolors.</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"cut"}/>
                        <Heading>Lorem ipsum dolor.</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"tablet-alt"}/>
                        <Heading>Lorem ipsum dolor.</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"database"}/>
                        <Heading>Lorem ipsum dolor.</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"clock"}/>
                        <Heading>Lorem ipsum dolor.</Heading>
                    </div>
                    <UList>
                        <List>Lorem ipsum dolor sit amet.</List>
                        <List>Lorem ipsum dolor sit amet.</List>
                    </UList>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"users"}/>
                        <Heading>Lorem ipsum dolor.</Heading>
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