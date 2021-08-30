import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  updateProfilForm : FormGroup

  constructor(private fb:FormBuilder) { 
    let FormControls = {
      anciennemdp:new FormControl('',[
        Validators.required
      ]),
      nouveaumdp:new FormControl('',[
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
        Validators.minLength(6)
      ]),
      renouveaumdp:new FormControl('',[
        Validators.required
      ])
  }
  this.updateProfilForm = this.fb.group(FormControls)
  }

  get anciennemdp() {
    return this.updateProfilForm.get('anciennemdp');
  }
  get nouveaumdp() {
    return this.updateProfilForm.get('nouveaumdp');
  }
  get renouveaumdp() {
    return this.updateProfilForm.get('renouveaumdp');
  }
  ngOnInit(): void {
  }
  onSave() {
    console.log(this.updateProfilForm.value);
  }
}
