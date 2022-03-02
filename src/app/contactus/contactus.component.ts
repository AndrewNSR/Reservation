import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  myForm: FormGroup
  constructor(private auth: AuthService) { }

 
  onSubmit() {
    const fullname = this.myForm.value.fullname;
    const email = this.myForm.value.email;
    const phone = this.myForm.value.phone;
    const message = this.myForm.value.message;
    this.auth.signup(fullname,email,phone,message).subscribe(resData => {
      console.log(resData);
    }, error =>{
      console.log(error)
    });
    this.myForm.reset();
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      'fullname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'phone': new FormControl(null,Validators.required),
      'message': new FormControl(null,Validators.required),
    });
  }
}
