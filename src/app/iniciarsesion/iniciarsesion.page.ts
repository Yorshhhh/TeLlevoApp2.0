import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage {
  email: string = '';
  password: string = '';

  constructor(private firebaseService: FirebaseService) {}

  onLogin() {
    // Llama al método de inicio de sesión del servicio de autenticación con this.email y this.password
    this.firebaseService.login(this.email, this.password)
      .then((userCredential) => {
        // El usuario ha iniciado sesión con éxito
        // Puedes redirigir al usuario a la página deseada aquí
      })
      .catch((error) => {
        // Hubo un error al iniciar sesión
        // Puedes manejar el error, mostrar un mensaje de error, etc.
      });
  }
}



