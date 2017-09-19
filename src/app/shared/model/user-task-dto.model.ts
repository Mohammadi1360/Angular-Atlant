export class UserTaskDto {
  static getTemp = {
    activationTime: '',
    completionTime: '',
    containmentContextID: 0,
    description: '',
    displayName: '',
    dueTime: '',
    kind: '',
    lastModificationTime: '',
    name: '',
    originator: '',
    owner: '',
    priority: 0,
    startTime: '',
    state: '',
    tkiid: 0,
    piid: 0,
    status: '',
    priorityName: '',
    assignedTo: '',
    assignedToType: '',
    serviceID: ''
  };

  constructor(public activationTime: string,
              public completionTime: string,
              public containmentContextID: number,
              public description: string,
              public displayName: string,
              public dueTime: string,
              public kind: string,
              public lastModificationTime: string,
              public name: string,
              public originator: string,
              public owner: string,
              public priority: number,
              public startTime: string,
              public state: string,
              public tkiid: number,
              public piid: number,
              public status: string,
              public priorityName: string,
              public assignedTo: string,
              public assignedToType: string,
              public serviceID: string) {
  }
}
