import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardResponse } from '../models/dashboard.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDashboard(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(`${environment.apiUrl}/dashboard`);
  }
}
