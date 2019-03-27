import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'


import { Rooms } from '../_models/rooms';

@Injectable({ providedIn: 'root' })
export class RoomService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Rooms[]> {
        return this.http.get<Rooms[]>(`http://localhost:8000/api/room/`);
    }

    // getById(id: number) {
    //     return this.http.get<Hotels>(`http://localhost:8000/api/hotel/${id}`);
    // }

    // createHotel(hotels: Hotels, files: any){
    //     const formData = new FormData();
    //     for (const key in hotels) {
    //         formData.append(key, hotels[key]);
    //     }
    //     formData.append('hotel_image', files);

    //     return this.http.post(`http://localhost:8000/api/hotel`, formData);
    // }
    
    // updateHotel(hotels: Hotels){
    //     return this.http.put<Hotels>('https://localhost:8000/api/hotel', hotels);
    // }

    deleteRoom(id: number){
        return this.http.delete<Rooms>(`http://localhost:8000/api/room/${id}`)
    }

    // getByName(name: string){
    //     return this.http.get<Hotels>(`http://localhost:8000/user/${name}`);
    // }
}