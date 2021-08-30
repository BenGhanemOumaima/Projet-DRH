import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm : FormGroup

  constructor(private fb:FormBuilder) { 
    let FormControls = {
      code:new FormControl('',[
        Validators.required
      ]),
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
      datedebut: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
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

  this.addEmployeeForm = this.fb.group(FormControls)
}
get code(){
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
get statut() {
  return this.addEmployeeForm.get('statut');
}
get telephone() {
  return this.addEmployeeForm.get('telephone');
}

  ngOnInit(): void {
  }


  OnAjout() {
    console.log(this.addEmployeeForm.value);
  }

}
