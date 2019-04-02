import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {


    constructor(private http: HttpClient) { }

    //api service to get all users
    getAll(): Observable<User[]> {
        // return this.http.get<User[]>(`https://api.jsnhotels.com/api/user/`);
        return this.http.get<User[]>(`https://api.jsnhotels.com/api/user`);
    }

    //api service to get users by id
    getById(id: number) {
        return this.http.get<User>(`https://api.jsnhotels.com/api/user/${id}`);
    }

    //api service to get users by name
    getByName(name: string){
        return this.http.get<User>(`https://api.jsnhotels.com/api/user/${name}`);
    }

    //api service to register new user
    register(user: User){
        // return this.http.post(`https://api.jsnhotels.com/api/user`, user);
        return this.http.post(`https://api.jsnhotels.com/api/user`, user);
    }

    //api service to delete user
    deleteUser(id: number){
        return this.http.delete<User>(`https://api.jsnhotels.com/api/user/${id}`)
    }


}