import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import {UniversityService} from "../../../services/university.service";

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-uni.component.html',
  styleUrls: ['./add-uni.component.css']

})
export class AddUniComponent {
  university :Universite =new Universite();




  constructor(private ac: ActivatedRoute,private us:UniversityService){
  }
  ngOnInit(){

  }
  addUniversity(){
    console.log("pressed on add")
    this.us.addUniversite(this.university).subscribe();
    alert("u added a university !")
    location.assign("./universities")

  }
  test(err: any){
    console.log(err);
  }

}
