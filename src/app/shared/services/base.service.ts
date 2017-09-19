import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {TranslateService} from '../../translate/translate.service';

@Injectable()
export class BaseService {
  constructor(private translate: TranslateService) {
  }

  public isRightToLeftMode(): boolean {
    return (this.currentLang === 'fa');
  }

  public use(lang: string): void {
    this.translate.use(lang);
  }

  public get currentLang() {
    return this.translate.currentLang;
  }

  public translateKey(key: string): string {
    return this.translate.instant(key);
  }
}
