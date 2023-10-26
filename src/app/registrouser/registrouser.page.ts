import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Users } from '../models/user.models';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage {
  user = {} as Users;
  constructor(
    private firebaseService: FirebaseService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastCtrl: ToastController
  ) {}
  async register() {
    try {
      this.formValidation()
      // Registrar el usuario en Firebase Authentication
      const userCredential = await this.firebaseService.register(
        this.user.correo,
        this.user.password
      );
      console.log('usuario registrado con exito')
      // Redirige al usuario a una página de éxito o a donde desees
      this.router.navigate(['/usuarioregistrado']);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  }
  formValidation() {
    if (!this.user.correo) {
      this.showToast("Ingresa un correo!");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Ingrese su contraseña!");
      return false;
    }
    return true;
  }
  showToast(message: string) {
    this.toastCtrl.
      create({
        message: message,
        duration: 3000
      }).then(toastData => toastData.present())
  }
}
