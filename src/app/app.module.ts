import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { CandidatureComponent } from './components/public/candidature/candidature.component';
import { OffreEmploiComponent } from './components/public/offre-emploi/offre-emploi.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { EmployeesListComponent } from './components/private/admin/employees/employees-list/employees-list.component';
import { CongesListComponent } from './components/private/admin/conges/conges-list/conges-list.component';
import { UpdateEmployeeComponent } from './components/private/admin/employees/update-employee/update-employee.component';
import { AddEmployeeComponent } from './components/private/admin/employees/add-employee/add-employee.component';
import { AfficherProfilComponent } from './components/private/employe/afficher-profil/afficher-profil.component';
import { DemandecongeComponent } from './components/private/employe/demandeconge/demandeconge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProfilComponent } from './components/private/employe/update-profil/update-profil.component';
import { RecrutementListComponent } from './components/private/admin/recrutement/recrutement-list/recrutement-list.component';
import { Page404Component } from './components/public/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CandidatureComponent,
    OffreEmploiComponent,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    EmployeesListComponent,
    CongesListComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    AfficherProfilComponent,
    DemandecongeComponent,
    UpdateProfilComponent,
    RecrutementListComponent,
    Page404Component  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
