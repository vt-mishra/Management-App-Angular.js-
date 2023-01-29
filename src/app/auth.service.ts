import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({

    })
  };
  
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(environment.baseUrl + 'student/login', data);
  }

  signup(data: any) {
    return this.http.post(environment.baseUrl + 'student/register', data);
  }

  getAllContacts() {
    let token = localStorage.getItem('token');

    if (token != null) 
    {

      this.httpOptions = {

        headers: new HttpHeaders({
          
          "Content-type": 'application/json',
          "x-access-token": token
        })
      };
    }

    return this.http.get(environment.baseUrl + 'contact/getAllContactByStudentId' + localStorage.getItem("Id"),this.httpOptions );
  }
}
