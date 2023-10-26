import { Component } from '@angular/core';
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
    private router: Router
  ) {}

  async register(user: Users) {
    try {
      // Registrar el usuario en Firebase Authentication
      const userCredential = await this.firebaseService.register(
        user.correo,
        user.password
      );

      // El usuario se ha registrado con éxito en Firebase Authentication
      // Ahora, guarda su información en Cloud Firestore
      await this.firestore
        .collection('Usuarios')
        .doc(userCredential.user.uid)
        .set({
          correo: user.correo,
          // otros campos que quieras guardar
        });

      // Redirige al usuario a una página de éxito o a donde desees
      this.router.navigate(['/usuarioregistrado']);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  }
}
