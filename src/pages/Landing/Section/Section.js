import React, { useContext } from 'react';
import {
  Container, Card, Title, SubTitle, Text,
} from './Section.styled';
import image from '@Assets/images/logos/logo-carendar.png';
import { I18nContext } from '@Application/lang/language';

const Section = () => {
  const { messages, language } = useContext(I18nContext);
  return (
    <Container>
      <Card>
        <div>
          <Title>{messages[language].Section.Title_Left}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Left}</SubTitle>
          <Text>{messages[language].Section.Subtitle_Left_2}</Text>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </Card>
      <Card reverse>
        <div>
          <Title>{messages[language].Section.Title_Right}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Right}</SubTitle>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </Card>
    </Container>
  );
};

export default Section;
