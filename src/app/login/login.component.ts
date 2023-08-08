import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    userId:string="";
    password:string="";

   Login(){
    console.log("User Id:",this.userId);
    console.log("Password:",this.password);
   }

   path:string="../assets/login.jpg";
   
}
