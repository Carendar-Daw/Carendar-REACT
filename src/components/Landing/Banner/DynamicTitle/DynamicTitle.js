import React , { useState, useEffect, useContext} from "react";
import {I18nContext} from "../../../../config/language";

const DynamicTitle = () =>{
  const { messages, language } = useContext(I18nContext);
  const title = [`${messages[language].Welcome.WelcomeBanner}`];
  const subtitle = [`${messages[language].Welcome.WelcomeSubTitle}`]
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  // Title
  useEffect(() => {
    if (index === title.length) return;

    if ( subIndex === title[index].length + 1 && 
        index !== title.length - 1) {
      return;
    }

    if (subIndex === 0 && subIndex>= title.length) {
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1)
    }, (150));

    return () => clearTimeout(timeout);
  }, [subIndex, index]);



  return (
    <>
      <h1 className="titulo">
        {`${title[index].substring(0, subIndex)}`}
      </h1>
      <h2 className="subtitulo">
      {`${subtitle[index].substring(0, subIndex)}`}
      </h2>
    </>
  );
};
  export default DynamicTitle;
