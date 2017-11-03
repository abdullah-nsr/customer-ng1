//our root app component
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component'
import { CustomersComponent } from './customers.component'
import { CustomerService } from './customer.services'

import { RouterModule } from '@angular/router'

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, FormsModule,
     RouterModule.forRoot([
    {
      path:'customers',
      component: CustomersComponent
    },
    {
      path: 'customersdetail',
      component: CustomerDetailComponent
    },
  ])
 ],
  declarations: [ AppComponent, CustomerDetailComponent, CustomersComponent ],
  providers: [ CustomerService ],
  bootstrap: [ AppComponent, CustomerDetailComponent ]
})

export class AppModule {}

