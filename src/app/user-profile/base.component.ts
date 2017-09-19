import {Component, EventEmitter, Output} from '@angular/core';
import {BaseService} from '../shared/services/base.service';

@Component({
  selector: 'app-base',
  template: ' '
})
export class BaseComponent {
  @Output() select = new EventEmitter();

  constructor(private _baseService: BaseService) {
  }

  testIt() {
    this.select.emit(3);
  }

  isRtlMode() {
    return this._baseService.isRightToLeftMode();
  }

  isCurrentLang(lang: string) {
    return lang === this._baseService.currentLang;
  }

  selectLang(lang: string) {
    if (!this.isCurrentLang(lang)) {
      this._baseService.use(lang);
      if (this.isRtlMode()) {
        document.getElementById('theme').setAttribute('href', 'assets/css/theme-default_rtl.css');
      } else {
        document.getElementById('theme').setAttribute('href', 'assets/css/theme-default.css');
      }
    }
  }
}


