import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutus;
  constructor(public auth: AuthService) { }


  ngOnInit(): void {
    this.auth.getInfo().subscribe((res) => {
      console.log(res);
      this.aboutus = res.about_us.text;
  });
}
      
}