import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'


import { Rooms } from '../_models/rooms';

@Injectable({ providedIn: 'root' })
export class RoomService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Rooms[]> {
        return this.http.get<Rooms[]>(`http://api.jsnhotels.com/api/room/`);
    }

    // getById(id: number) {
    //     return this.http.get<Hotels>(`http://api.jsnhotels.com/api/hotel/${id}`);
    // }

    // createHotel(hotels: Hotels, files: any){
    //     const formData = new FormData();
    //     for (const key in hotels) {
    //         formData.append(key, hotels[key]);
    //     }
    //     formData.append('hotel_image', files);

    //     return this.http.post(`http://api.jsnhotels.com/api/hotel`, formData);
    // }
    
    // updateHotel(hotels: Hotels){
    //     return this.http.put<Hotels>('https://localhost:8000/api/hotel', hotels);
    // }

    deleteRoom(id: number){
        return this.http.delete<Rooms>(`http://api.jsnhotels.com/api/room/${id}`)
    }

    // getByName(name: string){
    //     return this.http.get<Hotels>(`http://api.jsnhotels.com/user/${name}`);
    // }
}