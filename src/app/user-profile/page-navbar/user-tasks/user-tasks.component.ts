import {Component, ElementRef, OnInit} from '@angular/core';
import {UserTaskService} from '../../../shared/services/user-task.service';
import {UserTask} from '../../../shared/model/user-task.model';
import {Router} from '@angular/router';
import {BaseComponent} from '../../base.component';
import {BaseService} from '../../../shared/services/base.service';

@Component({
  selector: '[app-user-tasks]',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent extends BaseComponent implements OnInit {
  userTasks: UserTask[] = [];

  constructor(private elementRef: ElementRef,
              private userTaskService: UserTaskService,
              private router: Router, private baseService: BaseService) {
    super(baseService);
  }

  ngOnInit() {
    this.userTasks = this.userTaskService.getAllUserTasks() ;
    // this.userTaskService.getAllUserTasks()
    //   .subscribe(
    //     (userTasks: any[]) => this.userTasks = userTasks,
    //     (error) => console.log(error)
    //   );
  }

  getProgress(id: number) {
    const task = this.userTasks.find(
      (s) => {
        return s.id === id;
      }
    );

    return task.progress + '%';
  }

  activeTasks() {
  }

  rowClicked(id: number) {
    this.elementRef.nativeElement.className = 'xn-icon-button pull-left';
    this.router.navigate(['/userProfile/taskDetails'], {queryParams: {taskId: id}});
  }

  footerClicked() {
    this.elementRef.nativeElement.className = 'xn-icon-button pull-left';
    this.router.navigate(['/userProfile/taskList']);
  }

}
