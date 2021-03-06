import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  opened = false;

  public log(state:String){
    console.log(state);
    this.opened = !this.opened
  }

  logout(){
  localStorage.clear();
  this.router.navigate(["/login"]);
  }
}
