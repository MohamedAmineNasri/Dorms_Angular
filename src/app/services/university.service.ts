import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  universitesURL: string = "http://localhost:8089";

  constructor(private _http: HttpClient) {
    console.log("university service constructor ");
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this._http.post<Universite>('http://localhost:8089/api/auth/addUniversite', universite);
  }

  getAllUniversite(): Observable<Universite[]> {
    return this._http.get<Universite[]>('http://localhost:8089/api/auth/getallU');
  }

  getUniversite(id: number): Observable<Universite> {
    return this._http.get<Universite>(this.universitesURL + "/api/auth/Universties/" + id);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this._http.put<Universite>(this.universitesURL + "/api/auth/updateU", universite);
  }

  deleteUniversite(idu: number): Observable<Universite> {
    return this._http.delete<Universite>(this.universitesURL + "/api/auth/deleteUni/" + idu);
  }
}
