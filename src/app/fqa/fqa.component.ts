import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.css']
})
export class FqaComponent implements OnInit {
  single = 0;
  open = true;

  arr = [];
  constructor(public auth: AuthService) {
    this.auth.getfags().subscribe((res)=> {
      console.log(res);
      this.arr = res.data;
    })
  }

  ngOnInit(): void {
  }

  opt(ind) {
    if (ind == this.single && this.open == true) {
      this.single = -1;
      $(`#collapse${ind}`).collapse('toggle');
      this.open = false;
    } else {
      this.single = ind;
      $(`#collapse${ind}`).collapse('toggle');
      this.open = true;
    }
  }
}
