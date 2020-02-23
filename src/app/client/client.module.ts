import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientRoutingModule } from './client.routing.module';
import { SaleComponent } from './sale/sale.component';




@NgModule({
  declarations: [HomeComponent, SaleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClientRoutingModule
  ],
  exports:[
    HomeComponent,
    ClientRoutingModule
  ]
})
export class ClientModule { }
