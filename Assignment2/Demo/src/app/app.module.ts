import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { HighlightPipePipe } from './highlight-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    HighlightPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
