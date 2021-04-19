import { createContext } from "react";
import es from './es.json';
import en from './en.json';
import ca from './ca.json';

export const I18nContext = createContext(undefined);
export const defaultLanguage = 'es';

export default { es, en, ca };