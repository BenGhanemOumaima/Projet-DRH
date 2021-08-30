import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent implements OnInit {
  candidatureForm: FormGroup;
  constructor(private fb: FormBuilder) {
    let FormControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z]')
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z]'),
      ]),
      adresse: new FormControl('', [Validators.required]),
      codepostal: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required]),
      nationnalite: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
        Validators.minLength(6),
      ]),
      poste: new FormControl('', [Validators.required]),
      secteur: new FormControl('', [Validators.required]),
      dispo: new FormControl('', [Validators.required]),
      cv: new FormControl('', [Validators.required]),
      motivation: new FormControl('', [Validators.required]),
      diplome: new FormControl('', [Validators.required]),
    };
    this.candidatureForm = this.fb.group(FormControls);
  }

  get nom() {
    return this.candidatureForm.get('nom');
  }
  get prenom() {
    return this.candidatureForm.get('prenom');
  }
  get adresse() {
    return this.candidatureForm.get('adresse');
  }
  get codepostal() {
    return this.candidatureForm.get('codepostal');
  }
  get ville() {
    return this.candidatureForm.get('ville');
  }
  get datenaissance() {
    return this.candidatureForm.get('datenaissance');
  }
  get nationnalite() {
    return this.candidatureForm.get('nationnalite');
  }
  get telephone() {
    return this.candidatureForm.get('telephone');
  }
  get email() {
    return this.candidatureForm.get('email');
  }
  get password() {
    return this.candidatureForm.get('password');
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

  ngOnInit(): void {}

  candidature() {
    console.log(this.candidatureForm.value);
  }
}
