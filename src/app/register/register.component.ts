import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loadingsingleprodc = false;
  valid = false;
  invalid = false;
  message = 'Please Complete the form';
  separateDialCode = true;
  verify = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  loginForm: FormGroup  

  constructor(private authService: AuthService) { }


  onSubmit() {
    const email = this.loginForm.value.email;
    const name = this.loginForm.value.username;
    const phone = this.loginForm.value.phone;
    const password = this.loginForm.value.password;
    this.authService.signup(email,name,phone,password).subscribe(resData => {
      console.log(resData);
    }, error =>{
      console.log(error)
    });
    this.loginForm.reset();
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'phone': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
    });
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
}
