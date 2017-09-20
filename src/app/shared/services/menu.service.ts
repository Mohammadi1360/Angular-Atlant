import {Menu} from '../model/menu.model';
import {menuListEn, menuListFa} from '../data/menu.data';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Router} from '@angular/router';
import {PageMode} from '../enum/page-mode.enum';

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

  doRoutePath(menuId: number, router: Router) {
    switch (menuId) {
      case 0: {
        router.navigate(['/userProfile']);
        break;
      }
      case 4131: {
        router.navigate(['/userProfile/customerCartable']);
        break;
      }
      case 4132: {
        router.navigate(['/userProfile/customerRegistration'], {
          queryParams: {pageMode: PageMode.SEARCH}
        });
        break;
      }
      case 4133: {
        router.navigate(['/userProfile/taskList']);
        break;
      }
      case 4134: {
        router.navigate(['/userProfile/taskDetails']);
        break;
      }
      default: {
        return;
      }
    }
  }

}
