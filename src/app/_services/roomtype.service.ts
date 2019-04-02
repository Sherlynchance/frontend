import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RoomTypes } from '../_models/roomtype';

@Injectable({ providedIn: 'root' })
export class RoomTypeService {
  constructor(private http: HttpClient) { }

  // api service to get all rooms
  getAll(): Observable<RoomTypes[]> {
    return this.http.get<RoomTypes[]>(`http://localhost:8000/api/roomtype/`);
  }

  getById(id: number) {
    return this.http.get<RoomTypes>(`http://localhost:8000/api/roomtype/${id}`);
    
  }

  createRoomType(roomtype: RoomTypes) {
    const formData = new FormData();
    for (const key in roomtype) {
      formData.append(key, roomtype[key]);
    }

    return this.http.post(`http://localhost:8000/api/roomtype`, formData);
  }

  updateRoomType(roomtype: RoomTypes) {
    return this.http.put<RoomTypes>(`http://localhost:8000/api/roomtype/${roomtype.id}`, roomtype);
  }

  deleteRoomType(id: number) {
    return this.http.delete<RoomTypes>(`http://localhost:8000/api/roomtype/${id}`);
  }

  getByName(name: string) {
    return this.http.get<RoomTypes>(`http://localhost:8000/roomtype/${name}`);
  }
}
