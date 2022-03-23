import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublishComponent } from './publish/publish.component';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptorInterceptor } from './test-interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';
@NgModule({
  declarations: [
    AppComponent,
    PublishComponent,
    Customer1Component,
    Customer2Component,
    ObservableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TestInterceptorInterceptor ,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
