import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SpecialComponent } from './special/special.component';
import { MomentModule } from 'angular2-moment/moment.module';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SpecialComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
