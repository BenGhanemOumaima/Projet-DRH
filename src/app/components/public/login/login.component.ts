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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personnelService: PersonnelService,
    private router: Router
  ) {
    let FormControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      code: new FormControl('', [Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ])
    };
    this.loginForm = this.fb.group(FormControls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get code() {
    return this.loginForm.get('code');
  }
  ngOnInit(): void {
    let isLoggedIn = this.personnelService.isLoggedIn();
    if (isLoggedIn){
      this.router.navigate(['/login']);
    }
  }
  login() {
    //console.log(this.loginForm.value);

    let data = this.loginForm.value;
    let personnel = new Personnel(
      undefined,
      data.code,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      data.email,
      undefined,
      undefined,
      undefined
    );

    this.personnelService.loginAdmin(personnel).subscribe(
      (res) => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken", token);
        this.router.navigateByUrl("['/dashboard']");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
