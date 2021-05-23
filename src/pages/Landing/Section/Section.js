import React, { useContext } from 'react';
import image from '@Assets/images/images/calendario.svg';
import products from '@Assets/images/images/productsss.svg';
import { I18nContext } from '@Application/lang/language';
import {
  Container, Card, Title, SubTitle, Text, WrapperText, WrapperImg,
} from './Section.styled';

const Section = () => {
  const { messages, language } = useContext(I18nContext);
  return (
    <Container>
      <Card>
        <WrapperText className="left">
          <Title>{messages[language].Section.Title_Left}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Left}</SubTitle>
          <Text>{messages[language].Section.Subtitle_Left_2}</Text>
        </WrapperText>
        <WrapperImg>
          <img src={image} alt="" />
        </WrapperImg>
      </Card>
      <Card reverse>
        <WrapperText className="right">
          <Title>{messages[language].Section.Title_Right}</Title>
          <SubTitle>{messages[language].Section.Subtitle_Right}</SubTitle>
          <Text>{messages[language].Section.Subtitle_Right_2}</Text>
        </WrapperText>
        <WrapperImg>
          <img src={products} alt="" />
        </WrapperImg>
      </Card>
    </Container>
  );
};

export default Section;
