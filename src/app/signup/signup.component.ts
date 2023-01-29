import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private routes: Router , private auth: AuthService ) { }

  signupForminvalid = true;


  ngOnInit(): void {
  }
    signupForm = new FormGroup ({
        studentName : new FormControl('' , Validators.required),
        phone : new FormControl('' , [Validators.required, Validators.minLength(10)]),
        rollNo: new FormControl('' , [Validators.required, Validators.minLength(5)]),
        email : new FormControl('' , [Validators.required, Validators.email]),
        password : new FormControl('' , [Validators.required , Validators.minLength(5)])
     });
    
   

    register(){

      console.log(this.signupForm.value);
      this.auth.signup(this.signupForm.value).subscribe(success =>{
        console.log(success);
        alert("signup successfully!");
        this.routes.navigate(['/login']);

        
    }, error => {
      console.log(error);
       alert("Something went wrong!");
        
    })
    
    }

}
