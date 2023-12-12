import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";



@Component({
  selector: 'app-edituni',
  templateUrl: './edituni.component.html',
  styleUrls: ['./edituni.component.css']
})
export class EdituniComponent {

  uniSelected : Universite =new Universite();
  id! : number;

  constructor(private ac: ActivatedRoute,private us:UniversityService){
  }
  ngOnInit(){
    // this.us.getUniversite(this.university.idUniversite).subscribe(res=>this.university=res);
    const idParam = this.ac.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.id = +idParam;
      this.getUniversityById(this.id);
    } else {
      console.error('ID parameter is null or undefined');

    }
  }
  getUniversityById(id: number): void {
    this.us.getUniversite(id).subscribe((universityS) => {
      this.uniSelected = universityS;
    });
  }

  editUniversity(){
    console.log("pressed on add")
    this.us.updateUniversite(this.uniSelected).subscribe();
    alert("u modified a university !")
    location.assign("./universities")
  }
}
