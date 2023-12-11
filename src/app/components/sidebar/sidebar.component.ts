import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    show: boolean; // Add this property
}


export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '', show: true },
    { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '', show: true },
    { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '', show: true },
    { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '', show: true },
    { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '', show: true },
    { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '', show: true },
    { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '', show: true },
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    public menuItems: any[];
    public isCollapsed = true;

    constructor(private router: Router, public authService: AuthenticationService) {}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }

    checkAuthentication(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logout() {
        console.log('Logout clicked');
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
