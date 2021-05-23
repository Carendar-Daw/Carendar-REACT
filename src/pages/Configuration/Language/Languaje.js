import React, { useContext, useEffect, useState } from 'react';
import esp from '@Assets/images/Language/España.jpg';
import cat from '@Assets/images/Language/Catalunya.png';
import uk from '@Assets/images/Language/Uk.png';
import { I18nContext } from '@Application/lang/language';
import axios from '@Commons/http';
import { error, success } from '@Commons/components/presentational/MessagesApp/Messages';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import {
  Arrow,
  Dropbtn,
  DropDownContent,
  DropDownLi, Flag,
  StyledUl,
  SubA,
} from './Language.styled';

const Languaje = () => {
  const { messages, language, setLanguage } = useContext(I18nContext);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(async () => {
    try {
      setLoadingSpinner(true);
      const lan = await axios.get('language');
      setLanguage(lan.data.language);
      success(messages[language].UserConfig.SuccessLanguage);
    } catch (errors) {
      error(messages[language].UserConfig.ErrorLanguage);
    } finally {
      setLoadingSpinner(false);
    }
  }, []);

  const changeLanguage = async (lang) => {
    try {
      setLoadingSpinner(true);
      await axios.put('language', { lan_preference: lang });
      setLanguage(lang);
      success(messages[language].UserConfig.EditLanguage);
    } catch (errors) {
      error(messages[language].UserConfig.ErrorEditLanguage);
    } finally {
      setLoadingSpinner(false);
    }
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
      {loadingSpinner && <Spinner />}
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
