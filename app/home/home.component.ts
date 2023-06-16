import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../email/contact.service';
import { Contact } from '../email/contact';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentDate: string | undefined;
  constructor(private router: Router, private cService: ContactService) {
    this.currentDate = this.getCurrentDate();
  }

  getCurrentDate(): string {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // Months are zero-based
    var day = today.getDate();

    // Format the date as desired (e.g., "MM/DD/YYYY")
    var formattedDate = month + '/' + day + '/' + year;

    return formattedDate;
  }

  model = new Contact();
  submitted = false;
  err: any = {};
  MessageSuccess!: string
  MessageError!: string

  onSubmit() {
    this.submitted = true;
    return this.cService.contactForm(this.model).subscribe({
      next: (data: any) => {
        // this.model = data;
        this.MessageError = "📩 Message Failed!!!"
      }
      ,
      error: (error: HttpErrorResponse) => {
        this.MessageSuccess = " 📩 Message Sent Successfully!"
        this.model = new Contact();

      }
    }
    )
  }

  ngOnInit(): void {

  }

}
