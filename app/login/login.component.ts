import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from '../authservice/authuser.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private aus: AuthuserService, private router: Router) { }

  datatoken: any
  messageError!: string
  messageSuccess!: string
  data: any

  register(body: any) {
    this.data = body.value
    this.aus.register(this.data).subscribe(
      (response: any) => {
        console.log(response)
        this.messageSuccess = "Registered Successfully 💯";
        this.router.navigate(['/login'])


      }
      , (error: HttpErrorResponse) => {
        console.log(error)
        this.messageError = "This Email is already exist !";
      })




  }
  ngOnInit(): void {
  }


  login(f: any) {
    let data = f.value;
    this.aus.login(data).subscribe(
      (response: any) => {
        this.datatoken = response
        this.aus.saveToken(this.datatoken.token)
        this.router.navigate(['/home'])
      }
      , (error: HttpErrorResponse) => {
        this.messageError = "Email Or Password Incorrect";
      })

  }





}
