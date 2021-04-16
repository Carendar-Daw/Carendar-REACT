import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const DynamicTitle = () => {
  return (
      <ReactTypingEffect
        text={["Arribiiiisima.", "Españistan!!!!!!!!!!!"]}
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
  
      
      
  );
};

export default DynamicTitle
