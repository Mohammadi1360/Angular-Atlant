import {Menu} from '../model/menu.model';
import {menuListEn, menuListFa} from '../data/menu.data';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {BaseService} from './base.service';

@Injectable()
export class MenuService {
  currentCode = new Subject();
  menus: Menu[] = menuListFa;

  constructor(private baseService: BaseService) {
  }

  getAllMenu() {
    if (this.baseService.currentLang === 'fa') {
      this.menus = menuListFa;
    }
    if (this.baseService.currentLang === 'en') {
      this.menus = menuListEn;
    }
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
