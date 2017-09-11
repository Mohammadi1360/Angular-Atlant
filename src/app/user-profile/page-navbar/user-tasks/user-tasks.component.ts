import {Component, ElementRef, OnInit} from '@angular/core';
import {UserTaskService} from '../../../shared/services/user-task.service';
import {UserTask} from '../../../shared/model/user-task.model';
import {Router} from '@angular/router';

@Component({
  selector: '[app-user-tasks]',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  userTasks: UserTask[] = [];

  constructor(private elementRef: ElementRef,
              private userTaskService: UserTaskService,
              private router: Router) {
  }

  ngOnInit() {
    this.userTaskService.getAllUserTasks()
      .subscribe(
        (userTasks: any[]) => this.userTasks = userTasks,
        (error) => console.log(error)
      );
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
