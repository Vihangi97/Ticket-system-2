import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) { }

  onLogin() {
    console.log(this.username.value + " - " + this.password.value)
    if (this.username.value == 'admin' && this.password.value == 'admin') {
      this.router.navigate(['/tickets']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
