import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../shared/services/menu.service';
import {PageMode} from '../../../shared/enum/page-mode.enum';

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
    // if (keyEvent.which === 13) {
    // this.searchBox.nativeElement.select();

    switch (this.actionNumber) {
      case '4131': {
        // this.router.navigate(['/userProfile/customerCartable']);
        this.router.navigate(['/userProfile/customerCartable']);
        break;
      }
      case '4132': {
        this.router.navigate(['/userProfile/customerRegistration'], {
          queryParams: {pageMode: PageMode.SEARCH}
        });
        break;
      }
      case '4133': {
        this.router.navigate(['/userProfile/taskList']);
        break;
      }
      case '4134': {
        this.router.navigate(['/userProfile/taskDetails']);
        break;
      }
      case '': {
        this.router.navigate(['/userProfile']);
        break;
      }
      default: {
        this.router.navigate(['not-found'], {relativeTo: this.route});
        break;
      }
    }
    // }
  }

  focusAndSelect() {
    this.searchBox.nativeElement.focus();
    this.searchBox.nativeElement.select();
  }

  onSearchKeyDown() {
    this.menuService.currentCode.next(+this.actionNumber);
  }

}
