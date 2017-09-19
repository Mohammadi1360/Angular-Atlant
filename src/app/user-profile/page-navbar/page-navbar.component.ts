import {Component, OnInit, ViewChild} from '@angular/core';
import {ExitMessageComponent} from './exit-message/exit-message.component';
import {BaseComponent} from '../base.component';
import {BaseService} from '../../shared/services/base.service';

@Component({
  selector: '[app-page-navbar]',
  templateUrl: './page-navbar.component.html',
  styleUrls: ['./page-navbar.component.css']
})
export class PageNavbarComponent extends BaseComponent implements OnInit {
  @ViewChild(ExitMessageComponent) exitComponent;

  constructor(private baseService: BaseService) {
    super(baseService);
  }

  ngOnInit() {
  }

  onExitClick() {
    this.exitComponent.showExitDialog();
  }

}
