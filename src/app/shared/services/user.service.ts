import {User} from '../model/user.model';

export class UserService {
  private activeUser: User;
  users: User[] = [
    new User('admin', '1'),
    new User('man01', '123456')
  ];

  getUsers() {
    return this.users;
  }

  getUser(inputUser: User) {
    this.activeUser = this.users.find(
      (s) => {
        return s.userName === inputUser.userName;
      }
    );

    return (this.activeUser != null && this.activeUser.password === inputUser.password);
  }

  get currentUser(): User {
    return this.activeUser;
  }
}
