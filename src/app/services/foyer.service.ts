import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Foyer } from '../Models/Foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089/api/auth/Foyer';

  constructor(private http: HttpClient) { }

  addFoyer(foyerWithoutId: Partial<Foyer>): Observable<Foyer> {
    const url = `http://localhost:8089/api/auth/addFoyer`;
    return this.http.post<Foyer>(url, foyerWithoutId);
  }

  getAllFoyers(): Observable<Foyer[]> {
    const url = `http://localhost:8089/api/auth/getallFoyer`;
    return this.http.get<Foyer[]>(url);
  }
  deleteFoyer(idFoyer:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8089/api/auth/deleteFoyer/"+idFoyer);
  }

  updateFoyer(foyer: Foyer): Observable<any>{
    const url = `http://localhost:8089/api/auth/updateFoyer`;
    return this.http.put(url,foyer);

  }

  getFoyerById(id: number): Observable<Foyer> {
    const url = `http://localhost:8089/api/auth/getFoyer/${id}`;
    return this.http.get<Foyer>(url);
  }

  getFoyersByCapaciteRange(minCapacite: number, maxCapacite: number): Observable<Foyer[]> {
    const url = `http://localhost:8089/api/auth/getallbycapacite/${minCapacite}/${maxCapacite}`;
    return this.http.get<Foyer[]>(url);
  }
}
