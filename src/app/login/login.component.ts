import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = 'admin';
  password = '';

  constructor(private readonly router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin123') {
      sessionStorage.setItem('admin-auth', 'true');
      this.router.navigateByUrl('/admin');
      return;
    }

    alert('Usuario o contraseña incorrectos.');
  }
}
