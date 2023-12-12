import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";
import Swal from 'sweetalert2'
import {Chambre} from "../../../models/chambre";
import {ChambreService} from "../../../services/chambre.service";

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-cham.component.html',
  styleUrls: ['./add-cham.component.css']

})
export class AddChamComponent
{chambre :Chambre =new Chambre();
  constructor(private ac: ActivatedRoute,private us:ChambreService){
  }
  ngOnInit(){

  }
  addchambre(){
    console.log("pressed on add")
    this.us.addchambre(this.chambre).subscribe();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "chamber has been added",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(()=>{ location.assign("http://localhost:4200/getallcham") }, 2000)
  }
  test(err: any){
    console.log(err);
  }

  protected readonly name = name;
}
