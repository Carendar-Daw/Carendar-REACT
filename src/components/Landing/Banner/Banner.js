import { Header, Button } from './Banner.styled';
import {useAuth0} from "@auth0/auth0-react";
import {useContext} from "react";
import {I18nContext} from "../../../config/language";



const Banner = () => {

    const { messages, language } = useContext(I18nContext);

    return (
        <Header>
            <div>
                <div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="../../../../public/assets/video/test.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={'texto'}>
                    <div>
                        <h1>{messages[language].Welcome.WelcomeBanner}</h1>
                        <h2>{messages[language].Welcome.WelcomeSubTitle}</h2>
                    </div>

                    <Button>{messages[language].SignIn}</Button>
                </div>
            </div>
        </Header>

    );
};

export default Banner;