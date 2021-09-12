import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { PersonnelService } from 'src/app/services/personnel.service';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/personnel';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personnelService: PersonnelService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let FormControls = {
      code: new FormControl('', [Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ]),
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
      datedebut: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
      salaire: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9.]+'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
    };

    this.addEmployeeForm = this.fb.group(FormControls);
  }
  get code() {
    return this.addEmployeeForm.get('code');
  }
  get nom() {
    return this.addEmployeeForm.get('nom');
  }
  get prenom() {
    return this.addEmployeeForm.get('prenom');
  }
  get poste() {
    return this.addEmployeeForm.get('poste');
  }
  get datedebut() {
    return this.addEmployeeForm.get('datedebut');
  }
  get datenaissance() {
    return this.addEmployeeForm.get('datenaissance');
  }
  get salaire() {
    return this.addEmployeeForm.get('salaire');
  }
  get email() {
    return this.addEmployeeForm.get('email');
  }
  get telephone() {
    return this.addEmployeeForm.get('telephone');
  }

  ngOnInit(): void {
  let isLoggedIn = this.personnelService.isLoggedIn();
    if (isLoggedIn){
      this.router.navigate(['/admin/employees/add-employee']);
    }
  }

  addPersonnel() {
    //console.log(this.addEmployeeForm.value);

    let data = this.addEmployeeForm.value;
    let personnel = new Personnel(
      undefined,
      data.code,
      data.nom,
      data.prenom,
      data.poste,
      data.datedebut,
      data.datenaissance,
      data.salaire,
      data.email,
      undefined,
      data.telephone
    );
    console.log(personnel);

    this.personnelService.addPersonnel(personnel).subscribe(
      (res) => {
        //console.log(res);
        this.toastr.success('Bienvenue','Employé(e) ajouté(e) avec succès');
        this.router.navigateByUrl('/admin/employees/employees-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
