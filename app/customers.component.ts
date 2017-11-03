import {Component, OnInit } from '@angular/core'
//FormsModule for tow way bimding 

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer'
// CustomerService but from  customer.services <= aditional (s) nameing maistak to solve later 
import { CustomerService } from './customer.services'


@Component({
  selector: 'my-customers',
  template: `<h1>{{titel}}</h1>
              <ul class="heroes">
                <li><span class="badge">Userid</span> PlistaProduct</li>
                <li *ngFor="let customer of customers"
                  [class.selected]="customer === selectedCustomer"
                  (click)="onSelect(customer)" [routerLink]="['/detail', customer.campaignid]" >
      
                 <span class="Userid">{{customer.userid}}</span>
                  <span class="Product"> {{customer.PlistaProduct}}</span>
                  <span class="date"> {{customer.date}}</span>
                  <span class="freeclick"> {{customer.freeclick}}</span>
                  <span class="network"> {{customer.network}}</span>
                </li>
              </ul>
          <customer-detail [customer]="selectedCustomer"></customer-detail>
         

              `,
   styles: [`

    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 41px;
      border-radius: 4px;
      border-left: 10px solid black;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .Userid, .Product, .freeclick, .network {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #4a4aa7;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }



    



  `],
  providers: [CustomerService]       
})

export class CustomersComponent implements OnInit  {

    titel:string = "List" ;

   //The CUSTOMERS constant is exported so it can be imported elsewhere, such as the CustomerService.In app.component.ts, where you cut the CUSTOMERS array, add an uninitialized customers property:
    customers: Customer[];
    selectedCustomer: Customer;
    customer: Customer;

    constructor(
      private router: Router,
      private customerService: CustomerService) { }

      getCustomers(): void {
    //    this.customers = this.customerService.getCustomers();
        this.customerService.getCustomers().then(customers => this.customers = customers);
       }

      ngOnInit(): void {
        this.getCustomers();
       }

      onSelect(customer: Customer): void {
          this.selectedCustomer = customer;
        }
 
      gotoDetail(): void {
          this.router.navigate(['/detail', this.selectedCustomer.campaignid]);
        }
 
  

  
  
}




