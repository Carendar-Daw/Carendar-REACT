import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Card, Heading, List, UList, ContainerCenter,
} from './Main.styled';

const Main = () => (
  <Container>
    <h3>Title</h3>
    <ContainerCenter>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="calendar-alt" />
          <Heading>Calendar</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="cut" />
          <Heading>Services</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="tablet-alt" />
          <Heading>Excellent for tablet</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="database" />
          <Heading>Control your stock</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="clock" />
          <Heading>Save time</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
      <Card>
        <div>
          <FontAwesomeIcon className="icon" icon="users" />
          <Heading>Save your clients</Heading>
        </div>
        <UList>
          <List>Lorem ipsum dolor sit amet.</List>
          <List>Lorem ipsum dolor sit amet.</List>
        </UList>
      </Card>
    </ContainerCenter>
  </Container>

);

export default Main;
