import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Contact } from '../contact.model';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactService } from '../contact.service';
import { CommonConstants } from '../../shared/constants/common-constants';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  cols: any[] = [];
  contact: Contact;
  contactList: any[];
  isAddContactPopup = false;

  @ViewChild(AddContactComponent) addContactComponent: AddContactComponent;

  mode: string;
  msgs: Message[] = [];
  optionMenu: MenuItem[];
  searchField: string;
  constructor(private contactService: ContactService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.cols = [
     // { field: 'id', header: 'Action', sortable: false, width: '60px' },
      { field: 'firstName', header: 'Name', width: '200px', sortable: true },
      { field: 'email', header: 'Email Id', width: '230px', sortable: true },
      { field: 'address', header: 'Address', sortable: false },
      { field: 'phoneNumber', header: 'Contact Number', width: '150px', sortable: true },
      { field: 'inActive', header: 'Status', width: '120px', sortable: true },
      { field: 'edit', header: 'Edit', width: '80px', sortable: false },
      { field: 'view', header: 'View', width: '90px', sortable: false },
      { field: 'delete', header: 'Action', width: '120px', sortable: false }
    ];
    this.getContacts();
  }

  /**
   * This method is used to fetch all contacts from JSON
   */
  getContacts() {
    this.contactService.getContactList().subscribe(
      response => {
        this.contactList = Object.assign(response);
        this.contactService.setContacts(this.contactList);
      }
    );
  }

  /**
     * This method is used to open actions pop-up
     * @param menu is an object binded to p-menu 
     * @param event is an $event object
     * @param data is row data object of data table 
     */
  showPopup(menu, event, data) {
    const statusLabel = data.isActive ? 'Inactive' : 'Active';
        const statusicon = data.isActive ? 'fa fa-times' : 'fa fa-check';
        this.optionMenu = [
            {
                label: 'View', icon: 'fa-eye', command: (event1) => {
                  this.addNewContact('VIEW', data);
                }
            },
            {
                label: 'Edit', icon: 'fa-pencil', command: (event1) => {
                  this.addNewContact('VIEW', data);
                }
            },
            {
                label: statusLabel, icon: statusicon, command: (event1) => {
                  this.toggleStatus(data);
                }
            }
        ];
        menu.toggle(event);
  }


  /**
   * This method is used to open add contact pop up and pass required values
   */
  addNewContact(mode, rowData) {
    debugger;
    this.isAddContactPopup = true;
    this.mode = mode;
    this.addContactComponent.onComponentLoad(mode, rowData);
  }

  /**
   * This method is used to activate/inactivae records
   * @param rowData selected row
   */
  toggleStatus(rowData) {
    var msg = rowData.inActive ? 'activate' : 'inactivate';
    this.confirmationService.confirm({
      message: 'Are you sure you want to ' + msg + ' this record?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.contactService.deleteContact(rowData);
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record ' + msg + 'd!' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });

  }
}
