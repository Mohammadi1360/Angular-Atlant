import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {TranslateService} from '../../translate/translate.service';
import {CookieService} from 'ngx-cookie';
import {isUndefined} from 'util';

@Injectable()
export class BaseService {
  constructor(private translate: TranslateService, private _cookieService: CookieService) {
  }

  public isRightToLeftMode(): boolean {
    return (this.currentLang === 'fa');
  }

  public useWithSetCookie(lang: string): void {
    this.translate.use(lang);
    this.putCookie('selectedLanguage', lang);
  }

  public use(lang: string): void {
    this.translate.use(lang);
  }

  // public setAppLang(): void {
  //
  // }

  public get currentLang() {
    return this.translate.currentLang;
  }

  public get currentLangCookie() {
    return this.getCookie('selectedLanguage');
  }

  public translateKey(key: string): string {
    return this.translate.instant(key);
  }

  getCookie(key: string) {
    const theValue = this._cookieService.get(key);
    if (isUndefined(theValue)) {
      return '';
    } else {
      return theValue;
    }
  }

  putCookie(key: string, value: string) {
    this._cookieService.remove(key);
    return this._cookieService.put(key, value);
  }
}
