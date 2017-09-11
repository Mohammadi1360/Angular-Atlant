export class UserTask {
  constructor(public id: number,
              public taskTitle: string,
              public assigneeUser: string,
              public taskDueDate: string ,
              public taskState: string ,
              public taskPriority: string ,
              public progress: number) {
  }

}
