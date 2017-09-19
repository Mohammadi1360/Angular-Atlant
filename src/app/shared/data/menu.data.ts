import {Menu} from '../model/menu.model';

export let menuListFa: Menu[] = [
  new Menu(41, 0, 'منو شماره یک', 'fa-retweet'),
  new Menu(42, 0, 'منو شماره دو', 'fa-retweet'),
  new Menu(43, 0, 'منو شماره سه', 'fa-retweet'),
  new Menu(44, 0, 'منو شماره چهار', 'fa-retweet'),

  new Menu(411, 41, 'زیر منو یک - 1', 'fa-check'),
  new Menu(412, 41, 'زیر منو یک - 2', 'fa-check'),
  new Menu(413, 41, 'زیر منو یک - 3', 'fa-check'),

  new Menu(4131, 413, 'لیست مشتریان', 'fa-check'),
  new Menu(4132, 413, 'جستجوی مشتری', 'fa-check'),
  new Menu(4133, 413, 'لیست تسک ها', 'fa-check'),
  new Menu(4134, 413, 'جزئیات تسک', 'fa-check'),

];

export let menuListEn: Menu[] = [
  new Menu(41, 0, 'Menu No 1', 'fa-retweet'),
  new Menu(42, 0, 'Menu No 2', 'fa-retweet'),
  new Menu(43, 0, 'Menu No 3', 'fa-retweet'),
  new Menu(44, 0, 'Menu No 4', 'fa-retweet'),

  new Menu(411, 41, 'SubMenu No 1', 'fa-check'),
  new Menu(412, 41, 'SubMenu No 2', 'fa-check'),
  new Menu(413, 41, 'SubMenu No 3', 'fa-check'),

  new Menu(4131, 413, 'Customer List', 'fa-check'),
  new Menu(4132, 413, 'Search Customer', 'fa-check'),
  new Menu(4133, 413, 'Task List', 'fa-check'),
  new Menu(4134, 413, 'Task Details', 'fa-check'),


];
