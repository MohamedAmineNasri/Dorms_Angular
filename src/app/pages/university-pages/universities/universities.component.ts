import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent {
  listUnis : Universite[];

  selectedUniversityName: String="";
  selectedUniversity: Universite;

//current page
  p:Number=1;

  constructor(private ac:ActivatedRoute, private uniServ:UniversityService,private router: Router){
    console.log("custructor");
  }



  ngOnInit(){
    this.uniServ.getAllUniversite().subscribe((res:Universite[])=>this.listUnis=res);
    console.log("initiation ListUserComponent");


  }

  deleteUni(idu: number) {
    this.uniServ.deleteUniversite(idu).subscribe(() => {
      this.listUnis = this.listUnis.filter(u => u.idUniversite !== idu);    // Remove the deleted university from the list and refresh
    });
  }

  //databinding : extracting university from the table and fill selecteduni and uni name and use their value in son component (infos)
  selectUniversity(university: Universite) {
    this.selectedUniversityName = university.nomUniversite;
    this.selectedUniversity=university;
  }


  recoverUniversity() {
    this.uniServ.addUniversite(this.selectedUniversity).subscribe((recoveredUni: Universite) => {
      this.listUnis.push(recoveredUni);
      location.reload()
    });
  }



}
