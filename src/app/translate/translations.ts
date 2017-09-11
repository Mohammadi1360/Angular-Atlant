import {LANG_EN_NAME, LANG_EN_TRANS} from './lang-en';
import {LANG_FA_NAME, LANG_FA_TRANS} from './lang-fa';

/**
 * Created by User on 07/18/2017.
 */

// translation token
export const TRANSLATIONS = 'translations';

// all translations
export const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_FA_NAME]: LANG_FA_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  {provide: TRANSLATIONS, useValue: dictionary,
  }

];
