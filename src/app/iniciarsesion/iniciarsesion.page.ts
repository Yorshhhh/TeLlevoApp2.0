import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Users } from '../models/user.models';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage {
  user = {} as Users;
  email: string = '';
  password: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  async login() {
    try {
      this.formValidation();
      const userCredential = await this.firebaseService.login(
        this.user.correo,
        this.user.password
      );
      this.router.navigate(['/usuarioregistrado']);
    } catch (error) {
      console.error('Error al intentar logear');
    }
    /*  // Llama al método de inicio de sesión del servicio de autenticación con this.email y this.password
    this.firebaseService.login()
      .then((userCredential) => {
        // El usuario ha iniciado sesión con éxito
        // Puedes redirigir al usuario a la página deseada aquí
      })
      .catch((error) => {
        // Hubo un error al iniciar sesión
        // Puedes manejar el error, mostrar un mensaje de error, etc.
      }); */
  }
  formValidation() {
    if (!this.user.correo) {
      this.showToast('Ingresa tu correo!');
      return false;
    }
    if (!this.user.password) {
      this.showToast('Ingrese tu contraseña!');
      return false;
    }
    return true;
  }
  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
