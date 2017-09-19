import {UserTask} from '../model/user-task.model';

export let userTaskList: UserTask[] = [
  new UserTask(120, 'ثبت تغییرات مورد نیاز', 'محمد نادری', '1396/05/09', 'InProgress', 'High', 15),
  new UserTask(121, 'گزارش کار های روزانه', 'صادق علیزاده', '1396/04/19', 'TODO', 'High', 46),
  new UserTask(122, 'لیست تماس های دریافتی', 'راحله حکیمی', '1396/01/12', 'Completed', 'Low', 100),
  new UserTask(122, 'لیست تماس های دریافتی', 'الهه نادری', '1396/01/12', 'TODO', 'Low', 3),
  new UserTask(122, 'لیست تماس های دریافتی', 'معصومه صناعی', '1396/01/12', 'TODO', 'High', 2),
  new UserTask(122, 'لیست تماس های دریافتی', 'حسین حمیدی', '1396/01/12', 'TODO', 'Medium', 1)

];
