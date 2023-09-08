import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclaracionesVariablesComponent } from './declaraciones-variables/declaraciones-variables.component';


const routes: Routes = [
  { path: '', redirectTo: '/declaraciones-variables', pathMatch: 'full' }, // Redireccionar a /declaraciones-variables al cargar la aplicación
  { path: 'declaraciones-variables', component: DeclaracionesVariablesComponent }, // Ruta para el componente declaraciones-variables
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
