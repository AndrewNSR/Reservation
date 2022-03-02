import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup  


  constructor(private authService: AuthService) { }


  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email,password).subscribe(resData => {
      console.log(resData);
    }, error =>{
      console.log(error)
    });
    this.loginForm.reset();
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required)
    });
  }
}
