import {Component, OnInit, ViewChild} from '@angular/core';
import {ExitMessageComponent} from './exit-message/exit-message.component';

@Component({
  selector: '[app-page-navbar]',
  templateUrl: './page-navbar.component.html',
  styleUrls: ['./page-navbar.component.css']
})
export class PageNavbarComponent implements OnInit {
  @ViewChild(ExitMessageComponent) exitComponent;

  constructor() {
  }

  ngOnInit() {
  }

  onExitClick() {
    this.exitComponent.showExitDialog();
  }

}
