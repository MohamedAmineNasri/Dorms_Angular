import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Foyer } from 'src/app/Models/Foyer';
import { FoyerService } from '../../../services/foyer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent implements OnInit {
  foyerForm: FormGroup;


  constructor(
      private fb: FormBuilder,
      private foyerService: FoyerService,

      private router: Router
  ) {}

  ngOnInit(): void {

    this.initForm();
  }

  private initForm(): void {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required]],
      capaciteFoyer: [null, [Validators.required, Validators.min(50)]]
    });
  }



  creerFoyer() {
    if (confirm('Est-ce que vous voulez vraiment ajouter ce foyer ?')) {
      const foyerData: Partial<Foyer> = {
        nomFoyer: this.foyerForm.value.nomFoyer,
        capaciteFoyer: this.foyerForm.value.capaciteFoyer
      };

      this.foyerService.addFoyer(foyerData).subscribe(
          (response: Foyer) => {
            console.log('Foyer ajouté avec succès :', response);
            this.router.navigate(['/foyers']);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du foyer :', error);
            if (error instanceof HttpErrorResponse) {
              console.error('Full error response:', error);
            }
          }
      );
    }
  }

}
