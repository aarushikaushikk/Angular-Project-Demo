import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanServicingComponent } from './loan-servicing/loan-servicing.component';
import { OverviewComponent } from './loan-servicing/overview/overview.component';
import { LoanServicingDetailsComponent } from './loan-servicing/loan-servicing-details/loan-servicing-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanServicingComponent,
    OverviewComponent,
    LoanServicingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
