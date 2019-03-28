import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Rooms } from '../_models/rooms';

@Injectable({ providedIn: 'root' })
export class RoomService {
    constructor(private http: HttpClient) { }

    //api service to get all rooms
    getAll(): Observable<Rooms[]> {
        return this.http.get<Rooms[]>(`https://api.jsnhotels.com/api/room/`);
    }

    // getById(id: number) {
    //     return this.http.get<Hotels>(`https://api.jsnhotels.com/api/hotel/${id}`);
    // }

    // createHotel(hotels: Hotels, files: any){
    //     const formData = new FormData();
    //     for (const key in hotels) {
    //         formData.append(key, hotels[key]);
    //     }
    //     formData.append('hotel_image', files);

    //     return this.http.post(`https://api.jsnhotels.com/api/hotel`, formData);
    // }
    
    // updateHotel(hotels: Hotels){
    //     return this.http.put<Hotels>('https://localhost:8000/api/hotel', hotels);
    // }

    deleteRoom(id: number){
        return this.http.delete<Rooms>(`https://api.jsnhotels.com/api/room/${id}`)
    }

    // getByName(name: string){
    //     return this.http.get<Hotels>(`https://api.jsnhotels.com/user/${name}`);
    // }
}