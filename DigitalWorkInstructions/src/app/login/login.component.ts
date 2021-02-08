// import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl, Validators} from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   hide = true;
//   loginForm: FormGroup;
//   constructor() { }

//   ngOnInit() {
//     this.loginForm = new FormGroup(
//       {
//         email : new FormControl('', [Validators.required, Validators.email]),
//         password : new FormControl('', [Validators.required, Validators.minLength(6)])
//       }
//     );
//   }

//   onLogin(){

//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

}