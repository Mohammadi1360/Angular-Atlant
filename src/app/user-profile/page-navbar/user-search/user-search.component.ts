import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../shared/services/menu.service';

@Component({
  selector: '[app-user-search]',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  @ViewChild('searchBox') searchBox: ElementRef;

  actionNumber = '';

  constructor(private router: Router, private route: ActivatedRoute, private menuService: MenuService) {
  }

  ngOnInit() {
  }

  hotkeys(event) {
    // if (event.keyCode == 65 && event.ctrlKey) {
    //   this.showMessage();
    // }

    // Enter Key = F3
    if (event.keyCode === 114) {
      this.focusAndSelect();
      return false;
    }
  }

  goUserAction() {
    let menuId = 0;
    if (this.actionNumber !== '') {
      menuId = +this.actionNumber;
    }
    this.menuService.doRoutePath(menuId, this.router);
  }

  focusAndSelect() {
    this.searchBox.nativeElement.focus();
    this.searchBox.nativeElement.select();
  }

  onSearchKeyDown() {
    this.menuService.currentCode.next(+this.actionNumber);
  }

}
