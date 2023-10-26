import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-usuarioregistrado',
  templateUrl: './usuarioregistrado.page.html',
  styleUrls: ['./usuarioregistrado.page.scss'],
})
export class UsuarioregistradoPage implements OnInit {
  userIsAuthenticated: boolean = false; // Inicializa la variable con un valor predeterminado

  constructor(private authService: FirebaseService) {}

  ngOnInit() {
    this.checkAuthentication(); // Verifica el estado de autenticación al inicializar la página
  }

  checkAuthentication() {
    // Comprueba si el usuario está autenticado
    this.authService.isAuthenticated()
      .subscribe((authState) => {
        this.userIsAuthenticated = !!authState; // Asigna true si authState no es nulo
      });
  }
}

