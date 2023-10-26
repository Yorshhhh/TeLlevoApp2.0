import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToIniciarSesion() {
    this.router.navigate(['/iniciarsesion']); // Navega a la página 'iniciarsesion'
  }

  // ... otros métodos y lógica de la página ...

}