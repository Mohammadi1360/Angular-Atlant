import {Component, ElementRef, OnInit} from '@angular/core';
import {UserMessageService} from '../../../shared/services/user-message.service';
import {UserMessage} from '../../../shared/model/user-message.model';
import {BaseComponent} from '../../base.component';
import {BaseService} from '../../../shared/services/base.service';

@Component({
  selector: '[app-user-messages]',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
  providers: [UserMessageService]
})
export class UserMessagesComponent extends BaseComponent implements OnInit {
  userMessages: UserMessage[];

  constructor(private elementRef: ElementRef,
              private userMessageService: UserMessageService, private baseService: BaseService) {
    super(baseService);
  }

  ngOnInit() {
    this.userMessages = this.userMessageService.getAllUserMessages();
  }

  rowClicked(id: number) {
    console.log(id);
    this.elementRef.nativeElement.className = 'xn-icon-button pull-left';
  }

  footerClicked() {
    this.elementRef.nativeElement.className = 'xn-icon-button pull-left';
  }

  activeMessages() {
  }

}
