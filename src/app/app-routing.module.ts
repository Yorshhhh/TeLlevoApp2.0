import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { IniciarsesionPage } from './iniciarsesion/iniciarsesion.page'; 
import { SavepassPage } from './savepass/savepass.page';
import { PagusuarioPageModule } from './pagusuario/pagusuario.module';
import { TipopersonaPage } from './tipopersona/tipopersona.page';
/* ---------------------------------------------------------------------------------------------------------- */
const routes: Routes = [
  {
    path: 'home', /* PAGINA PRINCIPAL */
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registrouser',/* REGISTRO DE USUARIO */
    loadChildren: () => import('./registrouser/registrouser.module').then(m => m.RegistrouserPageModule)
  },
  {
    path: 'usuarioregistrado', /* USUARIO REGISTRADO */
    loadChildren: () => import('./usuarioregistrado/usuarioregistrado.module').then( m => m.UsuarioregistradoPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciarsesion', /* INICIAR SESION */
    loadChildren: () => import('./iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'savepass',/* RECUPERAR CONTRASEÑA */
    loadChildren: () => import('./savepass/savepass.module').then( m => m.SavepassPageModule)
  },
  {
    path: 'pagusuario',
    loadChildren: () => import('./pagusuario/pagusuario.module').then( m => m.PagusuarioPageModule)
  },
  {
    path: 'mivehiculo',
    loadChildren: () => import('./mivehiculo/mivehiculo.module').then( m => m.MivehiculoPageModule)
  },
  {
    path: 'tipopersona',
    loadChildren: () => import('./tipopersona/tipopersona.module').then( m => m.TipopersonaPageModule)
  
  },

  
// app-routing.module.ts

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
