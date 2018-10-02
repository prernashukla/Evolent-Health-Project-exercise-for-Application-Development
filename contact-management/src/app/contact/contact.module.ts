import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ContactListComponent, AddContactComponent]
})
export class ContactModule { }