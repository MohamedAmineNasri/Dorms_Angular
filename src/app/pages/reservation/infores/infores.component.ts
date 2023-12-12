import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {

  constructor(private ac: ActivatedRoute,private us:UniversityService){
  }

  @Input() university:Universite;
  @Input() universityName:String;


  @Output() undo = new EventEmitter<string>();
  recover(){
    this.undo.emit("university recovered sucessfully");
    alert("university recovered sucessfully ! ")


  }


}
