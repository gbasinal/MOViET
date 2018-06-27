import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatFormFieldModule } from '@angular/material';
import { MatNativeDateModule  } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
