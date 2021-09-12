import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Recrutement } from 'src/app/models/recrutement';
import { RecrutementService } from 'src/app/services/recrutement.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent implements OnInit {
  candidatureForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private recrutementService: RecrutementService,
    private router: Router
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
      ville: new FormControl('', [Validators.required]),
      nationnalite: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      poste: new FormControl('', [Validators.required]),
      secteur: new FormControl('', [Validators.required]),
      dispo: new FormControl('', [Validators.required]),
      cv: new FormControl('', [Validators.required]),
      motivation: new FormControl('', [Validators.required]),
      diplome: new FormControl('', [Validators.required]),
      situation: new FormControl('', [Validators.required]),
    };
    this.candidatureForm = this.fb.group(FormControls);
  }

  get nom() {
    return this.candidatureForm.get('nom');
  }
  get prenom() {
    return this.candidatureForm.get('prenom');
  }
  get nationnalite() {
    return this.candidatureForm.get('nationnalite');
  }
  get ville() {
    return this.candidatureForm.get('ville');
  }
  get datenaissance() {
    return this.candidatureForm.get('datenaissance');
  }
  get telephone() {
    return this.candidatureForm.get('telephone');
  }
  get email() {
    return this.candidatureForm.get('email');
  }
  get poste() {
    return this.candidatureForm.get('poste');
  }
  get secteur() {
    return this.candidatureForm.get('secteur');
  }
  get dispo() {
    return this.candidatureForm.get('dispo');
  }
  get cv() {
    return this.candidatureForm.get('cv');
  }
  get motivation() {
    return this.candidatureForm.get('motivation');
  }
  get diplome() {
    return this.candidatureForm.get('diplome');
  }
  get situation() {
    return this.candidatureForm.get('situation');
  }

  ngOnInit(): void {}

  addRecrutement() {
    let data = this.candidatureForm.value;
    let recrutement = new Recrutement(
      undefined,
      data.nom,
      data.prenom,
      data.ville,
      data.datenaissance,
      data.telephone,
      data.email,
      data.poste,
      data.dispo,
      data.secteur,
      data.cv,
      data.motivation,
      data.situation,
      data.diplome,
      data.nationnalite
    );
    console.log(recrutement);

    this.recrutementService.addRecrutement(recrutement).subscribe(
      (res) => {
        //console.log(res);
        this.router.navigateByUrl('admin/recrutement/recrutement-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
