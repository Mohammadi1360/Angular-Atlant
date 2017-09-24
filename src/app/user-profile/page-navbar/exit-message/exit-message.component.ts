import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';
import {BaseComponent} from '../../base.component';
import {BaseService} from '../../../shared/services/base.service';

@Component({
  selector: 'app-exit-message',
  templateUrl: './exit-message.component.html',
  styleUrls: ['./exit-message.component.css']
})
export class ExitMessageComponent extends BaseComponent implements OnInit {
  @ViewChild('maindiv') maindiv: ElementRef;

  constructor(private router: Router,
              private authService: AuthService, private baseService: BaseService) {
    super(baseService);
  }

  ngOnInit() {
  }

  showExitDialog(): void {
    this.maindiv.nativeElement.className = 'message-box animated fadeIn open';
  }

  btnYesClicked() {
    this.authService.logout();
    window.location.href = '/';
    // this.router.navigate(['/']);
  }

  btnNoClicked() {
    this.maindiv.nativeElement.className = 'message-box animated fadeIn';

  }

}
