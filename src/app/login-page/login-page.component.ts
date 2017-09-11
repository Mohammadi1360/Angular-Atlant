import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/model/user.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  loginError = false;

  user: User = {userName: '', password: ''};

  constructor(private userService: UserService,
              private router: Router,
              private renderer: Renderer2,
              private authService: AuthService) {
    this.renderer.setAttribute(document.getElementsByTagName('html').item(0), 'class', 'body-full-height');
  }

  ngOnInit() {
  }

  onSubmit() {
    const flag = this.userService.getUser(this.user);
    if (flag) {
      this.loginError = false;
      this.authService.login();
      this.router.navigate(['/userProfile']);
    } else {
      // alert('login error');
      this.loginError = true;
      this.router.navigate(['/']);
    }

  }
}