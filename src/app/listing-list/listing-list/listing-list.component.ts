import { Component, OnInit } from '@angular/core';
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

  constructor(private scall:ListingService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.listings = this.scall.getListings();
    this.listings = this.listings.pipe(map((val)=>val.sort((a:Listing,b:Listing)=>a.title.localeCompare(b.title))))
  }
}
