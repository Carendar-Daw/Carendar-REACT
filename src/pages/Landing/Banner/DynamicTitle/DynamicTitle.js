import React, { useState, useEffect, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';

const DynamicTitle = () => {
  const { messages, language } = useContext(I18nContext);
  const title = [`${messages[language].Welcome.WelcomeBanner}`];
  const subtitle = [`${messages[language].Welcome.WelcomeSubTitle}`];
  const [index] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [subIndexSub, setSubIndexSub] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, (158));

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    const timeoutSub = setTimeout(() => {
      setSubIndexSub((prev) => prev + 1);
    }, (73));

    return () => clearTimeout(timeoutSub);
  }, [subIndexSub, index]);

  return (
    <>
      <h1 className="titulo">
        {`${title[index].substring(0, subIndex)}`}
      </h1>
      <h2 className="subtitulo">
        {`${subtitle[index].substring(0, subIndexSub)}`}
      </h2>
    </>
  );
};
export default DynamicTitle;
