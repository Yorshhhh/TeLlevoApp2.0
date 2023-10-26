import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afAuth: AngularFireAuth) {}

  isAuthenticated() {
    return this.afAuth.authState; // Devuelve un observable del estado de autenticación
  }

  login(correo: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(correo, password);
  }

  register(correo: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(correo, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
