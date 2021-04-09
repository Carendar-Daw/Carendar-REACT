import { Header, Button } from './Banner.styled';


const Banner = () => {
    return (
        <Header>
            <div>
                <div>
                    <h1>Bienvenido a CARENDAR!</h1>
                    <h2>La plataforma perfecta para tu peluqueria</h2>
                </div>
                <Button>Registrate</Button>
            </div>
        </Header>

    );
};

export default Banner;