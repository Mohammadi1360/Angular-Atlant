import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ExitMessageComponent} from './user-profile/page-navbar/exit-message/exit-message.component';
import {PageSidebarComponent} from './user-profile/page-sidebar/page-sidebar.component';
import {UserMessagesComponent} from './user-profile/page-navbar/user-messages/user-messages.component';
import {UserTasksComponent} from './user-profile/page-navbar/user-tasks/user-tasks.component';
import {PageNavbarComponent} from './user-profile/page-navbar/page-navbar.component';
import {UserSearchComponent} from './user-profile/page-navbar/user-search/user-search.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserService} from './shared/services/user.service';
import {CustomerRegistrationComponent} from './user-profile/page-contents/customer-registration/customer-registration.component';
import {TranslatePipe} from './translate/translate.pipe';
import {TRANSLATION_PROVIDERS} from './translate/translations';
import {TranslateService} from './translate/translate.service';
import {PageNotFoundComponent} from './user-profile/page-contents/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './shared/services/can-deactivate-guard.service';
import {CustomerCartableComponent} from './user-profile/page-contents/customer-cartable/customer-cartable.component';
import { TableFilterPipe } from './shared/pipe/table-filter.pipe';
import { TaskListComponent } from './user-profile/page-contents/task-list/task-list.component';
import { TaskDetailsComponent } from './user-profile/page-contents/task-details/task-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ExitMessageComponent,
    PageSidebarComponent,
    UserMessagesComponent,
    UserTasksComponent,
    PageNavbarComponent,
    UserSearchComponent,
    LoginPageComponent,
    UserProfileComponent,
    CustomerRegistrationComponent,
    TranslatePipe,
    PageNotFoundComponent,
    CustomerCartableComponent,
    TableFilterPipe,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserService,
    TRANSLATION_PROVIDERS,
    TranslateService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
