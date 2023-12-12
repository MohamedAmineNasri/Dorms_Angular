import { Component } from '@angular/core';
import { FoyerService } from '../../../services/foyer.service';

import { Router } from '@angular/router';
import { Foyer } from 'src/app/Models/Foyer';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService , private router: Router) {}

  ngOnInit(): void {
    this.fetchFoyers();
  }

  private fetchFoyers(): void {
    this.foyerService.getAllFoyers().subscribe(
        (foyers: Foyer[]) => {
          this.foyers = foyers;
        },
        (error) => {
          console.error('Error fetching foyers:', error);
        }
    );
  }
  deleteFoyer(event:any, foy:Foyer){

    if(confirm('est ce que vous voulez vraiment supprimer ce foyer')){
      event.target.innerText="Deleting..."

      this.foyerService.deleteFoyer(foy.idFoyer).subscribe(()=>this.fetchFoyers());

    }
  }
  navigateToUpdatePage(foy: any) {
    // Naviguer vers une nouvelle page avec l'ID du foyer pour la mise à jour
    this.router.navigate(['/update-foyer', foy.idFoyer]);
  }



}
