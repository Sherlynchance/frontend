import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Hotels } from '../_models/hotels';

@Injectable({ providedIn: 'root' })
export class HotelService {

    constructor(
        private http: HttpClient) { }

    //  api service to get all users
    getAll(): Observable<Hotels[]> {
        return this.http.get<Hotels[]>(`http://localhost:8000/api/hotel/`);
    }

    // api service to get user details by id
    getById(id: number) {
        return this.http.get<Hotels>(`http://localhost:8000/api/hotel/${id}`);
    }

    // api service to register new hotel into the database
    createHotel(hotels: Hotels, files: any){
        const formData = new FormData();
        for (const key in hotels) {
            formData.append(key, hotels[key]);
        }
        formData.append('hotel_image', files);

        return this.http.post(`http://localhost:8000/api/hotel`, formData);
    }
    
    // api service to update existing hotel details
    updateHotel(hotels: Hotels){
        return this.http.put<Hotels>(`http://localhost:8000/api/hotel/${hotels.id}`, hotels);
    }

    // api service to delete existing hotel from the database
    deleteHotel(id: number){
        return this.http.delete<Hotels>(`http://localhost:8000/api/hotel/${id}`)
    }
}