import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SearchHotel } from '../_models/searchhotel';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SearchhotelService {

  constructor(private http: HttpClient) { }
  // private url = 'https://api.jsnhotels.com/api/';
  
  // getAvailable(formData): Observable<SearchHotel[]> {
  //   return this.http.post<SearchHotel[]>(this.url, formData, httpOptions ).map(res => {
  //     console.log(res);
  //     return res;
  //   });
  getAvailable(searchhotel: SearchHotel){
    return this.http.post<any[]>('https://api.jsnhotels.com/api/hotel/search', searchhotel);
  }

}




