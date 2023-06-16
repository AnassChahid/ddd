import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  helper = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient) {

  }

  register(body: any) {
    return this.http.post("http://localhost:8000/register", body);
  }

  login(body: any) {
    return this.http.post("http://localhost:8000/login", body);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  userLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    const decodeToken = this.helper.decodeToken(token);

    if (decodeToken.role) {
      return false;
    }

    if (this.helper.isTokenExpired(token)) {
      return false;
    }

    return true;
  }


}
