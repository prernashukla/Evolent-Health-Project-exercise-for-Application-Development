import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    constructor() { }

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'This field is required',
            'invalidEmailAddress': 'Invalid Email Address',
            'numeric': 'Only numbers are allowed',
            'maxlength': 'length ' + validatorValue.actualLength + '. should not exceed more than ' + validatorValue.requiredLength
        };
        return config[validatorName];
    }

    static required(control) {
        if (!control.value) {
            return { 'required': true };
        }
        return null;
    }

    static emailValidator(control) {
        if (control.value && !String(control.value).match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            return { 'invalidEmailAddress': true };
        }
        return null;
    }

 

    static numeric(control) {
        if (control.value && !String(control.value).match(/^\d+$/)) {
            return { 'numeric': true };
        }
        return null;
    }
    

}
