import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserTaskService} from '../../../shared/services/user-task.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {UserTask} from '../../../shared/model/user-task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  id = 0;
  private sub: Subscription;
  userTaskDetails: UserTask;

  // userTaskDetails: UserTaskDto = UserTaskDto.getTemp;

  constructor(private route: ActivatedRoute, private userTaskService: UserTaskService) {
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = +params['taskId'] || 0;
        this.getTaskDetails();
      });
  }

  getTaskDetails() {
    this.userTaskDetails = this.userTaskService.getTaskById(this.id);
    // this.userTaskService.getTaskById(this.id)
    //   .subscribe(
    //     (userTaskDto: UserTaskDto) => this.userTaskDetails = userTaskDto,
    //     (error) => console.log(error)
    //   );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
