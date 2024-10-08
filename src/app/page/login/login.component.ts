import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  authService = inject(AuthService);
  router = inject(Router);

  login(form: NgForm) {
    this.authService.login(form.value).subscribe(response => {
      if (response.accessToken) {
        sessionStorage.setItem("login", "true");

        this.authService.getUserRole(form.value.email).subscribe(user => {
          const role = user[0]?.role; 
          if (role) {
            sessionStorage.setItem("role", role);           
            window.location.reload();       
          }
        });
        this.router.navigate(['/home']);  
      }
    });
  }
  registrar(){
    window.location.href = "crearUsuario";
  }
}