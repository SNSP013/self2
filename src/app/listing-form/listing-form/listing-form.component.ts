import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  edit!:boolean;
  idVal!:string;
  constructor(private fb:FormBuilder,private scall:ListingService,private ar:ActivatedRoute,private router:Router){
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
    this.idVal=this.ar.snapshot.paramMap.get('id') || '';
    this.edit = !!this.idVal
    if(this.edit){
      this.scall.getById(this.idVal).subscribe((data)=>{
        this.listingForm.patchValue(data);
      })
    }
  }

  onSubmit():void{
    if(this.listingForm.invalid) return;
    if(this.edit){
      this.scall.updateListing(this.listingForm.value).subscribe((data)=>{
        alert("Update Successfull")
        this.router.navigate(['/view']);
      })
    }
    else{
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
