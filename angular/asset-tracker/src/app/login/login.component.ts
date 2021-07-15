import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(username:string,password:string){

 this.userService.getUserToken(username,password).subscribe((res=>{
   localStorage.setItem("token",res);
   this.router.navigate(["/main"]);

 }),(err)=>{
   console.log(err);
 })

  }

}
