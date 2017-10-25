import { Component, Input  } from '@angular/core'
import { Customer } from './customer'

@Component({
    selector: 'customer-detail',
    template: `<h1>HAloooooooooooooooo</h1> 
    <div *ngIf="customer">
    <h2>{{customer.PlistaProduct}} details!</h2>

     <div><label>a: </label>{{customer.a}}</div>
       <div>
        <label>PlistaProduct: </label>
        <input [(ngModel)]="customer.PlistaProduct" placeholder="PlistaProduct"/>
       </div>
    </div>
 `
})

export class CustomerComponent  {

  @Input() customer: Customer;

}
