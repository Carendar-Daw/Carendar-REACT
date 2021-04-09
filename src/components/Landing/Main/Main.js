import { Container, Card } from './Main.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Main = () => {
    return (
        <Container>
            <h3>Title</h3>
            <div>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={'calendar-alt'}/>
                        <h4>Lorem ipsum dolors.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"cut"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"tablet-alt"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"database"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"clock"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
                <Card>
                    <div>
                        <FontAwesomeIcon className={'icon'} icon={"users"}/>
                        <h4>Lorem ipsum dolor.</h4>
                    </div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </Card>
            </div>
        </Container>

    );
};

export default Main;