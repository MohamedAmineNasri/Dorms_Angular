import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Foyer } from 'src/app/Models/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-updateaction',
  templateUrl: './updateaction.component.html',
  styleUrls: ['./updateaction.component.scss']
})
export class UpdateactionComponent {

  @Input() idf:number;
  @Input() nomf:string;
  @Input() capacite:number;

  @Output() update = new EventEmitter<string>();

  updatef(){
    this.update.emit("update successs");
    alert("update successs")
  }
  constructor(
      private foyerService: FoyerService,
      private router: Router
  ) {}


}
