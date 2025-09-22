import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  apiUrl:string="https://ec2-15-206-172-156.projects.wecreateproblems.com/proxy/8000/listings";
  constructor(private http:HttpClient) { }

  addListing(listing:Listing):Observable<any>{
    return this.http.post(this.apiUrl,listing);
  }

  getListings():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
