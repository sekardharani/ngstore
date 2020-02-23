import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent  
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    ClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
