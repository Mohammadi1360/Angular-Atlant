import {Menu} from '../model/menu.model';
import {menuList} from '../data/menu.data';
import {Subject} from 'rxjs/Subject';

export class MenuService {
  currentCode = new Subject();
  menus: Menu[] = menuList;

  getAllMenu() {
    return this.menus;
  }

  getMenu(menuId: number) {
    const cc = this.getAllMenu().slice();
    return cc.find(
      (s) => {
        return s.id === menuId;
      }
    );
  }

  getMenuChildren(menuPId: number) {
    return this.getAllMenu().filter(
      m => m.pid === menuPId
    );
  }

}
