//our root app component
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component'



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomerComponent ],
  bootstrap: [ AppComponent, CustomerComponent ]
})

export class AppModule {}

