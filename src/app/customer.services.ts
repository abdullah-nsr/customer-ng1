import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable()
export class CustomerService {
    getCustomers(): Customer[] {
        return CUSTOMERS;
      }


}