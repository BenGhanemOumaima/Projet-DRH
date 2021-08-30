import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployeeForm : FormGroup

  constructor(private fb:FormBuilder) { 
    let FormControls = {
      nom:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z]')
      ]),
      prenom:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z]')
      ]),
      poste: new FormControl('', [Validators.required]),
      salaire:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9.]+")
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      statut: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(13),
      ])
    }
    this.updateEmployeeForm = this.fb.group(FormControls)
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
  }

  
  OnModifie() {
    console.log(this.updateEmployeeForm.value);
  }
}
