import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './user-profile/page-contents/page-not-found/page-not-found.component';
import {CustomerRegistrationComponent} from './user-profile/page-contents/customer-registration/customer-registration.component';
import {CustomerCartableComponent} from './user-profile/page-contents/customer-cartable/customer-cartable.component';
import {TaskListComponent} from './user-profile/page-contents/task-list/task-list.component';
import {TaskDetailsComponent} from './user-profile/page-contents/task-details/task-details.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CanDeactivateGuard} from './shared/services/can-deactivate-guard.service';
import {AuthGuard} from './auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/loginPage', pathMatch: 'full'},
  {path: 'loginPage', component: LoginPageComponent},
  {
    path: 'userProfile',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard], window.location.href <===
    component: UserProfileComponent,
    children: [
      {path: 'customerSearch', component: CustomerRegistrationComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'customerRegistration', component: CustomerRegistrationComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'customerCartable', component: CustomerCartableComponent},
      {path: 'taskList', component: TaskListComponent},
      {path: 'taskDetails', component: TaskDetailsComponent},
      {path: 'not-found', component: PageNotFoundComponent, data: {message: 'page not found'}}
    ]
  },
  {path: 'something', redirectTo: '/userProfile/not-found'},
  {path: '**', redirectTo: '/userProfile/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
