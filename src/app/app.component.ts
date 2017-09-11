import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public translatedText: string;
  public supportedLanguages: any[];

  ngOnInit(): void {

    this.supportedLanguages = [
      {display: 'English', value: 'en'},
      {display: 'Farsi', value: 'fa'}
    ];

    // set current langage
    this.selectLang('fa');
  }


  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }

  constructor(private _translate: TranslateService) {
  }
}
