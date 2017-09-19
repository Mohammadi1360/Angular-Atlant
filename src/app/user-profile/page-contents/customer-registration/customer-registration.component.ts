import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Customer} from '../../../shared/model/customer.model';
import {CustomerService} from '../../../shared/services/customer.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CanComponentDeactivate} from '../../../shared/services/can-deactivate-guard.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {PageMode} from '../../../shared/enum/page-mode.enum';
import {BaseComponent} from '../../base.component';
import {BaseService} from '../../../shared/services/base.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
  providers: [CustomerService]
})
export class CustomerRegistrationComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy, CanComponentDeactivate {
  @ViewChild('customerForm') customerForm: NgForm;
  @ViewChildren('mainDiv') mainDiv;
  @ViewChildren('customerId') searchId;

  pageMode: PageMode = PageMode.INSERT;
  PageMode: any = PageMode;
  readOnly = false;

  showMessageSearchError = false;
  showMessageInsertSuccess = false;
  showMessageEditSuccess = false;
  showMessageDeleteSuccess = false;
  changesSaved = false;
  id = 0;
  private sub: Subscription;

  customer: Customer;
  tempCustomer: Customer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    fatherName: '',
    certificateCode: 0,
    birthDay: 0,
    birthMonth: 0,
    birthYear: 0,
    nationalCode: '',
    mobileNumber: '',
    birthLocation: '',
    email: '',
    address: '',
    receiveEmail: false
  };

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private baseService: BaseService) {
    super(baseService);
  }

  onSearchClick() {
    const resultCustomer = this.customerService.getCustomer(+this.customerForm.value.customerId);
    console.log('search clicked');
    this.showMessageSearchError = (null == resultCustomer );
    if (!this.showMessageSearchError) {
      this.customer = resultCustomer;
    } else {
      this.customer = this.tempCustomer;
    }

  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = +params['id'] || 0;
        this.pageMode = params['pageMode'] || PageMode.INSERT;
      });

    if (this.pageMode == PageMode.EDIT || this.pageMode == PageMode.VIEW || this.pageMode == PageMode.DELETE) {
      this.customer = this.customerService.getCustomer(this.id);
    } else {
      this.customer = this.tempCustomer;
    }

    this.readOnly = ( this.pageMode != PageMode.INSERT && this.pageMode != PageMode.EDIT);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveClick() {
    this.customerService.saveOrUpdateCustomer(this.customer);
    this.changesSaved = true;

    this.showMessageEditSuccess = this.pageMode == PageMode.EDIT;
    this.showMessageInsertSuccess = this.pageMode == PageMode.INSERT;
  }

  onDeleteClick() {
    this.customerService.deleteCustomer(this.customer);
    this.showMessageDeleteSuccess = this.pageMode == PageMode.DELETE;
    this.router.navigate(['/userProfile/customerCartable'], {queryParams: {deleted: true}});
  }

  onReturnClick() {
    this.router.navigate(['/userProfile/customerCartable']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.customerForm.touched && this.customerForm.dirty && !this.changesSaved) {
      return confirm(this.baseService.translateKey('Do you want to discard the changes ?'));
    } else {
      return true;
    }
  }

  ngAfterViewInit(): void {
    if (this.pageMode == PageMode.SEARCH) {
      this.searchId.first.nativeElement.focus();
    } else {
      this.mainDiv.first.nativeElement.focus();
    }
  }

  keyDown(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    if (event.ctrlKey && event.key == 's') {
      if (this.pageMode == PageMode.INSERT || this.pageMode == PageMode.EDIT) {
        this.onSaveClick();
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        if (this.pageMode != PageMode.SEARCH) {
          this.onReturnClick();
        }
        break;
      case 'Delete':
        if (this.pageMode == PageMode.DELETE) {
          this.onDeleteClick();
        }
        break;
      default:
        // event.preventDefault();
        return;
    }
  }

  resetForm() {
    this.customerForm.reset();

  }

}
