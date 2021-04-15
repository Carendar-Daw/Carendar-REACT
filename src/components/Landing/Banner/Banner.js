import { useAuth0 } from '@auth0/auth0-react';
import { Header, Button } from './Banner.styled';

const Banner = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <Header>
            <div>
                <div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="../../../../public/assets/video/test.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={'texto'}>
                    <div>
                        <h1>Bienvenido a CARENDAR!</h1>
                        <h2>La plataforma perfecta para tu centro de estética</h2>
                    </div>

                    <Button onClick={() => loginWithRedirect()}>Registrate</Button>
                </div>
            </div>
        </Header>

    );
};

export default Banner;