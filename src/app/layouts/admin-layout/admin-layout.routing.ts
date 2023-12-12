import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UserRoleGuard} from "../../services/auth/auth.guard";
import {AuthadminGuard} from "../../services/authadmin/authadmin.guard";
import {AddFoyerComponent} from "../../pages/foyer-pages/add-foyer/add-foyer.component";
import {UpdateFoyerComponent} from "../../pages/foyer-pages/update-foyer/update-foyer.component";
import {CapaciteRangeComponent} from "../../pages/foyer-pages/capacite-range/capacite-range.component";
import {ListFoyerComponent} from "../../pages/foyer-pages/list-foyer/list-foyer.component";
import {UpdateactionComponent} from "../../pages/foyer-pages/updateaction/updateaction.component";
import {AddUniComponent} from "../../pages/university-pages/add-uni/add-uni.component";
import {EdituniComponent} from "../../pages/university-pages/edituni/edituni.component";
import {UniversitiesComponent} from "../../pages/university-pages/universities/universities.component";
import {InfosComponent} from "../../pages/university-pages/infos/infos.component";

import {AddResComponent} from "../../pages/reservation/add-res/add-res.component";
import {EditresComponent} from "../../pages/reservation/editres/editres.component";
import {ReservationsComponent} from "../../pages/reservation/reservations/reservations.component";
import {InforesComponent} from "../../pages/reservation/infores/infores.component";

import {InfoschamComponent} from "../../pages/chambre-pages/infoscham/infoscham.component";
import {AddChamComponent} from "../../pages/chambre-pages/add-cham/add-cham.component";
import {EditchamComponent} from "../../pages/chambre-pages/editcham/editcham.component";
import {ChambersComponent} from "../../pages/chambre-pages/chambres/chambers.component";



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent ,canActivate: [UserRoleGuard],},
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent ,canActivate: [AuthadminGuard]},
    { path: 'add-foyer',         component: AddFoyerComponent },
    { path: 'update-foyer/:id',          component: UpdateFoyerComponent },
    { path: 'capacite-foyer',           component: CapaciteRangeComponent },
    { path: 'foyers',           component: ListFoyerComponent },
    { path: 'updateaction' , component: UpdateactionComponent},
    { path: 'universities',           component: UniversitiesComponent },
    { path: 'info',           component: InfosComponent },
    { path: 'addUni' , component: AddUniComponent },
    { path: 'editUni/:id',           component: EdituniComponent },
    { path: 'reservation',component: ReservationsComponent },
    {path:'infores' , component:InforesComponent},
    {path:'addres',component:AddResComponent},
    {path:'editres/:id',component:EditresComponent},
    {path:'infocham' , component:InfoschamComponent},
    {path:'addcham',component:AddChamComponent},
    {path:'editcham/:id',component:EditchamComponent},
    {path:'getallcham',component:ChambersComponent},


];

