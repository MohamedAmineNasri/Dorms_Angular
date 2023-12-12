import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";
import {Chambre} from "../../../models/chambre";

@Component({
  selector: 'app-infos',
  templateUrl: './infoscham.component.html',
  styleUrls: ['./infoscham.component.scss']
})
export class InfoschamComponent {

  constructor(private ac: ActivatedRoute,private us:UniversityService){
  }




}
