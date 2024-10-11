import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:3000/api/signin', this.user)
      .subscribe(response => {
        console.log('User signed in', response);
      });
  }
}
