import {Component, OnInit} from '@angular/core';
import {BaseService} from './shared/services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public supportedLanguages: any[];

  ngOnInit(): void {
    this.supportedLanguages = [
      {display: 'English', value: 'en'},
      {display: 'Farsi', value: 'fa'}
    ];

    this.baseService.use('fa');
  }


  constructor(private baseService: BaseService) {
  }
}
