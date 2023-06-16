import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../email/contact';
import { ContactService } from '../email/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  model = new Contact();
  submitted = false;
  err: any = {};
  MessageSuccess!: string
  MessageError!: string

  constructor(
    private router: Router,
    private cService: ContactService
  ) { }


  onSubmit() {
    this.submitted = true;
    return this.cService.contactForm(this.model).subscribe({
      next: (data: any) => {
        this.model = data;
        this.MessageError = "📩 Message Failed!!!"
      }
      ,
      error: (error: HttpErrorResponse) => {
        this.MessageSuccess = " 📩 Message Sent Successfully!"
        this.model = new Contact()

      }
    }
    )
  }

  ngOnInit(): void {

  }
}
