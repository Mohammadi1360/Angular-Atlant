import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserTaskService} from '../../../shared/services/user-task.service';
import {UserTaskDto} from '../../../shared/model/user-task-dto.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  id = 0;
  private sub: Subscription;
  userTaskDetails: UserTaskDto = UserTaskDto.getTemp;

  constructor(private route: ActivatedRoute, private userTaskService: UserTaskService) {
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = +params['taskId'] || 0;
      });

    this.userTaskService.getTaskById(this.id)
      .subscribe(
        (userTaskDto: UserTaskDto) => this.userTaskDetails = userTaskDto,
        (error) => console.log(error)
      );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
