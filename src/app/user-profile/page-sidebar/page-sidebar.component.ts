import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';
import {Subscription} from 'rxjs/Subscription';
import {Menu} from '../../shared/model/menu.model';

@Component({
  selector: '[app-page-sidebar]',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.css']
})
export class PageSidebarComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  passedMenuNumber = 0;


  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.numberSubscription = this.menuService.currentCode.subscribe(
      (currentCode: number) => {
        this.passedMenuNumber = currentCode;
      }
    );

  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }

  getMenuListRoot(id: number) {
    const menus: Menu[] = this.menuService.getMenuChildren(id).slice();
    if (menus.length > 0) {
      return menus;
    } else {
      const menu: Menu = this.menuService.getMenu(id);
      if (menu != null) {
        menus.push(menu);
      }
    }
    return menus;
  }

  getMenuListByPid(pid: number) {
    return this.menuService.getMenuChildren(pid).slice();
  }

  menuHasChild(pid: number) {
    return (this.menuService.getMenuChildren(pid).length > 0);
  }

}
