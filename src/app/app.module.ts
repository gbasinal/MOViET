import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatFormFieldModule } from '@angular/material';
import { MatNativeDateModule  } from '@angular/material';
import { ResultComponent } from './result/result.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent,
    ResultComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
