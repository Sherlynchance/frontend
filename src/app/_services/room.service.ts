import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rooms } from '../_models/rooms';

@Injectable({ providedIn: 'root' })
export class RoomService {
    constructor(private http: HttpClient) { }

    // api service to get all rooms
    getAll(): Observable<Rooms[]> {
        return this.http.get<Rooms[]>(`https://api.jsnhotels.com/api/room/`);
    }

    getById(id: number) {
        return this.http.get<Rooms>(`https://api.jsnhotels.com/api/room/${id}`);
    }

    createRoom(rooms: Rooms, files: any){
        const formData = new FormData();
        for (const key in rooms) {
            formData.append(key, rooms[key]);
        }
        formData.append('room_image', files);

        return this.http.post(`https://api.jsnhotels.com/api/room`, formData);
    }
    //  updateRoom(rooms: Rooms){
    //      return this.http.put<Rooms>('https://localhost:8000/api/room/', rooms.id);
    // }

    updateRoom(rooms: Rooms){
        return this.http.put<Rooms>(`https://api.jsnhotels.com/api/room/${rooms.id}`, rooms);
    }

    deleteRoom(id: number){
        return this.http.delete<Rooms>(`https://api.jsnhotels.com/api/room/${id}`);
    }

    getByName(name: string){
         return this.http.get<Rooms>(`https://api.jsnhotels.com/room/${name}`);
    }
}
