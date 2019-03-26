import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  httpClient: any;

  constructor() { }

  getImage(imageUrl: string): Observable<Blob>{
    return this.httpClient.get(imageUrl, { responseTyep: 'blob'});
  
  }
}
