import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipopersona',
  templateUrl: './tipopersona.page.html',
  styleUrls: ['./tipopersona.page.scss'],
})
export class TipopersonaPage {
  selectedType: string = ''; // Propiedad para almacenar el tipo de persona seleccionado

  constructor(private router: Router) {}

  guardarTipo() {
    // Aquí debes guardar la selección del usuario en la base de datos o en algún servicio.
    // Por ejemplo, utilizando Firebase Firestore o Angular Services.
    if (this.selectedType === 'conductor') {
      // Guardar que el usuario es conductor
    } else if (this.selectedType === 'pasajero') {
      // Guardar que el usuario es pasajero
    }

    // Redirige al usuario a la página principal u otra página relevante.
    this.router.navigate(['/pagusuario']); // Ajusta la ruta según tu aplicación
  }
}
