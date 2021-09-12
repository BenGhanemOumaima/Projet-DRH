import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { PersonnelService } from 'src/app/services/personnel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from 'src/app/models/personnel';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployeeForm: FormGroup;
  personnelsList: any[] = [];
  aux: any;
  constructor(
    private fb: FormBuilder,
    private personnelService: PersonnelService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    let FormControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'-]+"),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'-]+"),
      ]),
      poste: new FormControl('', [Validators.required]),
      salaire: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9.]+'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      statut: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
    };
    this.updateEmployeeForm = this.fb.group(FormControls);
  }

  get nom() {
    return this.updateEmployeeForm.get('nom');
  }
  get prenom() {
    return this.updateEmployeeForm.get('prenom');
  }
  get poste() {
    return this.updateEmployeeForm.get('poste');
  }
  get salaire() {
    return this.updateEmployeeForm.get('salaire');
  }
  get email() {
    return this.updateEmployeeForm.get('email');
  }
  get statut() {
    return this.updateEmployeeForm.get('statut');
  }
  get telephone() {
    return this.updateEmployeeForm.get('telephone');
  }

  ngOnInit(): void {
    let idPerso = this.route.snapshot.params.id;
    this.personnelService.getPersonnelByID(idPerso).subscribe((res) => {
      this.aux = res;
      this.updateEmployeeForm.patchValue({
        idPerso: this.aux.idPerso,
        nom: this.aux.nom,
        prenom: this.aux.prenom,
        poste: this.aux.poste,
        salaire: this.aux.salaire,
        email: this.aux.email,
        statut: this.aux.statut,
        telephone: this.aux.telephone,
      });
    });
  }

  updatePersonnel() {
    let data = this.updateEmployeeForm.value;
    let idPersonnel = this.route.snapshot.params.id;
    let personnel = new Personnel(
      idPersonnel,
      this.aux.code,
      data.nom,
      data.prenom,
      data.poste,
      this.aux.datedebut,
      this.aux.datenaissance,
      data.salaire,
      data.email,
      data.statut,
      data.telephone,
      this.aux.photo
    );
    console.log(personnel);
    console.log(data);
    

      this.personnelService.updatePersonnel(personnel).subscribe(
      (res) => {
        this.router.navigateByUrl('/admin/employees/employees-list');
        this.toastr.warning('Employé(e) modifié(e) avec succès');

      },
      (err) => {
        console.log(err);
      }
    ); 
  }
}
