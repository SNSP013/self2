import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './services/filter.pipe';
import { ListingFormComponent } from './listing-form/listing-form/listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ListingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
