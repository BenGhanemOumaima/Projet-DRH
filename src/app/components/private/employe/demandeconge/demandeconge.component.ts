import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.css']
})
export class DemandecongeComponent implements OnInit {

  demandeCongeForm : FormGroup

  constructor(private fb:FormBuilder) {
    let FormControls = {
      nomprenom:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z]')
      ]),
      poste: new FormControl('', [Validators.required]),
      datedebut: new FormControl('', [Validators.required]),
      datefin: new FormControl('', [Validators.required]),
      cause: new FormControl('', [Validators.required])
   }
   this.demandeCongeForm = this.fb.group(FormControls)
  }
  get nomprenom() {
    return this.demandeCongeForm.get('nomprenom');
  }
  get poste() {
    return this.demandeCongeForm.get('poste');
  }
  get datedebut() {
    return this.demandeCongeForm.get('datedebut');
  }
  get datefin() {
    return this.demandeCongeForm.get('datefin');
  }
  get cause() {
    return this.demandeCongeForm.get('cause');
  }
  ngOnInit(): void {
  }
  demandeConge() {
    console.log(this.demandeCongeForm.value);
  }
}
