import React, { useContext } from 'react';
import esp from '@Assets/images/Language/España.jpg';
import cat from '@Assets/images/Language/Catalunya.png';
import uk from '@Assets/images/Language/Uk.png';
import { I18nContext } from '@Application/lang/language';
import {
  Arrow,
  Dropbtn,
  DropDownContent,
  DropDownLi, Flag,
  StyledUl,
  SubA,
} from './Language.styled';

const Languaje = () => {
  const { language, setLanguage } = useContext(I18nContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  let isLenguageSelected = '';

  if (language === 'es') {
    isLenguageSelected = (<Flag src={esp} />);
  } else if (language === 'ca') {
    isLenguageSelected = (<Flag src={cat} />);
  } else {
    isLenguageSelected = (<Flag src={uk} />);
  }

  return (
    <StyledUl>
      <DropDownLi>
        <Dropbtn>
          {isLenguageSelected}
        </Dropbtn>
        <DropDownContent>
          {' '}
          <SubA onClick={() => changeLanguage('es')}>
            <Flag src={esp} />
            {' '}
            Español
          </SubA>
          <SubA onClick={() => changeLanguage('ca')}>
            <Flag src={cat} />
            {' '}
            Català
          </SubA>
          <SubA onClick={() => changeLanguage('en')}>
            <Flag src={uk} />
            {' '}
            English
          </SubA>
        </DropDownContent>
      </DropDownLi>
      <Arrow />
    </StyledUl>
  );
};

export default Languaje;
