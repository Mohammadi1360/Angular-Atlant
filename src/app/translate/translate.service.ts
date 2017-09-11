import {Inject, Injectable} from '@angular/core';
import {TRANSLATIONS} from './translations';

/**
 * Created by User on 07/18/2017.
 */

@Injectable()
export class TranslateService {

  private _currentLang: string;

  public get currentLang() {
    return this._currentLang;
  }

  constructor(@Inject(TRANSLATIONS) private translations: any) {
  }

  public use(lang: string): void {
    // set current language
    this._currentLang = lang;
  }

  private translate(key: string): string {
    // private perform translation
    const translation = key;

    if (this.translations[this._currentLang] && this.translations[this._currentLang][key]) {
      return this.translations[this._currentLang][key];
    }

    return translation;
  }

  public instant(key: string): string {
    // call translation
    return this.translate(key);
  }

}

