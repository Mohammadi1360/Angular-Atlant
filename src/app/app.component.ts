import {Component, OnInit} from '@angular/core';
import {BaseService} from './shared/services/base.service';
import {BaseComponent} from './user-profile/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit {
  public supportedLanguages: any[];

  ngOnInit(): void {
    this.supportedLanguages = [
      {display: 'English', value: 'en'},
      {display: 'Farsi', value: 'fa'}
    ];

    this.setAppLang();
  }

  constructor(private baseService: BaseService) {
    super(baseService);
  }
}
