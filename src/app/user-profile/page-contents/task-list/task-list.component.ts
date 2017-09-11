import {Component, OnInit} from '@angular/core';
import {UserTaskService} from '../../../shared/services/user-task.service';
import {UserTask} from '../../../shared/model/user-task.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  userTasks: UserTask[] = [];

  constructor(private router: Router, private userTaskService: UserTaskService) {
  }

  ngOnInit() {
    fillMyTasks();
    this.userTaskService.getAllUserTasks()
      .subscribe(
        (userTasks: any[]) => this.userTasks = userTasks,
        (error) => console.log(error)
      );
  }

  getToDoTasks() {
    return this.userTasks.filter(
      (t) => {
        return t.taskState == 'Failed';
      }
    );
  }

  getInProgressTasks() {
    return this.userTasks.filter(
      (t) => {
        return t.taskState == 'Active';
      }
    );
  }

  getCompletedTasks() {
    return this.userTasks.filter(
      (t) => {
        return t.taskState == 'Completed';
      }
    );
  }

  showTaskById(taskId: number) {
    this.router.navigate(['/userProfile/taskDetails'], {queryParams: {taskId: taskId}});
    // console.log(taskId);
  }

}
