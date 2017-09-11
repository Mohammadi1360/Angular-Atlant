import {UserTask} from '../model/user-task.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {UserTaskDto} from '../model/user-task-dto.model';

@Injectable()
export class UserTaskService {
  // userTasks: UserTask[] = userTaskList;
  userTasks: UserTask[];
  taskDetails: UserTaskDto;
  baseUrl = 'http://172.20.140.11:8080/userRest/';

  constructor(private http: Http) {
  }

  getAllUserTasks() {
    return this.http.get(this.baseUrl + 'userTask')
      .map(
        (response: Response) => {
          this.userTasks = response.json();
          return this.userTasks;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getTaskById(id) {
    return this.http.get(this.baseUrl + 'userTask/' + id).map(
      (response: Response) => {
        this.taskDetails = response.json();
        return this.taskDetails;
      }
    ).catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong');
      }
    );
  }

}
