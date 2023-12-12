import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chambre} from "../models/chambre";



@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private chambreurl : string = "http://localhost:8089";
  constructor(private _http:HttpClient) {
    console.log("chambre service constructor ");
  }
  addchambre(chambre:Chambre):Observable<Chambre>{
    return this._http.post<Chambre>('http://localhost:8089/api/auth/addChambre',chambre);
  }
  getbyname(id:string):Observable<Chambre[]>{
    return this._http.get<Chambre[]>("http://localhost:8089/api/auth/getchambrebyname/"+id)
  }

  getAllchambre():Observable<Chambre[]>{
    return this._http.get<Chambre[]>('http://localhost:8089/api/auth/Chambres');
  }

  getchambre(id:number):Observable<Chambre>{
    return this._http.get<Chambre>("http://localhost:8089/api/auth/Chambres/"+id);
  }

  updatechambre(chambre:Chambre):Observable<Chambre>{
    return this._http.put<Chambre>("http://localhost:8089/api/auth/updateChambre",chambre);
  }
  deletechambre(idu:number):Observable<Chambre>{
    return this._http.delete<Chambre>("http://localhost:8089/api/auth/delateChambres/"+idu);
  }












}
