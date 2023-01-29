
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent } from './contactlist/contactlist.component';

import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

var routes:Routes =[
  {path: '', redirectTo : 'contactlist', pathMatch: 'full'},
  {path: 'contactlist', component: ContactlistComponent},
  {path: 'contactsForm', component: ContactformComponent}
] 

@NgModule({
  declarations: [
    ContactformComponent,
    ContactlistComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContactsModule { }