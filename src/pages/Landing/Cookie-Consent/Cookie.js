import CookieConsent from 'react-cookie-consent';
import React, { useContext } from 'react';
import { I18nContext } from '@Application/lang/language';

const Cookie = () => {
  const { messages, language } = useContext(I18nContext);
  const text = (
    <>
      {messages[language].Cookies.Explanation}
      {' '}
      <a style={{ color: 'yellow' }} href="https://www.privacypolicies.com/live/81644df6-e34e-4744-90b4-bf8d0ac41014" target="_blank" rel="noreferrer">{messages[language].Cookies.PrivacyPolitics}</a>
      .
    </>

  );
  return (
    <CookieConsent
      location="bottom"
      buttonText={messages[language].Cookies.Accept}
      style={{ background: '#8265A7' }}
      buttonStyle={{ background: '#dacfff' }}
      expires={150}
    >
      {text}
    </CookieConsent>
  );
};

export default Cookie;
