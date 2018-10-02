import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    errorMessage: string;
    isInvalidUser = false;

    constructor(private router: Router,
        private authService: AuthService) {

    }

    ngOnInit() {
        localStorage.clear();
        this.bulidForm();
    }
    bulidForm() {
        this.loginForm = new FormGroup({
            username: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }

    onSubmit() {
        const user = this.loginForm.getRawValue();
        this.authService.signin().subscribe(response => {
            const users = Object.assign(response);
            if (user['username'] == response['userName']) {
                localStorage.setItem('user', JSON.stringify(response));
                this.isInvalidUser = false;
                this.router.navigate(['/contact-management/contacts']);
            } else {
                this.isInvalidUser = true;
            }
        });
    }
}
