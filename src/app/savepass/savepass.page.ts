import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-savepass',
  templateUrl: 'savepass.page.html',
  styleUrls: ['savepass.page.scss'],
})
export class SavepassPage {
  username: string = '';
  password: string = '';
  email: string = '';
  containsNumber: boolean = false; // Esta propiedad debe inicializarse en falso
  constructor(private router: Router, private firebaseService: FirebaseService) {}

  recuperar() {
    // Validación de datos
    if (!this.username || !this.password || !this.email) {
      console.log('Por favor, complete todos los campos.');
      return;
    }

    this.containsNumber = /\d/.test(this.password); // Debes verificar la presencia de un número aquí

    if (!this.containsNumber) {
      console.log('La contraseña debe contener al menos un número.');
      return;
    }

    this.firebaseService.resetPassword(this.email)
      .then(() => {
        // Se ha enviado un enlace de restablecimiento de contraseña al correo electrónico del usuario
      })
      .catch((error) => {
        console.error('Hubo un error al enviar el enlace de restablecimiento de contraseña:', error);
      });
  }

  volverAtras() {
    this.router.navigate(['/iniciarsesion']);
  }
}

