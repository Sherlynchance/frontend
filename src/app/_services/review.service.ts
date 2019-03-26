import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Review } from '../_models/review';


@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Review[]> {
        return this.http.get<Review[]>(`http://localhost:8000/api/review/`);
    }

    
}