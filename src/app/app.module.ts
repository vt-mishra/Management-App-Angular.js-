import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ContactsModule} from './contacts/contacts.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


var routes: Routes = [
  {path: ' ', redirectTo : 'login', pathMatch : "full" },

  {path: 'login' , component : LoginComponent},

  {path: 'signup' , component : SignupComponent},

  {path: 'contacts' ,
   loadChildren : () => import('./contacts/contacts.module').then(m =>m.ContactsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
   
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    HttpClientModule,

    RouterModule.forRoot(routes),

    FormsModule, ReactiveFormsModule,

    ContactsModule,

    CommonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
