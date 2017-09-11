import {Component, ElementRef, OnInit} from '@angular/core';
import {UserMessageService} from '../../../shared/services/user-message.service';
import {UserMessage} from '../../../shared/model/user-message.model';

@Component({
  selector: '[app-user-messages]',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
  providers: [UserMessageService]
})
export class UserMessagesComponent implements OnInit {
  userMessages: UserMessage[];

  constructor(private elementRef: ElementRef,
              private userMessageService: UserMessageService) {
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
