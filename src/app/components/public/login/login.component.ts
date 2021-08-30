import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private fb:FormBuilder) { 
    let FormControls = {
    code:new FormControl('',[
      Validators.required
    ]
    ),
    password:new FormControl('',[
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
      Validators.minLength(6)
    ]
    )
  }
    this.loginForm = this.fb.group(FormControls)
  }

  get code(){return this.loginForm.get('code')}
  get password(){return this.loginForm.get('password')}
  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value);
  }
}
