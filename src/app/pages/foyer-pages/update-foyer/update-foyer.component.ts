import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FoyerService } from '../../../services/foyer.service';


import { delay } from 'rxjs';
import { Foyer } from 'src/app/Models/Foyer';


@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  foyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
    // Add other properties as needed
  };

  constructor(
      private foyerService: FoyerService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    if (id) {
      this.fetchFoyer(id);
    }
  }

  fetchFoyer(id: number): void {
    this.foyerService.getFoyerById(id).subscribe(
        (data: Foyer) => {
          this.foyer = data;
        },
        error => {
          // Handle errors here
        }
    );
  }

  updateFoyer(): void {
    if(confirm('est ce que vous voulez vraiment modifier ce foyer')){
      // event.target.innerText="updating..."
      console.log(this.foyer)
      this.foyerService.updateFoyer(this.foyer).pipe(delay(1000)).subscribe(

          ()=>this.router.navigate(['/foyers'])


      )
    }
  }
  handleUpdate(message: string) {
    console.log(message); // You can do further handling here if needed
  }

}
