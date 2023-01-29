
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  httpOptions = { 
    headers : new HttpHeaders({})
  };
  constructor(private http :  HttpClient) { }
  

  getToken(){
    let token = localStorage.getItem("token");
    if(token != null)
    {
      this.httpOptions = { 
        headers : new HttpHeaders({ 
          "Content-type" : 'application/json',
          "x-access-token" : token
        })
      };
    }
  }
  getAllContact(){
    this.getToken();
    return this.http.get(environment.baseUrl + 'contact/getAllContactByStudentId/'+ localStorage.getItem("id"),this.httpOptions);
  }
    

    addContact( data : any){ 
    this.getToken();
    return this.http.post(environment.baseUrl + 'contact/addContact'  ,data ,this.httpOptions)
    
  }
    deleteContact( id : any){ 
      this.getToken();
      return this.http.delete( environment.baseUrl + 'contact/deleteContactById/' + id ,this.httpOptions);
    }

    editContact( data : any,id:any){ 
      this.getToken();
      return this.http.put(environment.baseUrl + 'contact/updateContactById/' + data,id, this.httpOptions);
    }
   
     getData(id:any){
      this.getToken();
      return this.http.get(environment.baseUrl + 'contact/getContactById/' + id,this.httpOptions)
     } 
  
}