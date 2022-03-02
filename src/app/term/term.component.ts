import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
  message;
  name;
  option = []
  constructor(public auth: AuthService) { }


  ngOnInit() {
    this.auth.getTermsandCondition().subscribe((res) => {
      console.log(res)
      this.option = res.data;
      this.name = this.option[0].title;
      this.message = this.option[0].text;
    }
    )};

    opt(ind) {
      switch (ind) {
        case 0:
            this.name = this.option[0].title;
            this.message = this.option[0].text;
          break;
          case 1:
            this.name = this.option[1].title;
            this.message = this.option[1].text;
          break;
          case 2:
            this.name = this.option[2].title;
            this.message = this.option[2].text;
          break;
          case 3:
            this.name = this.option[3].title;
            this.message = this.option[3].text;
          break;
          case 4:
            this.name = this.option[4].title;
            this.message = this.option[4].text;
          break;
      }
    }
         
}