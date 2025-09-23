import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  apiUrl:string="https://ec2-65-2-39-213.projects.wecreateproblems.com/proxy/8000/listings";
  constructor(private http:HttpClient) { }

  addListing(listing:Listing):Observable<any>{
    return this.http.post(this.apiUrl,listing);
  }

  getListings():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getById(id:string):Observable<any>{
    return this.http.get(this.apiUrl+'/'+id);
  }

  updateListing(listing:Listing):Observable<any>{
    return this.http.put(this.apiUrl,listing);
  }

  deleteListing(id:string):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
  }
}
