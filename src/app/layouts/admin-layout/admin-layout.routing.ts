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
    { path: 'addUni',           component: AddUniComponent },
    { path: 'editUni/:id',           component: EdituniComponent }
];

