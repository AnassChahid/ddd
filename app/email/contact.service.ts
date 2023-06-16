import { Injectable } from '@angular/core';
import { Contact } from './contact'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  errorData: any

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  contactForm(formData: Contact) {
    return this.http.post('http://localhost:8000/contact', formData);
  };


}
