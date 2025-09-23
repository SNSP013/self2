import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './services/filter.pipe';
import { ListingFormComponent } from './listing-form/listing-form/listing-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingListComponent } from './listing-list/listing-list/listing-list.component';
import { ViewByIdComponent } from './view-by-id/view-by-id/view-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ListingFormComponent,
    ListingListComponent,
    ViewByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
