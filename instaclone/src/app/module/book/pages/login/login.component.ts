import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMsg: Array<string> = [];


  constructor(private router: Router){}
  login() {
    this.errorMsg = [];
  
  }

  register() {
    this.router.navigate(['register']);
  }

}
