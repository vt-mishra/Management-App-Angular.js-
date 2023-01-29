
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  
  index : any;
  obj: any;

  constructor(private routes: Router, private contacts: ContactsService , private auth : AuthService, private activated:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activated.queryParams.subscribe((params:any)=>{
      console.log(params.id);
      this.index=params.id;
      this.getDataById()
    })
     }
  

  contactForm = new FormGroup({
    // id : new FormControl (''),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,]),
    description: new FormControl('', [Validators.required]),
  });
  addContact(){ 
       console.log(this.contactForm.value);
       this.contacts.addContact(this.contactForm.value).subscribe(success => {
       console.log(success);
       alert("contact added...");
       this.routes.navigate(['contacts/contactlist']);
    }, error => {
      console.log(error);
      alert("Error");
      
    }); 
 };
 
 getDataById(){
  this.contacts.getData(this.index).subscribe((success:any) =>{
    console.log("success",success);
    this.obj = success.data[0];
    this.contactForm.patchValue(this.obj);
  })
 } 
 updatecontact(){
  console.log(this.contactForm.value);
  let obj = this.contactForm.value;
  this.contacts.editContact(this.index,this.contactForm.value).subscribe(success =>{
    console.log(success);
    this.routes.navigate(['contacts/contactlist'])
  })
 }
}