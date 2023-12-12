import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chambre} from "../models/chambre";
// const httpOptions = {
//   headers: new HttpHeaders()({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': 'http://localhost:4200',
//   }),
// };


@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  chambreurl : string = "http://localhost:8089";
  constructor(private _http:HttpClient) {
    console.log("chambre service constructor ");
  }
  addchambre(chambre:Chambre):Observable<Chambre>{
    return this._http.post<Chambre>('http://localhost:8089/addChambre',chambre);
  }
  getbyname(id:string):Observable<Chambre[]>{
    return this._http.get<Chambre[]>("http://localhost:8089/getchambrebyname/"+id)
  }

  getAllchambre():Observable<Chambre[]>{
    return this._http.get<Chambre[]>('http://localhost:8089/Chambres');
  }

  getchambre(id:number):Observable<Chambre>{
    return this._http.get<Chambre>(this.chambreurl+"/Chambres/"+id);
  }

  updatechambre(chambre:Chambre):Observable<Chambre>{
    return this._http.put<Chambre>(this.chambreurl+"/updateChambre",chambre);
  }
  deletechambre(idu:number):Observable<Chambre>{
    return this._http.delete<Chambre>(this.chambreurl+"/delateChambres/"+idu);
  }












}
