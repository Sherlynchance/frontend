import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

// import {u } from '../_models';

import { Hotels } from '../_models/hotels';


@Injectable({ providedIn: 'root' })
export class HotelService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Hotels[]> {
        return this.http.get<Hotels[]>(`http://localhost:8000/api/hotel/`);
    }

    getById(id: number) {
        return this.http.get<Hotels>(`http://localhost:8000/api/hotel/${id}`);
    }

    createHotel(hotels: Hotels, files: any){
        const formData = new FormData();
        for (const key in hotels) {
            formData.append(key, hotels[key]);
        }
        formData.append('hotel_image', files);

        return this.http.post(`http://localhost:8000/api/hotel`, formData);
    }
    
    updateHotel(hotels: Hotels){
        return this.http.put<Hotels>(`http://localhost:8000/api/hotel/${hotels.id}`, hotels);
    }

    deleteHotel(id: number){
        return this.http.delete<Hotels>(`http://localhost:8000/api/hotel/${id}`)
    }

    // getByName(name: string){
    //     return this.http.get<Hotels>(`http://localhost:8000/user/${name}`);
    // }
}