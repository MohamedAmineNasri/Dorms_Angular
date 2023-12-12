import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";
import Swal from "sweetalert2";
import {Chambre} from "../../../models/chambre";
import {ChambreService} from "../../../services/chambre.service";



@Component({
  selector: 'app-edituni',
  templateUrl: './editcham.component.html',
  styleUrls: ['./editcham.component.css']
})
export class EditchamComponent {chambre : Chambre =new Chambre();
  id : number;

  constructor(private ac: ActivatedRoute,private us:ChambreService){
  }
  ngOnInit(){
    // this.us.getUniversite(this.chambre.idUniversite).subscribe(res=>this.chambre=res);
    const idParam = this.ac.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.id = +idParam;
      this.getUniversityById(this.id);
    } else {
      console.error('ID parameter is null or undefined');

    }
  }
  getUniversityById(id: number): void {
    this.us.getchambre(id).subscribe((chambres) => {
      this.chambre = chambres;
    });
  }

  editChambre(){
    console.log("pressed on update ")
    this.us.updatechambre(this.chambre).subscribe();
    this.us.addchambre(this.chambre).subscribe();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "chamber has been updated",
      showConfirmButton: true,
      timer: 1500
    });
    setTimeout(()=>{ location.assign("http://localhost:4200/getallcham") }, 2000)
  }

}
