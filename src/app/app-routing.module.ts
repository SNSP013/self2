import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FULL } from 'sqlite3';
import { ListingFormComponent } from './listing-form/listing-form/listing-form.component';
import { ListingListComponent } from './listing-list/listing-list/listing-list.component';
import { ViewByIdComponent } from './view-by-id/view-by-id/view-by-id.component';

const routes: Routes = [
  {path:'',redirectTo:'addlisting',pathMatch:'full'},
  {path:'addlisting',component:ListingFormComponent},
  {path:'view',component:ListingListComponent},
  {path:'update/:id',component:ListingFormComponent},
  {path:'viewById/:id',component:ViewByIdComponent},
  {path:'delete/:id',component:ListingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


