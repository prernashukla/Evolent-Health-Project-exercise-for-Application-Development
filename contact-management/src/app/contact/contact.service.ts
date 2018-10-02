import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { ConfirmationService, Message } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: any[];
  private id = 4;

  constructor(private httpClient: HttpClient,
    private confirmationService: ConfirmationService) { }

  getContactList() {
    return this.httpClient.get('assets/json/contacts.json');
  }

  getContacts() {
    return this.contacts;
  }

  setContacts(contacts) {
    this.contacts = contacts;
  }

  getContactById(contactId): Contact {
    var contact: Contact;
    this.contacts.forEach(function (element, index) {
      if (element.id == contactId) {
        contact = element;
      }
    });
    return contact;
  }

  addContact(contact) {
    var duplicates = this.contacts.find(function (element) {
      return element['phoneNumber'] == contact['phoneNumber'] && element['email'] == contact['email'];
    });
    if (duplicates.length == 0) {
      contact['id'] = this.id++;
      this.contacts.unshift(contact);
    } else {
      this.confirmationService.confirm({
        message: 'Record already present. Please enter different email and phone number.',
        header: 'Error',
        icon: 'pi pi-info-circle',
        acceptLabel: 'OK',
        rejectVisible : false
      });
    }
  }

  updateContact(contact) {
    var index = this.getContactIndex(contact.id);
    this.contacts.splice(index, 1, contact);
  }

  deleteContact(rowData) {
    var index = this.getContactIndex(rowData.id);
    rowData.inActive = !rowData.inActive;
    this.contacts.splice(index, 1, rowData);
  }

  getContactIndex(contactId) {
    var contactIndex;
    this.contacts.forEach(function (element, index) {
      if (element.id == contactId) {
        contactIndex = index;
      }
    });
    return contactIndex;
  }

}
