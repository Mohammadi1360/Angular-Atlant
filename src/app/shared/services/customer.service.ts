import {Customer} from '../model/customer.model';
import {customers} from '../data/customer.data';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  customerList: Customer[] = customers;

  constructor(private http: Http) {
  }

  getCustomers() {
    return this.customerList;
  }

  getCustomer(customerId: number) {
    const cc = this.getCustomers().slice();
    return cc.find(
      (s) => {
        return s.customerId === customerId;
      }
    );
  }

  getAllCustomer() {
    console.log('here 1 ');
    return this.http.get('http://172.20.140.11:8080/userRest/customers/').map(
        (response: Response) => {
          // const myCustomers = response.json();
          console.log('here 2');
          console.log(response.json());
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw(error.toString());
        }
      );
  }

  saveOrUpdateCustomer(customer: Customer) {
    let findCustomer = this.customerList.find(cc => cc.customerId === customer.customerId);
    if (findCustomer) {
      findCustomer = customer;
    } else {
      this.customerList.push(customer);
    }

  }

  deleteCustomer(customer: Customer) {
    const index: number = this.customerList.indexOf(customer);
    if (index !== -1) {
      this.customerList.splice(index, 1);
    }
  }

}
