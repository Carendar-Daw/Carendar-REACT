import React, { useContext } from 'react';
import image from '@Assets/images/images/calendar.png';
import { I18nContext } from '@Application/lang/language';
import {
  Container, Card, Title, SubTitle, Text, WrapperText, WrapperImg,
} from './Section.styled';

const Section = () => {
  const { messages, language } = useContext(I18nContext);
  return (
    <Container>
      <Card>
        <WrapperText>
          <Title>{messages[language].Section.Title_Left}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Left}</SubTitle>
          <Text>{messages[language].Section.Subtitle_Left_2}</Text>
        </WrapperText>
        <WrapperImg>
          <img src={image} alt="" />
        </WrapperImg>
      </Card>
      <Card reverse>
        <WrapperText>
          <Title>{messages[language].Section.Title_Right}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Right}</SubTitle>
        </WrapperText>
        <WrapperImg>
          <img src={messages[language].Section.StockPhoto} alt="" />
        </WrapperImg>
      </Card>
    </Container>
  );
};

export default Section;
