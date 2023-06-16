import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from '../authservice/authuser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authuser: AuthuserService, private router: Router) {

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
