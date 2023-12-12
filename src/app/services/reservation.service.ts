import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Reservation} from "../models/reservation";


@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    reservationURL: string = "http://localhost:8089";

    constructor(private _http: HttpClient) {
        console.log("reservation service constructor ");
    }

    addReservation(reservation: Reservation): Observable<Reservation> {
        return this._http.post<Reservation>('http://localhost:8089/api/auth/addReservation', reservation);
    }

    getAllReservation(): Observable<Reservation[]> {
        return this._http.get<Reservation[]>('http://localhost:8089/api/auth/getAllReservation');
    }

    getReservation(id: number): Observable<Reservation> {
        return this._http.get<Reservation>(this.reservationURL + "/api/auth/getReservations/" + id);
    }

    updateReservation(reservation: Reservation): Observable<Reservation> {
        return this._http.put<Reservation>(this.reservationURL + "/api/auth/updateReservations", reservation);
    }

    deleteReservation(idu: number): Observable<Reservation> {
        return this._http.delete<Reservation>(this.reservationURL + "/api/auth/deleteReservations/" + idu);
    }
}
