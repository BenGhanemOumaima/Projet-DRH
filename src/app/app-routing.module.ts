import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongesListComponent } from './components/private/admin/conges/conges-list/conges-list.component';
import { AddEmployeeComponent } from './components/private/admin/employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/private/admin/employees/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './components/private/admin/employees/update-employee/update-employee.component';
import { AfficherProfilComponent } from './components/private/employe/afficher-profil/afficher-profil.component';
import { DemandecongeComponent } from './components/private/employe/demandeconge/demandeconge.component';
import { UpdateProfilComponent } from './components/private/employe/update-profil/update-profil.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CandidatureComponent } from './components/public/candidature/candidature.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { OffreEmploiComponent } from './components/public/offre-emploi/offre-emploi.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'candidature',
    component:CandidatureComponent
  },
  {
    path:'offredemploi',
    component:OffreEmploiComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'admin/employees/employees-list',
    component:EmployeesListComponent
  },
  {
    path:'admin/conges/conges-list',
    component:CongesListComponent
  },
  {
    path:'admin/employess/update-employee',
    component:UpdateEmployeeComponent
  },
  {
    path:'admin/employess/add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'employe/afficher-profil',
    component:AfficherProfilComponent
  },
  {
    path:'employe/demandeconge',
    component:DemandecongeComponent
  },
  {
    path:'employe/update-profil',
    component:UpdateProfilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
