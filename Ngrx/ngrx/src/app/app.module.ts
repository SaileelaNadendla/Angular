import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Arithmaticreducer } from './counter.reducer';
import { EventemittersComponent } from './eventemitters/eventemitters.component';
import { ServiceService } from './service.service';
import { TemperatureComponent } from './temperature/temperature.component';
import { BookComponent } from './book/book.component';
import { bookReducer } from './book/book.reducer';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    AppComponent,
    EventemittersComponent,
    TemperatureComponent,
    BookComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count:Arithmaticreducer ,book:bookReducer})
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
