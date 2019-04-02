import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Facility } from '../_models/facility';

@Injectable({ providedIn: 'root' })
export class FacilityService {
  constructor(private http: HttpClient) { }

  // api service to get all rooms
  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`https://api.jsnhotels.com/api/facility/`);
  }

  getById(id: number) {
    return this.http.get<Facility>(`https://api.jsnhotels.com/api/facility/${id}`);
  }

  createFacility(facility: Facility) {
    const formData = new FormData();
    for (const key in facility) {
      formData.append(key, facility[key]);
    }
    return this.http.post(`https://api.jsnhotels.com/api/facility`, formData);
  }

  updateFacility(facility: Facility) {
    return this.http.put<Facility>(`https://api.jsnhotels.com/api/facility/${facility.id}`, facility);
  }

  deleteFacility(id: number) {
    return this.http.delete<Facility>(`https://api.jsnhotels.com/api/facility/${id}`);
  }

  getByName(name: string) {
    return this.http.get<Facility>(`https://api.jsnhotels.com/facility/${name}`);
  }
}
