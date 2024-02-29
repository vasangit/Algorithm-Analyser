import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';

  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({

      firstname: new FormControl('', [Validators.required,Validators.nullValidator, Validators.pattern('[a-zA-Z]*')]),

      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      number: new FormControl('', [Validators.required, Validators.nullValidator,Validators.minLength(10),Validators.pattern(
        '[0-9]*',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      cpassword: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.loginForm.value)
    localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/'])
  }
}
