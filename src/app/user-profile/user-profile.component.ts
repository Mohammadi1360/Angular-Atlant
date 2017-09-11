import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {MenuService} from '../shared/services/menu.service';
import {UserTaskService} from '../shared/services/user-task.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [MenuService, UserTaskService],
  encapsulation: ViewEncapsulation.None
})

export class UserProfileComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.setAttribute(document.getElementsByTagName('html').item(0), 'class', '');
  }

  ngOnInit() {
    fillActions();
  }

}
