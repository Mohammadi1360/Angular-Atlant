import {User} from '../model/user.model';
export class UserService {
  users: User[] = [
    new User('admin', '1'),
    new User('user', '1')
  ];

  getUsers() {
    return this.users;
  }

  getUser(inputUser: User) {
    const user = this.users.find(
      (s) => {
        return s.userName === inputUser.userName;
      }
    );

    return (user != null && user.password === inputUser.password);
  }

}
