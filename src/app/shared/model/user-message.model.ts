export class UserMessage {
  constructor(public id: number,
              public fromUser: string,
              public messageTitle: string,
              public messageBody: string,
              public userStatus: string,
              public userPictureUrl: string) {
  }

}
