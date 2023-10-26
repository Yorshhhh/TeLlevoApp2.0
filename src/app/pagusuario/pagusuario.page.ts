import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagusuario',
  templateUrl: 'pagusuario.page.html',
  styleUrls: ['pagusuario.page.scss'],
})
export class PagusuarioPage {
  nombreUsuario: string = ''; // Declara la propiedad nombreUsuario
  imagenUsuario: string = 'assets/user1.jpg'; // La imagen de perfil actual del usuario.

  @ViewChild('fileInput') fileInput: any;

  constructor(private router: Router) {}

  cerrarSesion() {
    // Agrega aquí la lógica para cerrar la sesión si es necesario.
    // Por ejemplo, limpiar token de autenticación, datos en caché, etc.

    // Luego, redirige a la página de inicio
    this.router.navigate(['/home']); // Asegúrate de que 'home' sea la ruta correcta
  }

  seleccionarImagen(fileInput: any) {
    fileInput.click();
  }

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // Actualiza la imagen de perfil con la nueva imagen seleccionada.
        this.imagenUsuario = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  // Esta función navegará a la página "tipopersona"
  irAPageTipoPersona() {
    this.router.navigate(['/tipopersona']);
  }
}
