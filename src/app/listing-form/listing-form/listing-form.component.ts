import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {
  listingForm!:FormGroup;
  successMessage!:string;
  showAlert!:boolean
  constructor(private fb:FormBuilder,private scall:ListingService){
  }
  ngOnInit(): void {
    this.listingForm = this.fb.group({
      title:["",[Validators.required]],
      agent:["",[Validators.required]],
      description:["",[Validators.required]],
      area:[,[Validators.required]],
      propertyType:["",[Validators.required]],
      userRating:[,[Validators.required]],
      inquiryCount:0,
    })
  }



  onSubmit():void{
    if(this.listingForm.valid){
      this.scall.addListing(this.listingForm.value).subscribe((data)=>{
        this.showAlert=true;
        this.listingForm.reset();
      })
    }
  }

  closeAlert(){
    this.showAlert=false;
  }
}
