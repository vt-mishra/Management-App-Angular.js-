import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private auth:AuthService , private routes:Router) { }

  ngOnInit(): void {
   
}  

  loginForm = new FormGroup({
  email : new FormControl('' , [Validators.required ,Validators.email]),
  password : new FormControl('' ,[Validators.required ,Validators.minLength(5)])
});


  login(){
  
    this.auth.login(this.loginForm.value).subscribe(success => {
      let s : any = success;
      console.log(success);
      localStorage.setItem("id" , s.data.id);
      localStorage.setItem("token" , s.data.token);
      alert("log in done Successfully")

    this.routes.navigate(['./contacts']);
   }
   , error=>{console.log(error);
  })
   
  }

}


