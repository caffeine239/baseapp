import { RootState } from '../../index';
import { LanguageState } from './reducer';

export const selectCurrentLanguage = (state: RootState): LanguageState['lang'] =>
    state.public.i18n.lang;
