import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";
import {Chambre} from "../../../models/chambre";
import {ChambreService} from "../../../services/chambre.service";

@Component({
  selector: 'app-universities',
  templateUrl: './chambers.component.html',
  styleUrls: ['./chambers.component.scss']
})
export class ChambersComponent implements OnInit{
  listchambre : Chambre[]

  selectedchambsityName:string="t"
  selectedchambre:Chambre



  constructor( private chambreService:ChambreService){

  }
  p:Number=1;
  ngOnInit(){

    this.chambreService.getAllchambre().subscribe((res:Chambre[])=>this.listchambre=res)




  }

  // binded to a delete button in Universities html , no component needed.
  deletecham(idu : number){
    this.chambreService.deletechambre(idu).subscribe();
    console.log(this.listchambre)

    location.reload();
  }
  get_name(id:string){
    this.chambreService.getbyname(id).subscribe((res:Chambre[])=>this.listchambre=res)
  }
  selectUniversity(chambre: Chambre) {
    this.selectedchambsityName = chambre.name;
    this.selectedchambre=chambre;
  }


}
