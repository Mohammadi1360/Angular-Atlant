import {UserMessage} from '../model/user-message.model';

export let userMessageList: UserMessage[] = [
  new UserMessage(560, 'محمد محمدی', 'دریافت مجوز حضور در همایش', '--', 'status-online', 'assets/images/users/user1.jpg'),
  new UserMessage(561, 'صادق هدایت', 'درخواست مرخصی روزانه', '--', 'status-away', 'assets/images/users/user2.jpg'),
  new UserMessage(562, 'فروغ فرخ زاد', 'ثبت اسناد دریافتی', '--', 'status-offline', 'assets/images/users/user3.jpg'),
  new UserMessage(563, 'ایمان علی عبدی', 'ارسال فایل حضور غیاب', '--', 'status-online', 'assets/images/users/user4.jpg'),


];
