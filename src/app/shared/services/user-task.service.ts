import {UserTask} from '../model/user-task.model';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {userTaskList} from '../data/user-task.data';

@Injectable()
export class UserTaskService {
  userTasks: UserTask[] = userTaskList;
  // userTasks: UserTask[];
  taskDetails: UserTask;
  baseUrl = 'http://172.20.140.11:8080/userRest/';

  constructor(private http: Http) {
  }

  getAllUserTasks() {
    return this.userTasks;
    // return this.http.get(this.baseUrl + 'userTask')
    //   .map(
    //     (response: Response) => {
    //       this.userTasks = response.json();
    //       return this.userTasks;
    //     }
    //   )
    //   .catch(
    //     (error: Response) => {
    //       return Observable.throw('Something went wrong');
    //     }
    //   );
  }

  getTaskById(id) {
    this.taskDetails = this.userTasks.find(
      (s) => {
        return s.id === id;
      }
    );

    return this.taskDetails;

    // return this.http.get(this.baseUrl + 'userTask/' + id).map(
    //   (response: Response) => {
    //     this.taskDetails = response.json();
    //     return this.taskDetails;
    //   }
    // ).catch(
    //   (error: Response) => {
    //     console.log(error);
    //     return Observable.throw('Something went wrong');
    //   }
    // );
  }

}
