import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {MenuService} from '../shared/services/menu.service';
import {UserTaskService} from '../shared/services/user-task.service';
import {BaseComponent} from './base.component';
import {BaseService} from '../shared/services/base.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [MenuService, UserTaskService],
  encapsulation: ViewEncapsulation.None
})

export class UserProfileComponent extends BaseComponent implements OnInit {
  constructor(private renderer: Renderer2, private baseService: BaseService) {
    super(baseService);
  }

  ngOnInit() {
    this.renderer.setAttribute(document.getElementsByTagName('html').item(0), 'class', '');
    fillActions();
  }
}
