import {HighlightDirective} from "../../directives/highlight.directive";

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UpdateFoyerComponent} from "../../pages/foyer-pages/update-foyer/update-foyer.component";
import {CapaciteRangeComponent} from "../../pages/foyer-pages/capacite-range/capacite-range.component";
import {AddFoyerComponent} from "../../pages/foyer-pages/add-foyer/add-foyer.component";
import {ListFoyerComponent} from "../../pages/foyer-pages/list-foyer/list-foyer.component";
import {UpdateactionComponent} from "../../pages/foyer-pages/updateaction/updateaction.component";
import {AddUniComponent} from "../../pages/university-pages/add-uni/add-uni.component";
import {ZoomhoverDirective} from "../../directives/zoomhover.directive";
import {EdituniComponent} from "../../pages/university-pages/edituni/edituni.component";
import {InfosComponent} from "../../pages/university-pages/infos/infos.component";
import {UniversitiesComponent} from "../../pages/university-pages/universities/universities.component";
import {AddChamComponent} from "../../pages/chambre-pages/add-cham/add-cham.component";
import {EditchamComponent} from "../../pages/chambre-pages/editcham/editcham.component";

import {NgxPaginationModule} from "ngx-pagination";
import {UpdatebuttonComponent} from "../../pages/chambre-pages/updatebutton/updatebutton.component";
import {ChambersComponent} from "../../pages/chambre-pages/chambres/chambers.component";
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,UpdateFoyerComponent ,
    CapaciteRangeComponent,
    AddFoyerComponent,
    ListFoyerComponent,UpdateactionComponent,
    AddUniComponent,HighlightDirective, ZoomhoverDirective,EdituniComponent, ChambersComponent,InfosComponent, UniversitiesComponent,AddChamComponent,EditchamComponent , UpdatebuttonComponent
  ]
})

export class AdminLayoutModule {}
