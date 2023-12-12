import { Component } from '@angular/core';
import { FoyerService } from '../../../services/foyer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-capacite-range',
  templateUrl: './capacite-range.component.html',
  styleUrls: ['./capacite-range.component.css']
})
export class CapaciteRangeComponent {
  minCapacite!: number;
  maxCapacite!: number;
  foyers: any[] = [];
  capaciteRangeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private foyerService: FoyerService) {
    this.capaciteRangeForm = this.formBuilder.group({
      minCapacite: [null, Validators.required],
      maxCapacite: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchFoyersByCapaciteRange();
  }

  fetchFoyersByCapaciteRange(): void {
    this.foyerService.getFoyersByCapaciteRange(this.minCapacite, this.maxCapacite).subscribe(
        foyers => {
          // Handle the fetched foyers
          console.log(foyers);
          this.foyers = foyers;
        },
        error => {
          // Handle errors
          console.error('Error fetching foyers:', error);
        }
    );
  }

}


