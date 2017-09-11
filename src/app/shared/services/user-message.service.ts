import {UserMessage} from '../model/user-message.model';
import {userMessageList} from '../data/user-message.data';

export class UserMessageService {
  userMessages: UserMessage[] = userMessageList;

  getAllUserMessages() {
    return this.userMessages;
  }


}
