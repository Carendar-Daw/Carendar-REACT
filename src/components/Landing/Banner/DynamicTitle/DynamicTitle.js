import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {useContext} from "react";
import {I18nContext} from "../../../../config/language";

const DynamicTitle = () => {
    const { messages, language } = useContext(I18nContext);
    /*const title = messages[language].Welcome.WelcomeBanner;
    const subtitle = messages[language].Welcome.WelcomeSubTitle;*/
  return (
    <>
    <ReactTypingEffect
        text={[`${messages[language].Welcome.WelcomeBanner}`]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> 
    
      <ReactTypingEffect
    
        text={[`${messages[language].Welcome.WelcomeSubTitle}`]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
                <br/>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> 
      
      </>
  
      

  );
};

export default DynamicTitle
