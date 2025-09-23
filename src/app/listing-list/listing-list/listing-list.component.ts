import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent implements OnInit {
  listings!:Observable<any[]>;
  searchTerm!:string;
  idVal!:string;

  constructor(private scall:ListingService,private ar:ActivatedRoute){}

  ngOnInit(): void {
    this.idVal=String(this.ar.snapshot.paramMap.get('id')) || '';
    if(this.idVal){
      this.deleteData();
    }
    this.getData();
  }

  getData(){
    this.listings = this.scall.getListings();
    // this.listings = this.listings.pipe(map((val)=>val.sort((a:Listing,b:Listing)=>a.title.localeCompare(b.title))))
  }

  deleteData(){
    this.scall.deleteListing(this.idVal).subscribe();
  }
}
