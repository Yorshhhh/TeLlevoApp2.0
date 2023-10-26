import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importa el módulo IonicModule
import { RouterModule } from '@angular/router'; // Importa el módulo RouterModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





// ========= Firebase ========== //
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { firebaseConfig } from './services/firebase.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Agrega IonicModule.forRoot() aquí
    RouterModule.forRoot([]), // Agrega RouterModule.forRoot([]) aquí
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
