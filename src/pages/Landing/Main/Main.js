import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import {
  Container, Card, Heading, List, UList, ContainerCenter, Title, SubTitle, WrapperMainTitles,
} from './Main.styled';

const Main = () => {
  const { messages, language } = useContext(I18nContext);
  return (
    <Container>
      <WrapperMainTitles>
        <Title>{messages[language].Main.Title}</Title>
        <SubTitle>{messages[language].Main.SubTitle}</SubTitle>
      </WrapperMainTitles>
      <ContainerCenter>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="calendar-alt" />
            <Heading>{messages[language].Main.Calendario}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Cal_Info_1}</List>
            <List>{messages[language].Main.Cal_Info_2}</List>
          </UList>
        </Card>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="cut" />
            <Heading>{messages[language].Main.Servicios}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Serv_Info}</List>
          </UList>
        </Card>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="tablet-alt" />
            <Heading>{messages[language].Main.Tablet}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Tablet_Info}</List>
          </UList>
        </Card>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="database" />
            <Heading>{messages[language].Main.Stock}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Stock_Info_1}</List>
            <List>{messages[language].Main.Stock_Info_2}</List>
          </UList>
        </Card>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="clock" />
            <Heading>{messages[language].Main.Tiempo}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Tiempo_Info}</List>
          </UList>
        </Card>
        <Card>
          <div>
            <FontAwesomeIcon className="icon" icon="cash-register" />
            <Heading>{messages[language].Main.Caja}</Heading>
          </div>
          <UList>
            <List>{messages[language].Main.Caja_Info}</List>
          </UList>
        </Card>
      </ContainerCenter>
    </Container>
  );
};
export default Main;
