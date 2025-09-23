import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit {
  stud$:any;
  idVal!:string;
  constructor(private scall:ListingService,private ar:ActivatedRoute){
  }
  ngOnInit(): void {
    this.idVal = this.ar.snapshot.paramMap.get('id') || '';
    if(this.idVal){
      this.getData();
    }
  }

  getData(){
    this.scall.getById(this.idVal).subscribe((data)=>{
      this.stud$=data;
    })
  }  
}
