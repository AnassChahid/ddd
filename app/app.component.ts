import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  currentDate: string | undefined;
  constructor() {
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
}
