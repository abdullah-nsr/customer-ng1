import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core'
import { Customer } from './customer'

import { ActivatedRoute, ParamMap } from '@angular/router';

import { CustomerService } from './customer.services'

@Component({
    selector: 'customer-detail',
    template: `<h1>{{customer.a}}</h1> 
    <div *ngIf="customer">
    <h2>{{customer.PlistaProduct}} details!</h2>

     <div><label>a: </label>
        <input [(ngModel)]="customer.a" placeholder="{{customer.a}}"/>
     </div>
     <div>
        <label>PlistaProduct: </label>
        <input [(ngModel)]="customer.PlistaProduct" placeholder="PlistaProduct"/>
       </div>
    </div>
 `
})

export class CustomerDetailComponent  {
  customer: Customer;
  
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.customerService.getCustomer(+params.get('campaignid')))
      .subscribe(customer => this.customer = customer);
  }

}
