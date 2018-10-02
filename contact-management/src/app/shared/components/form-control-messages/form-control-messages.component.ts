import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'control-messages',
  templateUrl: './form-control-messages.component.html'
})
export class FormControlMessagesComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    // for(let control1 in this.control){
    // debugger;
    //   for (let propertyName in this.control[control1].errors) {
    //      if (this.control[control1].errors.hasOwnProperty(propertyName) && this.control[control1].touched) {
    //        return ValidationService.getValidatorErrorMessage(propertyName, this.control[control1].errors[propertyName]);
    //      }
    //   }
    // }
   
  for (let propertyName in this.control.errors) {
    if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
      return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
    }
   }
    return null;
  }

}
