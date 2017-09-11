import {AfterViewInit, Component, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {CustomerService} from '../../../shared/services/customer.service';
import {Customer} from '../../../shared/model/customer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PageMode} from '../../../shared/enum/page-mode.enum';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-customer-cartable',
  templateUrl: './customer-cartable.component.html',
  styleUrls: ['./customer-cartable.component.css'],
  providers: [CustomerService]
})
export class CustomerCartableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('myTable') myTable;
  @ViewChildren('searchText') searchText;

  private sub: Subscription;
  customerList: Array<Customer>;
  selectedRow = 0;
  showMessagePleaseSelectOne = false;
  showMessageDeletedSuccessfully = false;
  isDesc = false;
  column = 'customerId';
  filteredString = '';

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
  }

  setClickedRow(index) {
    this.selectedRow = index;
    this.showMessagePleaseSelectOne = false;
    this.showMessageDeletedSuccessfully = false;
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.showMessageDeletedSuccessfully = params['deleted'] || false;
      });

    this.customerList = this.customerService.getCustomers();
    // this.customerService.getAllCustomer();
    if (this.customerList.length > 0) {
      this.selectedRow = this.customerList[0].customerId;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  recordIsSelected(): boolean {
    if (this.selectedRow === 0) {
      this.showMessagePleaseSelectOne = true;
      return false;
    } else {
      return true;
    }
  }

  deleteCustomer() {
    if (this.recordIsSelected()) {
      this.router.navigate(['/userProfile/customerRegistration'], {
        queryParams: {
          id: this.selectedRow,
          pageMode: PageMode.DELETE
        }
      });
    }
  }

  editCustomer() {
    if (this.recordIsSelected()) {
      this.router.navigate(['/userProfile/customerRegistration'], {
        queryParams: {
          id: this.selectedRow,
          pageMode: PageMode.EDIT
        }
      });
    }
  }

  viewCustomer() {
    if (this.recordIsSelected()) {
      this.router.navigate(['/userProfile/customerRegistration'], {
        queryParams: {
          id: this.selectedRow,
          pageMode: PageMode.VIEW
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.myTable.first.nativeElement.focus();
  }

  keyDown(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    if (event.ctrlKey && event.key == 'f') {
      this.searchText.first.nativeElement.focus();
      event.preventDefault();
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        this.selectedRow = this.getRowId(1);
        break;
      case 'ArrowUp':
        this.selectedRow = this.getRowId(-1);
        break;
      case 'Insert':
        this.insertCustomer();
        break;
      case 'F2':
        this.editCustomer();
        break;
      case 'Delete':
        this.deleteCustomer();
        break;
      case 'Enter':
        this.viewCustomer();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  getRowId(i) {
    const index = this.customerList.findIndex(
      (s) => {
        return s.customerId === this.selectedRow;
      }
    );
    return this.customerList[index + i].customerId;
  }

  insertCustomer() {
    this.router.navigate(['/userProfile/customerRegistration'], {queryParams: {id: 0, pageMode: PageMode.INSERT}});
  }

  sort(property) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    const direction = this.isDesc ? 1 : -1;

    this.customerList.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return direction;
      } else {
        return 0;
      }
    });
  }

}
