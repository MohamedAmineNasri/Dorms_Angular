import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {JwtModule} from "@auth0/angular-jwt";
import { ZoomhoverDirective } from './directives/zoomhover.directive';
import { EdituniComponent } from './pages/university-pages/edituni/edituni.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InfosComponent } from './pages/university-pages/infos/infos.component';
import { UniversitiesComponent } from './pages/university-pages/universities/universities.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:8089'], // Adjust the port based on your server
        disallowedRoutes: ['localhost:8089/api/auth/logout'], // Adjust the port based on your server
      },
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
