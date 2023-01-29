
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  
  allContacts:any = [];
constructor(private routes:Router , private contacts: ContactsService) { }


  ngOnInit(): void {  
   this.contacts.getAllContact().subscribe(success => {
    console.log(success);
    let s:any = success;
    this.allContacts = s.data;
   })
  };
  add(){ 
    this.routes.navigate(['/contacts/contactsForm']);
  }
  
  edit(data:any){ 
    this.routes.navigate(['./contacts/contactsForm'],{
      queryParams:{
        id : data.id
      }
    })
  }
  deleteContact(id : any){
    this.contacts.deleteContact(id).subscribe(success =>{
      this.contacts.getAllContact().subscribe(success =>{
        console.log(success);
        let s:any =success;
        this.allContacts=s.data;
      })
    })
   }

   logout(){
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    this.routes.navigate(['/login'])
   }
}