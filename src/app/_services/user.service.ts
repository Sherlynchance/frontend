import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`http://localhost:8000/api/user/`);
    }

    getById(id: number) {
        return this.http.get<User>(`http://localhost:8000/api/user/${id}`);
    }

    getByName(name: string){
        return this.http.get<User>(`http://localhost:8000/api/user/${name}`);
    }

    register(user: User){
        return this.http.post(`http://localhost:8000/api/user`, user);
    }

    deleteUser(id: number){
        return this.http.delete<User>(`http://localhost:8000/api/user/${id}`)
    }


}