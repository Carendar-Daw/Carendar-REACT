import React, { useState } from 'react';

import messages, { defaultLanguage, I18nContext } from '@Application/lang/language';

const I18nContextLanguage = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  return (
    <I18nContext.Provider value={{ messages, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nContextLanguage;
