import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Review } from '../_models/review';


@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Review[]> {
        return this.http.get<Review[]>(`https://api.jsnhotels.com/api/review/`);
    }

    createReview(review: Review){
        const options = {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).access_token
            }
        }
        return this.http.post('https://api.jsnhotels.com/api/review', review, options);
    }

    deleteReview(id: number){
        return this.http.delete<Review>(`https://api.jsnhotels.com/api/review/${id}`)
    }
    

    
}