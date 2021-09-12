import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.css'],
})
export class DemandecongeComponent implements OnInit {
  addCongeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private congeService: CongeService,
    private router: Router
  ) {
    let FormControls = {
      nomprenom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      poste: new FormControl('', [Validators.required]),
      datedebut: new FormControl('', [Validators.required]),
      datefin: new FormControl('', [Validators.required]),
      cause: new FormControl('', [Validators.required])
    };
    this.addCongeForm = this.fb.group(FormControls);
  }
  get nomprenom() {
    return this.addCongeForm.get('nomprenom');
  }
  get poste() {
    return this.addCongeForm.get('poste');
  }
  get datedebut() {
    return this.addCongeForm.get('datedebut');
  }
  get datefin() {
    return this.addCongeForm.get('datefin');
  }
  get cause() {
    return this.addCongeForm.get('cause');
  }
  ngOnInit(): void {}
  addConge() {
    console.log(this.addCongeForm.value);

    let data = this.addCongeForm.value;
    let conge = new Conge(
      undefined,
      data.nomprenom,
      data.poste,
      data.datedebut,
      data.datefin,
      data.cause
    );

    this.congeService.addConge(conge).subscribe(
      (res) => {
        //console.log(res);
        this.router.navigateByUrl('/admin/conges/conges-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
