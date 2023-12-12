import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import {UniversityService} from "../../../services/university.service";
import {ReservationService} from "../../../services/reservation.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-res.component.html',
  styleUrls: ['./add-res.component.css']

})
export class AddResComponent {

  reservation : Reservation = new Reservation();

  constructor(private ac: ActivatedRoute,private ur:ReservationService){
  }
  ngOnInit(){

  }
  addUniversity(){
    console.log(this.reservation);

    this.ur.addReservation(this.reservation).subscribe();
    //alert("u added a reservation !")
    //location.assign("./reservation")

  }
  test(err: any){
    console.log(err);
  }

}
