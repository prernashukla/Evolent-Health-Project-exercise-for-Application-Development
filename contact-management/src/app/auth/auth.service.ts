import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient,
        private router: Router) { }

    signin() {
     return this.httpClient.get("assets/json/user.json")
    }


}
