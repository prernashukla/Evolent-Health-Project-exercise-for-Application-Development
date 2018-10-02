import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../contact.model';
import { CommonConstants } from '../../shared/constants/common-constants';
import { ContactService } from '../contact.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  isAddContactPopup = false;
  contact: Contact;
  contactForm: FormGroup;
  @Input() mode: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(50), ValidationService.emailValidator]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(10), ValidationService.numeric]),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
        city: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        postalCode: new FormControl(null, [Validators.required, Validators.maxLength(50), ValidationService.numeric]),
        country: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      })
    });
  }

  onComponentLoad(mode, contact) {
    this.mode = mode;
    this.isAddContactPopup = true;
    this.contactForm.reset();
    if (this.mode != CommonConstants.ADD) {
      this.contact = this.contactService.getContactById(contact.id);
      this.contactForm.setValue(this.contact);
    }
    if (this.mode == CommonConstants.VIEW) {
      this.contactForm.disable();
    } else {
      this.contactForm.enable();
    }
  }

  saveContact() {
    this.isAddContactPopup = false;
    if (this.mode == CommonConstants.ADD) {
      this.contactService.addContact(this.contactForm.getRawValue());
    } else if (this.mode == CommonConstants.EDIT) {
      this.contactService.updateContact(this.contactForm.getRawValue());
    }

  }
}
